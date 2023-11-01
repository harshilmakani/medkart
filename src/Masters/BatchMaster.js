import React from "react";
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from "../Dashboard/Tables";

const BatchMaster = () => {
    const { batchmaster } = Appdata;

    const batchmasterColumns = [

        {
            fieldKey: 'batch_no',
            label: 'Batch No',
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
        },
        {
            fieldKey: 'mrp',
            label: 'MRP',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'expiry_date',
            label: 'Expiry Date',
            tdClass: 'ps-4',
            valueTdClass: 'ps-4',
        },
        {
            fieldKey: 'manufacturer_date',
            label: 'Manufacture Date',
        },               
    ];
    return (
        <div>
            <div className="vh-100 w-auto" >
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }} >
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span style={{ color: 'rgb(85 86 166)'}}>Batch Master</span>
                        </div>
                        <div><button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>+ Add</button></div>
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
                                        <option > Product</option>                                        
                                    </Form.Select>
                                </InputGroup>
                            </div>
                            <div className="col-4 text-end">
                                <ButtonGroup >                                    
                                    <Button className="btn text-secondary bg-white border-secondary px-3"><img src="sortIcon.svg" alt="sort_icon" className="me-1 " />Sort by</Button>
                                </ButtonGroup>
                            </div>
                        </div>                       
                        <Tables data={batchmaster} datacolumn={batchmasterColumns} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BatchMaster;