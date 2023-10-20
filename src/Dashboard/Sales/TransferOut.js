import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../../Appdata";
import Table from 'react-bootstrap/Table';
import Paginationshow from '../Paginationshow';

const TransferOut = () => {
    const { transferout } = Appdata;
    return (
        <div>
            <div className="vh-100 w-auto" >
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }} >
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span style={{ color: 'rgb(85 86 166)' }}>Transfer Out</span>
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
                                        <option >STN No</option>
                                        <option >Store</option>
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
                        <div className="mt-2">

                            <Table responsive>
                                <thead style={{ background: '#ebeef0' }}>
                                    <tr>
                                        {
                                            Object.keys(transferout[0]).map((d, i) => {
                                                return (
                                                    <td className="text-capitalize">{d === 'total_products' || d === 'total_qty' || d === 'MRP_total' ? <div className='text-end'>{d.replace(/_/g, ' ')}</div> : d.replace(/_/g, ' ')}</td>
                                                );
                                            })
                                        }
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderStyle: 'none' }}>
                                    {
                                        transferout.map((data, i) => {
                                            return (
                                                <tr>
                                                    {
                                                        Object.keys(transferout[0]).map((d, i) => {

                                                            return (
                                                                <td>{d === "total_products" || d === "total_qty" || d === 'MRP_total' ? <div className='text-end'>{data[d]}</div>
                                                                    : d === "store_name" ? <span style={{ color: 'rgb(85 86 166)' }}>{data[d]}</span>
                                                                        : data[d] === "Generated" ?
                                                                            <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                                                                                <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                                                                                <span>Generated</span>
                                                                            </span> : data[d]
                                                                }</td>
                                                            );
                                                        })}
                                                    <td>
                                                        <div className='d-flex justify-content-end me-2'>
                                                            <button className='p-0 border-0 rounded-1'><img src='Retry.svg' alt='editbutton' /></button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='d-flex justify-content-end me-2'>
                                                            <button className='btn btn-outline-secondary py-0 px-2'> Print</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <Paginationshow />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default TransferOut;