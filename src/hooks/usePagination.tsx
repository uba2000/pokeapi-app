import { useState } from 'react'

interface UsePaginationProps {
  data: any[];
  itemsPerPage?: number;
}

/**
 * This custom hook provides pagination functionality for a given array of data. 
 * It manages the current page, calculates the index of items to be displayed on the current page, and provides functions to navigate to the next and previous pages.
 */
function usePagination({ data, itemsPerPage = 25 }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Function to navigate to the next page
  const paginateNext = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage)));
  };

  // Function to navigate to the previous page
  const paginatePrev = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Calculate the index of the first and last items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return {
    totalPages,
    currentItems,
    currentPage,
    paginateNext,
    paginatePrev
  };
}

export default usePagination