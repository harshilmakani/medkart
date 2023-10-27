import React from "react";
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import { useState } from "react";

const Tables = (props) => {
    const { data, datacolumn } = props;
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;


    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;        
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="p-0">

                <Table responsive>
                    <thead style={{ background: '#ebeef0' }}>
                        <tr>
                            {
                                datacolumn.map((d, i) => {
                                    return (
                                        <>
                                        
                                        <td key={i} className={`${d.tdClass}`}>
                                        {
                                            d?.enableCheck && <input className="form-check-input me-3 g-0" type="checkbox" value="" />
                                        }
                                        {d?.label}
                                        </td>
                                        </>
                                    );
                                })
                            }                            
                        </tr>
                    </thead>
                    <tbody style={{ borderStyle: 'none' }}>
                        {
                            currentItems.map((data, i) => {                                                                     
                                return (
                                    <tr key={i}>{
                                        datacolumn.map((d, index) => { 
                                          
                                            return (
                                                <td key={index} className={`${d.valueTdClass}`}>{                                                     
                                                    d.fieldKey === "status" ? d.customfield(data[d.fieldKey])
                                                     : d.customfield ? d.customfield(data) : data?.[d?.fieldKey]
                                                        }                                                        
                                                </td>
                                            );
                                        })}                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-between">
                <div className="ms-4 mt-2">
                    <span className="text-secondary">Showing {currentItems.length} of {data.length}</span>
                </div>
                <div className="me-3">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageClassName="page-item px-1"
                        pageLinkClassName="page-link"
                        previousClassName="page-item pe-1"
                        previousLinkClassName="page-link"
                        nextClassName="page-item ps-1"
                        nextLinkClassName="page-link"
                        activeLinkClassName="active"
                    />
                </div>
            </div>
        </>
    );
}

export default Tables;
