import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const MinMaxMaster = () => {
    const { minmaxmaster } = Appdata;
    const minmaxmastercolumns = [
        {
            product_code: 67677,
            wondersoft_code: 3080,
            product_name: 'FDSON MP D3 TAB 1X10',
            warehouse: 'HO',
            min_value: 2,
            max_value: 20,
            total_stock: 25,
            available: 25,
            reserved: 0,
            on_hold: 0,
        },
        {
            tdClass: 'ps-2',
            valueTdClass: 'ps-2',
            fieldKey: 'product_code',
            label: 'Product Code',            
        },
        {
            fieldKey: 'wondersoft_code',
            label: 'Wondersoft Code',
        },
        {
            fieldKey: 'product_name',
            label: 'Product Name',
        },
        {
            fieldKey: 'warehouse',
            label: 'Warehouse',
        },
        {
            tdClass: 'text-end',
            valueTdClass: 'text-end pe-3',
            fieldKey: 'min_value',
            label: 'Min Value',
        },
        {
            tdClass: 'text-end',
            valueTdClass: 'text-end pe-3',
            fieldKey: 'max_value',
            label: 'Max Value',
        },
        {
            tdClass: 'text-end',
            valueTdClass: 'text-end pe-3',
            fieldKey: 'total_stock',
            label: 'Totel Stock',
        },
        {
            tdClass: 'text-end ',
            valueTdClass: 'text-end text-success pe-3',
            fieldKey: 'available',
            label: 'Available',
        },
        {
            tdClass: 'text-end',
            valueTdClass: 'text-end text-warning pe-3',
            fieldKey: 'reserved',
            label: 'Reserved',
        },
        {
            tdClass: 'text-end',
            valueTdClass: 'text-end text-danger pe-3',
            fieldKey: 'on_hold',
            label: 'On Hold',
        },
        {
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)}><img src='Edit-button.svg' alt='edit_icon' /></button>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>Min Max Master</span>
                        </div>
                        <div>
                            <button className='btn btn-outline-danger me-3'>Clear All values</button>
                            <button className='btn btn-outline-primary me-3'>Import</button>
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
                                        <option > Product Code</option>
                                        <option value="1">Wendersoft</option>
                                        <option value="2">Product Name</option>
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
                        <Tables data={minmaxmaster} datacolumn={minmaxmastercolumns} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MinMaxMaster;