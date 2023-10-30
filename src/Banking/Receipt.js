import React from "react";
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from "../Dashboard/Tables";

const Receipt = () => {
    const { receiptdata } = Appdata;
    const receiptdataColumns = [        
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'date',
            label: 'Date',
        },
        {
            fieldKey: 'receipt_no',
            label: 'Receipt No',
            valueTdClass: 'textcolor',
        },
        {
            fieldKey: 'account_name',
            label: 'Account Name',            
        },        
        {
            fieldKey: 'type',
            label: 'Type',
        },
        {
            fieldKey: 'opposite_account',
            label: 'Opposite Account',
        },
        {
            fieldKey: 'created_by',
            label: 'Created By',
        },
        {
            fieldKey: 'payment_mode',
            label: 'Payment Mode',
        },
        {
            fieldKey: 'amount',
            label: 'Amount',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {            
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)} ><img src='Retry.svg' alt='retry_icon' /></button>                        
                    </div>                
                )
            }
        },
        {           
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1 me-2' onClick={() => console.log("rowdata", row)} ><img src='Edit-button.svg' alt='edit_icon' /></button>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)} ><img src='delete_icon.svg' alt='delete_icon' /></button>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>Receipt</span>
                        </div>
                        <div><button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>Add Receipt</button></div>
                    </div>
                    <div className="row shadow-sm p-0 gx-0 rounded-1" style={{ background: "#fff" }}>

                        <div className="col-12 py-2 px-4 d-flex justify-content-between align-items-center">
                            <div className="col-4">
                                <InputGroup className="my-2 me-3">
                                    <InputGroup.Text className="bg-white border-end-0"><img src="Search-icon.svg" alt="search-icon" /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Search here..."
                                        className="w-50 border-start-0"
                                    />
                                    <Form.Select aria-label="Default select example">
                                        <option >Receipt No</option>
                                        <option >Account Name</option>
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
                        <Tables data={receiptdata} datacolumn={receiptdataColumns} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Receipt;