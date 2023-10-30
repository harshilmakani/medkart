import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const B2cSales = () => {
    const { b2csales } = Appdata;
    const b2csalesColumns = [        
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'date',
            label: 'Date',
        },
        {
            fieldKey: 'invoice_no',
            label: 'Invoice No',
        },
        {
            fieldKey: 'SO_no',
            label: 'SO No.',
        },
        {
            fieldKey: 'sales_ref_no',
            label: 'Ssles Ref No',
        },
        {
            fieldKey: 'pick_note',
            label: 'Pick Note',
        },
        {
            fieldKey: 'customer_name',
            label: 'Customer Name',
            valueTdClass: 'textcolor',
        },
        {
            fieldKey: 'total_products',
            label: 'Total Products',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'total_qty',
            label: 'Total Qty',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'invoice_total',
            label: 'Invoice Total',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'due_amount',
            label: 'Due Amount',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'invoice_by',
            label: 'Invoice By',
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
        },
        {
            fieldKey: 'payment_status',
            label: 'Payment Status',
            customfield: (row) => {
                return (
                    row === "Fully Paid" ?
                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                            <span>{row}</span>
                        </span> : row === "Partially Paid" ?
                            <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(255, 242, 185)', width: 'fit-content' }}>
                                <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(228, 174, 75)' }}></span>
                                <span>{row}</span>
                            </span> : row === "UnPaid" ?
                                <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(254, 211, 209)', width: 'fit-content' }}>
                                    <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(215, 44, 13)' }}></span>
                                    <span>{row}</span>
                                </span> : row
                );
            }
        },
        {
            valueTdClass: '',
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)}><img src='Retry.svg' alt='retry_icon' /></button>
                    </div>
                )
            }
        },
        {
            valueTdClass: 'ps-3',
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        <button className='btn btn-outline-secondary py-0 px-2' onClick={() => console.log("rowdata", row)}> Print</button>
                    </div>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>B2C Sales</span>
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
                                        <option >Invoice No</option>
                                        <option >Customer Name</option>
                                        <option >SO No.</option>
                                        <option >Sales Ref No.</option>
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
                        <Tables data={b2csales} datacolumn={b2csalesColumns}/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default B2cSales;