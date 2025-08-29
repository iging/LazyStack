import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { Tool } from "@/types/tool-types";

interface UseCategoryToolsParams {
  tools: Tool[];
  initialVisibleCount: number;
  itemsPerPage?: number;
}

interface UseCategoryToolsReturn {
  visibleTools: Tool[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  initialToolsLoaded: boolean;
  handlePageChange: (page: number) => void;
  sectionRef: React.RefObject<HTMLDivElement>;
}

/**
 * Custom hook for managing tool category pagination
 */
export function useCategoryTools({
  tools,
  initialVisibleCount,
  itemsPerPage = 6,
}: UseCategoryToolsParams): UseCategoryToolsReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [initialToolsLoaded, setInitialToolsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  // Calculate total pages
  const totalPages = Math.ceil(tools.length / itemsPerPage);

  // Calculate visible tools for current page
  const getVisibleTools = useCallback(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return tools.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, tools]);

  // Initial loading of tools
  useEffect(() => {
    setInitialToolsLoaded(true);
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;

      setIsLoading(true);
      scrollPositionRef.current = window.scrollY;
      setCurrentPage(page);
    },
    [totalPages],
  );

  // Reset to first page when tools change
  useEffect(() => {
    setCurrentPage(1);
  }, [tools]);

  // Use layout effect to handle scroll position immediately after DOM update
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (isLoading) {
      requestAnimationFrame(() => {
        // Restore scroll position after page change
        window.scrollTo({
          top: sectionRef.current?.offsetTop
            ? sectionRef.current.offsetTop - 20 // Add small offset from the top
            : 0,
          behavior: "smooth",
        });
        setIsLoading(false);
      });
    }
  }, [currentPage, isLoading]);

  return {
    visibleTools: getVisibleTools(),
    currentPage,
    totalPages,
    isLoading,
    initialToolsLoaded,
    handlePageChange,
    sectionRef,
  };
}
