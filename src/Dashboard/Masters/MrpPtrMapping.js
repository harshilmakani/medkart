import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../../Appdata";
import Table from 'react-bootstrap/Table';
import Paginationshow from '../Paginationshow';

const MrpPtrMapping = () => {
    const { MrpPtrData } = Appdata;
    return (
        <div>
            <div className="vh-100 w-auto" >
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }} >
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span className="text-secondary">MRP PTR Ratio</span>
                        </div>
                        <div>
                            <button className='btn btn-outline-primary me-3'>Import</button>
                            <button className='btn btn-outline-primary me-3'>Download</button>
                            <button className="btn btn-primary px-3">+ Add</button>
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
                                            Object.keys(MrpPtrData[0]).map((d, i) => {
                                        
                                                return (
                                                    <td className="text-capitalize">{d=== 'MRP' || d === 'mRP_PTR_ratio'? <div className='text-end'>{d.replace(/_/g, ' ')}</div>: d.replace(/_/g, ' ')}</td>
                                                );
                                            })
                                        }
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderStyle: 'none' }}>
                                    {
                                        MrpPtrData.map((data, i) => {
                                            return (
                                                <tr>
                                                    {
                                                        Object.keys(MrpPtrData[0]).map((d, i) => {

                                                            return (
                                                                <td>{d === 'MRP' || d === 'mRP_PTR_ratio'? <div className='text-end'>{data[d]}</div>: data[d]}</td>
                                                            );
                                                        })}
                                                        <td>
                                                            <div className='d-flex justify-content-end me-2'>
                                                                <button className='p-0 border-0 rounded-1'><img src='Edit-button.svg' alt='editbutton'/></button>
                                                            </div>
                                                        </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <Paginationshow/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MrpPtrMapping;