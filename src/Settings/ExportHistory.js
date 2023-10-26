import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Table from 'react-bootstrap/Table';
import Paginationshow from '../Dashboard/Paginationshow';

const ExportHistory = () => {
    const { exporthistorycolumn, exporthistoryTData } = Appdata;
    // console.log(exporthistoryTData)
    return (
        <div>
            <div className="vh-100 w-auto">
                <div className="row" style={{ marginRight: "165px", marginLeft: "165px" }}>
                    <div className="col my-4 p-0 d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <Link to="/" className="me-3"><img src="./home_breadcrumb.svg" alt="home_breadcrumb-icon" /></Link>
                            <span style={{ color: 'rgb(85 86 166)' }}>Export History</span>
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
                                        <option >Import Label</option>
                                        <option >Module</option>
                                    </Form.Select>
                                </InputGroup>
                            </div>
                            <div className="col-4 text-end">
                                <ButtonGroup>
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
                                            exporthistorycolumn.map((d, i) => {
                                                return (
                                                    <td className={`${d.tdClass}`}>{d?.label}</td>
                                                );
                                            })
                                        }
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style={{ borderStyle: 'none' }}>
                                    {
                                        exporthistoryTData?.length ?
                                            exporthistoryTData.map((data, i) => {
                                                // return (<tr key={"sdfgds" + i}>
                                                //     {
                                                //         exporthistory.map((d, icol) => {
                                                //             return (
                                                //                 <td key={"sdfds" + icol} className={`${d.valueTdClass}`}>{data?.[d?.fieldKey] ?? ""}</td>
                                                //             );
                                                //         })
                                                //     }
                                                // </tr>)
                                                return (
                                                    <tr>
                                                        {
                                                            exporthistorycolumn.map((d, i) => {

                                                                return (
                                                                    <td className={`${d.valueTdClass}`}>{data[d.fieldKey] === "None" ?
                                                                        <span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                                                                            <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                                                                            <span>{data?.[d?.fieldKey] ?? ""}</span>
                                                                        </span> : data?.[d?.fieldKey] ?? ""
                                                                    }</td>
                                                                );
                                                            })
                                                        }
                                                        <td>
                                                            <div className='d-flex justify-content-end me-2'>
                                                                <button className='p-0 border-0 rounded-1'><img src='report_download_icon.svg' alt='download_icon' /></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }) :
                                            <tr>
                                                <td colSpan='7'>
                                                    <div className='d-flex align-items-center justify-content-center' style={{ minHeight: 'calc(100vh - 480px)' }}>
                                                        <div className='row'>
                                                            <div className=' d-flex justify-content-center'><img src='nodata-table.svg' alt='nodata_icon' /></div>
                                                            <div className='d-flex justify-content-center'><strong className='mt-3 fs-6'>No Data</strong></div>
                                                            <div className=' d-flex justify-content-center'><p className='text-center text-secondary'>You do not have any data. Please try<br /> again or create add a new.</p></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
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

export default ExportHistory;