import PropTypes from 'prop-types';
import { useState } from 'react';

export function usePagination(pagination: any) {
  const [pageSize, setPageSize] = useState(pagination?.pageSize ?? 25);
  const [page, setPage] = useState(pagination?.page ?? 1);

  return {
    page,
    pageSize,
    setPage,
    setPageSize,
    fetchProps: {
      pagination: {
        page,
        pageSize,
      },
    },
    mergePaginationProps: (meta: any) => ({
      pagination: {
        page: page - 1,
        pageSize,
        total: meta?.pagination.total,
        pageCount: meta?.pagination.pageCount,
      },
      onPageChange: (_: any, newPage: any) => setPage(newPage + 1),
      onPageSizeChange: (event: any) => setPageSize(parseInt(event.target.value, 10)),
    }),
  };
}

export const paginationPropTypes = {
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number,
    pageCount: PropTypes.number,
  }),
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export const paginationDefaultProps = {
  rowsPerPageOptions: [5, 10, 25, 50, 100],
};

export const graphQlPaginationMetaProps = `
pagination {
  page
  pageSize
  total
  pageCount
}
`;
