import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import Appdata from "../Appdata";
import Tables from '../Dashboard/Tables';

const UserAndRoles = () => {
    const { usermanagement } = Appdata;
    const usermanagementColumns = [
        {
            tdClass: 'ps-3',
            valueTdClass: 'ps-3',
            fieldKey: 'full_name',
            label: 'Full Name',
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
            fieldKey: 'email',
            label: 'Email',
        },
        {
            fieldKey: 'role',
            label: 'Role',
        },
        {
            fieldKey: 'warehouse',
            label: 'Warehouse',
        },
        {
            fieldKey: 'last_login',
            label: 'Last Login',
        },
        {
            fieldKey: 'status',
            label: 'Status',
            customfield: (row) => {
                return (row === 'Invited' ?
                    < span className="d-flex align-items-center justify-content-center rounded-pill px-2" style={{ backgroundColor: 'rgb(186, 240, 218)', width: 'fit-content' }}>
                        <span className="p-1 rounded-circle me-1 " style={{ backgroundColor: 'rgb(0, 127, 95)' }}></span>
                        <span>{row}</span>
                    </span > :
                    <Form>
                        <Form.Check
                            type="switch"
                        />
                    </Form>
                )
            }
        },
        {
            customfield: (row) => {
                return (
                    <div className='d-flex justify-content-end me-2'>
                        <button className='p-0 border-0 rounded-1 me-2' onClick={() => console.log("rowdata", row)}><img src='password_change.svg' alt='pass_chan_icon' /></button>
                        <button className='p-0 border-0 rounded-1 me-2' onClick={() => console.log("rowdata", row)} ><img src='Edit-button.svg' alt='edit_icon' /></button>
                        <button className='p-0 border-0 rounded-1' onClick={() => console.log("rowdata", row)} ><img src='delete_icon.svg' alt='delete_icon' /></button>
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
                            <span style={{ color: 'rgb(85 86 166)' }}>User & Roles</span>
                        </div>
                        <div>
                            <button className="btn text-white px-3" style={{ backgroundColor: 'rgb(85 86 166)' }}>+ Add</button>
                        </div>
                    </div>
                    <div className="row shadow-sm  gx-0 rounded-1" style={{ background: "#fff" }}>
                        <div className="col d-flex  align-items-center py-1 ps-4 border-bottom">
                            <div className="p-2 me-3">User Management</div>
                            <div className="p-2 text-end ms-1">Role Management</div>
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
                                        <option >Name</option>
                                        <option >Email</option>
                                        <option >Role</option>
                                        <option >Warehouse</option>
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
                        <Tables data={usermanagement} datacolumn={usermanagementColumns} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserAndRoles;