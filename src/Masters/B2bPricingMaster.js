import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Table from 'react-bootstrap/Table';
import Paginationshow from '../Dashboard/Paginationshow';

const B2bPricingMaster = () => {
    const { b2bpricingmaster } = Appdata;
    return (
        <div>
            <div className="vh-100 w-auto" >
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }} >
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span className="text-secondary">B2B Pricing Master (Template Master)</span>
                        </div>
                        <div>
                            <button className="btn btn-primary px-3">+ Add</button>
                        </div>
                    </div>
                    <div className="row shadow-sm  gx-0 rounded-1" style={{ background: "#fff" }}>
                        <div className="col d-flex  align-items-center py-1 ps-4 border-bottom">
                            <div className="p-2 me-3">Template Master</div>
                            <div className="p-2 me-3">Template Store Mapping</div>
                            <div className="p-2">Unmapped Store</div>
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
                                        <option >Template Name</option>
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
                                    <tr className="">
                                        <th style={{ width: '40px' }}>
                                            <div className='d-flex justify-content-end mb-1'>
                                                <input className="form-check-input " type="checkbox" value=""></input>
                                            </div>
                                        </th>

                                        {
                                            Object.keys(b2bpricingmaster[0]).map((d, i) => {
                                                return (
                                                    <td className="text-capitalize">{d.replace(/_/g, ' ')}</td>
                                                );
                                            })
                                        }

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderStyle: 'none' }}>
                                    {
                                        b2bpricingmaster.map((data, i) => {
                                            return (
                                                <tr>
                                                    <td style={{ width: '40px' }}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input className="form-check-input " type="checkbox" value=""></input>
                                                        </div>
                                                    </td>

                                                    {
                                                        Object.keys(b2bpricingmaster[0]).map((d, i) => {

                                                            return (
                                                                <td>{d === 'status' ?
                                                                    <Form>
                                                                        <Form.Check
                                                                            type="switch"
                                                                        />
                                                                    </Form> : d === 'template_name' ?
                                                                        data[d] :
                                                                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(235, 238, 240)', width: 'fit-content' }}>
                                                                            <span>{data[d]}</span>
                                                                        </span>
                                                                }</td>

                                                            );
                                                        })}

                                                    <td>
                                                        <div className='d-flex justify-content-end me-2'>
                                                            <button className='p-0 border-0 rounded-1 me-2'><img src='Edit-button.svg' alt='editbutton' /></button>
                                                            <button className='p-0 border-0 rounded-1'><img src='delete_icon.svg' alt='delete_icon' /></button>
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

export default B2bPricingMaster;