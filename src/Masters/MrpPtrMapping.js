import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const MrpPtrMapping = () => {
    const { MrpPtrData } = Appdata;
    const MrpPtrDataColumns= [        
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'product_code',
            label: 'Product Code',
        },
        {
            fieldKey: 'wonderSoft_code',
            label: 'WonderSoft Code',
        },
        {
            fieldKey: 'product_name',
            label: 'Product Name',
        },
        {
            fieldKey: 'MRP',
            label: 'MRP',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'mRP_PTR_ratio',
            label: 'MRP/PTR Ratio',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            valueTdClass: 'ps-4',
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
                            <span style={{ color: 'rgb(85 86 166)' }}>MRP PTR Ratio</span>
                        </div>
                        <div>
                            <button className='btn btn-outline-primary me-3'>Import</button>
                            <button className='btn btn-outline-primary me-3'>Download</button>
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
                                        <option > Product</option>                                        
                                    </Form.Select>
                                </InputGroup>
                            </div>                            
                        </div>                        
                        <Tables data={MrpPtrData} datacolumn={MrpPtrDataColumns}/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MrpPtrMapping;