import React from "react";
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from "../Dashboard/Tables";

const PurchaseReturn = () => {
    const { purchasereturn } = Appdata;
    const purchasereturnColumns = [
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'picknote_no',
            label: 'Pick Note No',            
        },        
        {
            fieldKey: 'vendor_name',
            label: 'Vendor Name',
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
            fieldKey: 'type',
            label: 'Type',
            tdClass: 'ps-4',
            valueTdClass: 'ps-4',
            customfield: (row) => {                
                 return (                  
                         row.type &&
                            <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(235, 238, 240)', width: 'fit-content' }}>
                                <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(192, 192, 192)' }}></span>
                                <span>{row.type}</span>
                            </span> 
                );
            }            
        },
        {
            fieldKey: 'status',
            label: 'Status',
            customfield: (row) => {
                return (
                    row === "Debit Note Generated" || row === 'Confirmed' || row === 'Checked' ?
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
        {            
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        {
                            row.status === 'Draft' ? <button className='btn btn-outline-secondary py-0 px-2 me-1' onClick={() => console.log("rowdata", row)}>Create Debit Note</button>
                            : ''
                        }
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
                            <span style={{ color: 'rgb(85 86 166)' }}>Purchase Return</span>
                        </div>
                        <div><button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>Create Picknote</button></div>
                    </div>
                    <div className="row shadow-sm p-0 gx-0 rounded-1" style={{ background: "#fff" }}>
                        <div className="col d-flex  align-items-center py-1 ps-4 border-bottom">
                            <div className="p-2 me-3">PickNote</div>
                            <div className="p-2  ms-1">Debit Note</div>                            
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
                                        <option >Picknote No</option>
                                        <option >Vendor Name</option>

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
                        <Tables data={purchasereturn} datacolumn={purchasereturnColumns} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PurchaseReturn;