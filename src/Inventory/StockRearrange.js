import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const StockRearrange = () => {
    const { stockrearrange } = Appdata;
    const stockrearrangeColumns = [
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'assingned_by_name',
            label: 'Assingned By Name',
        },
        {
            fieldKey: 'checker_name',
            label: 'Checker Name',
        },
        {
            fieldKey: 'rack_assigned',
            label: 'Rack Assigned',
            tdClass: '',
            valueTdClass: 'textcolor',
        },
        {
            fieldKey: 'lane_assigned',
            label: 'Lane Assigned',
        },
        {
            fieldKey: 'total_products',
            label: 'Total Products',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'assigned_at',
            label: 'Assigned At',
        },
        {
            fieldKey: 'started_at',
            label: 'Started At',
        },
        {
            fieldKey: 'complete_at',
            label: 'Complete At',
        },
        {
            fieldKey: 'no_of_queries',
            label: 'No of Queries',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'found_product',
            label: 'Found Product',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'not_found_product',
            label: 'Not Found Product',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'new_product',
            label: 'New Product',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'status',
            label: 'Status',
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            customfield: (row) => {
                return (
                    row === "Completed" ?
                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                            <span>{row}</span>
                        </span> : row === "In Progress" ?
                            <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(255, 219, 185)', width: 'fit-content' }}>
                                <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(228, 130, 75)' }}></span>
                                <span>{row}</span>
                            </span> : row === "Pending" ?
                                <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(255, 242, 185)', width: 'fit-content' }}>
                                    <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(228, 174, 75)' }}></span>
                                    <span>{row}</span>
                                </span> : row
                );
            }
        },
        {
            valueTdClass: '',
            customfield: (row) => {
                return ( row.status === 'Pending'?
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)}><img src='Edit-button.svg' alt='edit_icon' /></button>
                    </div> : ''
                )
            }
        },
    ];
    return (
        <div>
            <div className="vh-100 w-auto" >
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }} >
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span style={{ color: 'rgb(85 86 166)' }}>Stock Rearrange</span>
                        </div>
                        <div>
                            <button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>+ Assign</button>
                        </div>
                    </div>
                    <div className="row shadow-sm  gx-0 rounded-1" style={{ background: "#fff" }}>
                        <div className="col-12 py-2 px-4 d-flex justify-content-between align-items-center">
                            <div className="col-4">
                                <InputGroup className="my-2 me-3">
                                    <InputGroup.Text className="bg-white border-end-0"><img src="Search-icon.svg" alt="search-icon" /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search here..."
                                        className="w-50 border-start-0"
                                    />
                                    <Form.Select aria-label="Default select example">
                                        <option >Checker Name</option>
                                    </Form.Select>
                                </InputGroup>
                            </div>
                            <div className="col-4 text-end mb-2">
                                <ButtonGroup >
                                    <Button className="btn text-secondary bg-white border-secondary px-4"><img src="filterIcon.svg" alt="filter_icon" className="me-1" />Filter</Button>
                                    <Button className="btn text-secondary bg-white border-secondary px-3"><img src="sortIcon.svg" alt="sort_icon" className="me-1 " />Sort by</Button>
                                </ButtonGroup>
                            </div>
                        </div>                        
                        <Tables data={stockrearrange} datacolumn={stockrearrangeColumns}/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default StockRearrange;