import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar p-0" style={{ backgroundColor: "#5556a6" }}>
                <div className="container-fluid " style={{ marginRight: "150px", marginLeft: "150px" }}>
                    <div className=" col navbar-content d-flex  align-items-center">
                        <a className="navbar-brand p-0 mt-1 g-0">
                            <img src="./new_wms_logo.svg" alt="medkart-logo" />
                        </a>
                        <form className="d-flex" style={{ width: "35%" }}>
                            <InputGroup size="sm" className="my-2 me-3">
                                <InputGroup.Text id="inputGroup-sizing-sm" className="bg-white"><img src="Search-icon.svg" alt="search-icon" /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search here..."
                                />
                            </InputGroup>
                            <div className="mt-2">
                                <Button variant="light" size="sm">Create</Button>

                            </div>
                        </form>
                        <div className="d-flex ms-auto">
                            <ul className="navbar-nav list-group list-group-horizontal ">
                                <li className="nav-item dropdown  me-3">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-none" size="sm" id="dropdown-basics" className="text-white py-0">
                                            HO
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">HO</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                <li className="nav-item  me-1">
                                    <img src="./notification-bell.svg" alt="notification-icon" />
                                </li>
                                <li className="nav-item ms-3">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="rounded-circle px-1 py-0">
                                            HP
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <div className="mx-5 mb-4">
                                                <div className=" col d-flex justify-content-center align-content-center ">
                                                    <div className="col-6 rounded-circle d-flex justify-content-center align-content-center m-4  py-2" style={{ backgroundColor: "#5556a6" }}>
                                                        <h3 className="pt-1 text-white">HP</h3>
                                                    </div>
                                                </div>
                                                <div className=" col d-flex justify-content-center align-content-center">
                                                    <div>
                                                        <h6 className="text-center">Mr.Harshil P</h6>
                                                        <span className="text-center text-secondary">harshil@medkart.in</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar shadow-sm" style={{ background: "#fff" }}>
                <div className="container-fluid " style={{ marginRight: "150px", marginLeft: "150px" }}>
                    <div className=" col d-flex  align-items-center">
                        <ul className="nav">
                            <li className="nav-item me-1">
                                
                                    <Link to="/" className="nav-link ps-1">
                                        <img src="./Dashboard.svg" alt="dashboard_icon" className="me-2" />
                                        <span className="text-dark">Dashboard</span>
                                    </Link>

                                
                            </li>
                            <li className="nav-item me-1">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="Masters.svg" alt="masters_icon" className="me-2" />
                                        <span className="text-dark">Masters</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/ProductMaster" className="no-underline">Product Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/locationmaster" className="no-underline">Location Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/minmaxmaster" className="no-underline">Min Max Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/moleculemaster" className="no-underline">Molecule Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/manufacturemaster" className="no-underline">Manufacture Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/b2bpricingmaster" className="no-underline">B2B Pricing Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/b2cPricingMaster" className="no-underline">B2C Pricing Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/vendormaster" className="no-underline">Vendor Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/batch-master" className="no-underline">Batch Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/storemaster" className="no-underline">Store Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/warehousemaster" className="no-underline">Warehouse Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/productchannelmapping" className="no-underline">Product Channel Mapping</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/mrp_ptr_mapping" className="no-underline">MRP/PTR Mapping</Link></Dropdown.Item>
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item me-1">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="inventory.svg" alt="inventory_icon" className="me-2" />
                                        <span className="text-dark">Inventory</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/stockadjustment" className="no-underline">Stock Adjustment</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/reallocation" className="no-underline">Reallocation</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/stockrearrange" className="no-underline">Stock Rearrange</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item me-1">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="./oms_icon.svg" alt="oms_icon" className="me-2" />
                                        <span className="text-dark">OMS</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Sales Order</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Indent</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item me-1">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="./Sales.svg" alt="sales_icon" className="me-2" />
                                        <span className="text-dark">Sales</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/pending-sales-order" className="no-underline">Pending Sales Order</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/pick-note" className="no-underline">Pick Note</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/transferout" className="no-underline">Transfer Out</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/internalsales" className="no-underline">Internal Sales</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/b2csales" className="no-underline">B2C Sales</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/purchase-return" className="no-underline">Purchase Return</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item me-1">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="Purchase.svg" alt="purchase_icon" className="me-2" />
                                        <span className="text-dark">Purchase</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/purchase-indent" className="no-underline">Purchase Indent</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/purchase-order" className="no-underline">Purchase Order</Link></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Gate Pass</Dropdown.Item>
                                        <Dropdown.Item ><Link to="/checkingtracker" className="no-underline">Checking Tracker</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/grn" className="no-underline">GRN</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/purchaseinvoice" className="no-underline">Purchase Invoice</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/returninward" className="no-underline">Return (Inward)</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/creditnotes" className="no-underline">Credit Notes</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item me-1">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="banking_icon.svg" alt="banking_icon" className="me-2" />
                                        <span className="text-dark">Banking</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/bankmaster" className="no-underline">Bank Master</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/receiptdata" className="no-underline">Receipts</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/payments" className="no-underline">Payments</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item me-1">
                                <a className="nav-link">
                                    <img src="./Reports.svg" alt="dashboard_icon" className="me-2" />
                                    <span className="text-dark">Reports</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <img src="Settings.svg" alt="setting_icon" className="me-2" />
                                        <span className="text-dark">Settings</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item ><Link to="/userAndroles" className="no-underline">User & Roles</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/importhistory" className="no-underline">Import History</Link></Dropdown.Item>
                                        <Dropdown.Item ><Link to="/exporthistory" className="no-underline">Export History</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;