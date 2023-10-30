import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Table from 'react-bootstrap/Table';
import Paginationshow from '../Dashboard/Paginationshow';
import Tables from '../Dashboard/Tables';

const PurchaseInvoice = () => {
    const { purchaseinvoice } = Appdata;
    const purchaseinvoiceColumns = [        
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'invoice_date',
            label: 'Invoice Date',
        },
        {
            fieldKey: 'PI_no',
            label: 'PI No',
        },
        {
            fieldKey: 'invoice_no',
            label: 'Invoice No',
        },
        {
            fieldKey: 'GRN_no',
            label: 'GRN No',           
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
            fieldKey: 'total_amount',
            label: 'Total Amount',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        }, 
        {
            valueTdClass: '',
            customfield: (row) => {
                return (                    
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)} ><img src='Retry.svg' alt='retry_icon' /></button>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>Purchase Invoice</span>
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
                                        <option >GRN No</option>
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
                        {/* <div className="mt-2">

                            <Table responsive>
                                <thead style={{ background: '#ebeef0' }}>
                                    <tr>
                                        {
                                            Object.keys(purchaseinvoice[0]).map((d, i) => {
                                                return (
                                                    <td className="text-capitalize">{d === 'total_products' || d === 'total_qty' || d === 'total_amount' ?
                                                        <div className='text-end'>{d.replace(/_/g, ' ')}</div> : d.replace(/_/g, ' ')}</td>
                                                );
                                            })
                                        }
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderStyle: 'none' }}>
                                    {
                                        purchaseinvoice.map((data, i) => {
                                            return (
                                                <tr>
                                                    {
                                                        Object.keys(purchaseinvoice[0]).map((d, i) => {

                                                            return (
                                                                <td>{d === "total_products" || d === "total_qty" || d === 'total_amount' ? <div className='text-end'>{data[d]}</div>
                                                                    : d === "vendor_name" ? <span style={{ color: 'rgb(85 86 166)' }}>{data[d]}</span>
                                                                        : data[d]
                                                                }</td>
                                                            );
                                                        })}
                                                    <td>
                                                        <div className='d-flex justify-content-end me-2'>
                                                            <button className='p-0 border-0 rounded-1'><img src='Retry.svg' alt='retry_icon' /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <Paginationshow /> */}
                        <Tables data={purchaseinvoice} datacolumn={purchaseinvoiceColumns} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PurchaseInvoice;