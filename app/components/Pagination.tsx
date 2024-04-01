'use client'

import ReactPaginate from 'react-paginate';

const Pagination = ({ pageHandler }) => {
  return (
    <div>
     <ReactPaginate 
        breakLabel="..."
        previousClassName="previous"
        previousLabel="< prev"
        nextClassName="next"
        nextLabel="next >"
        pageCount={42}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={pageHandler}
        containerClassName="pagination"
        pageClassName="page-item"
        activeClassName="active"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        />
    </div>
  )
}

export default Pagination