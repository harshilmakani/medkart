import React from "react";
import ReactPaginate from 'react-paginate';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
// import Appdata from "../Appdata";
import Table from 'react-bootstrap/Table';
import { useState } from "react";
// import Paginationshow from "../Dashboard/Paginationshow";

const Pages = (props) => {
    const { data } = props;
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
            <div className="vh-100 w-auto" >
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }} >
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span className="text-secondary">Product Master</span>
                        </div>
                        <div><button className="btn btn-primary px-3">+ Add</button></div>
                    </div>
                    <div className="row shadow-sm  gx-0 rounded-1" style={{ background: "#fff" }}>
                        <div className="col d-flex  align-items-center py-1  border-bottom">
                            <div className="p-2 ms-4">Unpublished/Draft</div>
                            <div className="p-2 ms-3 text-end">Published</div>
                        </div>
                        <div className="col-12 py-2 px-4 d-flex justify-content-between align-items-center">
                            <div className="col-4">
                                <InputGroup className="my-2 me-3">
                                    <InputGroup.Text className="bg-white border-end-0"><img src="Search-icon.svg" alt="search-icon" /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search here..."
                                        className="w-50 border-start-0"
                                    />
                                    <Form.Select aria-label="Default select example">
                                        <option > Product Code</option>
                                        <option value="1">Wendersoft</option>
                                        <option value="2">Product Name</option>
                                        <option value="3">Manufacturer</option>
                                    </Form.Select>
                                </InputGroup>
                            </div>
                            <div className="col-4 text-end">
                                <ButtonGroup >
                                    <Button className="btn text-secondary bg-white border-secondary px-4"><img src="filterIcon.svg" alt="filter_icon" className="me-1" />Filter</Button>
                                    <Button className="btn text-secondary bg-white border-secondary px-3"><img src="sortIcon.svg" alt="sort_icon" className="me-1 " />Sort by</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="p-0">

                            <Table responsive>
                                <thead style={{ background: '#ebeef0' }}>
                                    <tr>
                                        {
                                            Object.keys(currentItems[0]).map((d, i) => {
                                                return (
                                                    <td className="text-capitalize">{d.replace(/_/g, ' ')}</td>
                                                );
                                            })
                                        }
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderStyle: 'none' }}>
                                    {
                                        currentItems.map((data, i) => {
                                            return (
                                                <tr>{
                                                    Object.keys(currentItems[0]).map((d, i) => {                                                        
                                                        return (
                                                            <td>{data[d] === "Published" ?
                                                                <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                                                                    <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                                                                    <span>Published</span>
                                                                </span> : data[d] === "Unpublished" ?
                                                                    <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(255, 219, 185)', width: 'fit-content' }}>
                                                                        <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(228, 130, 75)' }}></span>
                                                                        <span>Unpublished</span>
                                                                    </span> : data[d]}</td>
                                                        );
                                                    })}
                                                    <td className="ps-5">
                                                        <div className='d-flex justify-content-end me-2'>
                                                            <button className='p-0 border-0 me-2 rounded-1'><img src='Edit-button.svg' alt='editbutton' /></button>
                                                            <button className='p-0 border-0 rounded-1'><img src='copy-button.svg' alt='copybutton' /></button>
                                                        </div>
                                                    </td>
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

                        {/* <Paginationshow/> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Pages;