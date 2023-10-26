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
                                        <td key={i} className={`${d.tdClass}`}>{d.lebal}</td>
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
                                                    data[d.fieldKey] === "Published" ?
                                                    <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                                                        <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                                                        <span>{data?.[d?.fieldKey] ?? ''}</span>
                                                    </span> : data[d.fieldKey] === "Unpublished" ?
                                                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(255, 219, 185)', width: 'fit-content' }}>
                                                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(228, 130, 75)' }}></span>
                                                            <span>{data[d.fieldKey]}</span>
                                                        </span> : data?.[d?.fieldKey] ??<div className='d-flex justify-content-end me-2'>{d.customfield()}</div>
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

 // <div className='d-flex justify-content-end me-2'>{d?.customfield()}</div>
                                                        // {d?.customfield && <div className='d-flex justify-content-end me-2'>{d?.customfield()}</div>} 
                                                        
                                                            // <div className='d-flex justify-content-end me-2'>
                                                            //     <button className={`${d.btnclass}`}><img src='Edit-button.svg' alt='editbutton' /></button>
                                                            //     <button className={`${d.btnclass}`}><img src='copy-button.svg' alt='copybutton' /></button>
                                                            // </div> : data?.[d?.fieldKey] ?? ''