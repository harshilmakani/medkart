import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const Stockadjustment = () => {
    const { stockadjustment } = Appdata;
    const stockadjustmentColumns = [        
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3 textcolor',
            fieldKey: 'adj_no',
            label: 'Adj No',
        },
        {
            fieldKey: 'date',
            label: 'Date',
        },
        {
            fieldKey: 'type',
            label: 'Type',
        },
        {
            fieldKey: 'total_items',
            label: 'Total Items',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'total_adjusted_qty',
            label: 'Total Adjusted Qty',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'created_by',
            label: 'Created By',
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
        },
        {
            fieldKey: 'approved_by_rejected_by',
            label: 'Approved By/Rejected By',
        },
        {
            fieldKey: 'status',
            label: 'Status',
            customfield: (row) => {
                return (
                    row === "Approved" ?
                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                            <span>{row}</span>
                        </span> : row === "Draft" ?
                            <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(235, 238, 240)', width: 'fit-content' }}>
                                <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(192, 192, 192)' }}></span>
                                <span>{row}</span>
                            </span> : row
                );
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
                            <span style={{ color: 'rgb(85 86 166)'}}>Stock Adjustment</span>
                        </div>
                        <div>
                            <button className='btn btn-outline-primary me-3'>Import</button>
                            <button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>Add Adjustment</button>
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
                                        <option >Adj No.</option>
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
                        <Tables data={stockadjustment} datacolumn={stockadjustmentColumns}/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Stockadjustment;