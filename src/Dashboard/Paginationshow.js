import React from "react";
import Pagination from 'react-bootstrap/Pagination';

const Paginationshow = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="ms-4 mt-2">
                <span className="text-secondary">Showing 10 of 30</span>
            </div>
            <div className="me-3">
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item >{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{30}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </div>
        </div>
    );
}

export default Paginationshow;

// function PaginatedItems({ itemsPerPage }) {
    
//     const [itemOffset, setItemOffset] = useState(0);
  
    
//     const endOffset = itemOffset + itemsPerPage;    
//     const currentItems = items.slice(itemOffset, endOffset);
//     const pageCount = Math.ceil(items.length / itemsPerPage);
  
    
//     const handlePageClick = (event) => {
//       const newOffset = (event.selected * itemsPerPage) % items.length;
      
//       setItemOffset(newOffset);
//     };
  
//     return (
//       <>
//         <Items currentItems={currentItems} />
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={pageCount}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//         />
//       </>
//     );
//   }