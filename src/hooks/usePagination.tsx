import { useState } from 'react'

interface UsePaginationProps {
  data: any[];
  itemsPerPage?: number;
}

function usePagination({ data, itemsPerPage = 25 }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginateNext = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage)));
  };

  const paginatePrev = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Calculate the index of the first and last items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return {
    totalPages: Math.ceil(data.length / itemsPerPage),
    currentItems,
    currentPage,
    paginateNext,
    paginatePrev
  };
}

export default usePagination