import React from "react";
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from "../Dashboard/Tables";

const PurchaseIndent = () => {
    const { purchaseindent } = Appdata;
    const purchaseindentColumns = [
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'product_name',
            label: 'Product Name',
            enableCheck: true,
            customfield: (row) => {
                return (
                    <div className="d-flex">
                        <input className="form-check-input me-3 g-0" type="checkbox" value=""></input>
                        {row.label && <p className="mb-0">{row.label}</p>}
                        {row.full_name && <p className="mb-0">{row.full_name}</p>}
                    </div>
                );
            },
        },
        {
            fieldKey: 'vendor_name',
            label: 'Vendor Name',
        },
        {
            fieldKey: 'b2b_category',
            label: 'B2B Category',
        },
        {
            fieldKey: 'date_time',
            label: 'Date & Time',
        },
        {
            fieldKey: 'b2b_order_qty',
            label: 'B2B Order Qty',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'b2c_order_qty',
            label: 'B2C Order Qty',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'wh_order_qty',
            label: 'WH Order Qty',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'purchase_unit',
            label: 'Purchase Unit',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'qty_to_be_ordered',
            label: 'Qty To Be Ordered',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'cas',
            label: 'CAS',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'ctr',
            label: 'CTR',
            tdClass: 'text-end',
            valueTdClass: 'text-end',
        },
        {
            fieldKey: 'status',
            label: 'Status',
            customfield: (row) => {
                return (
                    row === "Pending" ?
                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(255, 242, 185)', width: 'fit-content' }}>
                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(228, 174, 75)' }}></span>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>Purchase Indent</span>
                        </div>
                        <div><button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>Download PO</button></div>
                    </div>
                    <div className="row shadow-sm p-0 gx-0 rounded-1" style={{ background: "#fff" }}>
                        <div className="col d-flex  align-items-center py-1 ps-4 border-bottom">
                            <div className="p-2 me-3">Pharmarack</div>
                            <div className="p-2  ms-1">Unison</div>
                            <div className="p-2  ms-2">Other</div>
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
                                        <option >Product</option>
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
                        <Tables data={purchaseindent} datacolumn={purchaseindentColumns} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PurchaseIndent;