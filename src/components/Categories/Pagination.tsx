import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  // Don't render if there's only one page
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Show max 5 page numbers at a time
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Always show first page
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Add page numbers in range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9 rounded-full border-purple-200/50 bg-white text-purple-700 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:bg-gray-800/80"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <Button
              key={`ellipsis-${index}`}
              variant="ghost"
              size="icon"
              className="h-9 w-9 cursor-default rounded-full"
              disabled
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => onPageChange(Number(page))}
              className={`h-9 w-9 rounded-full ${
                currentPage === page
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "border-purple-200/50 bg-white text-purple-700 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:bg-gray-800/80"
              }`}
            >
              {page}
            </Button>
          ),
        )}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9 rounded-full border-purple-200/50 bg-white text-purple-700 hover:bg-purple-50/80 dark:border-purple-900/30 dark:bg-gray-900/70 dark:text-purple-300 dark:hover:bg-gray-800/80"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}
