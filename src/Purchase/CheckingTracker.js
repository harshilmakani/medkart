import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const CheckingTracker = () => {
    const { checkingtracker } = Appdata;
    const checkingtrackerColumns = [
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'gate_pass_no',
            label: 'Gate Pass No',
        },
        {
            fieldKey: 'inward_date_time',
            label: 'Inward Date & Time',
        },
        {
            fieldKey: 'vendor_name',
            label: 'Vendor Name',
            valueTdClass: 'textcolor',
        },
        {
            fieldKey: 'invoice_no',
            label: 'Invoice No',
        },
        {
            fieldKey: 'invoice_amount',
            label: 'Invoice Amount',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'invoice_qty',
            label: 'Invoice Qty',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'no_of_SKU',
            label: 'No of SKU',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'start_time',
            label: 'Start Time',
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
        },
        {
            fieldKey: 'end_time',
            label: 'End Time',
        },
        {
            fieldKey: 'checker_name',
            label: 'Checker Name',
        },
        {
            fieldKey: 'status',
            label: 'Status',
            customfield: (row) => {
                return (
                    row === "Completed" ?
                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                            <span>{row}</span>
                        </span> : row
                );
            }
        },
        {
            valueTdClass: '',
            customfield: (row) => {
                return (row.status === 'Completed' ?
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)} disabled><img src='Edit-button-disabled.svg' alt='disabled_icon' /></button>
                    </div> :
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)} ><img src='Edit-button.svg' alt='edit_icon' /></button>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>Checking Tracker</span>
                        </div>
                        <div>
                            <button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>+ Add</button>
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
                                        <option >Gate Pass No</option>
                                        <option >Vendor</option>
                                        <option >Invoice No</option>
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
                        <Tables data={checkingtracker} datacolumn={checkingtrackerColumns} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CheckingTracker;