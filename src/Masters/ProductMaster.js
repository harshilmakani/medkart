import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const ProductMaster =()=>{
    return(
        <div>
            <div className="vh-100 w-auto" >
            <div className="mt-4" style={{ marginRight: "165px", marginLeft: "165px" }} >
                <div className="col my-4">
                    <span className="text-secondary"> ProductMaster</span>
                </div>
                <div className="shadow-sm" style={{ background: "#fff" }}>
                    <div className="col-12 d-flex justify-content-between align-items-center py-2  border-bottom">
                        <div className="col-2 p-2 ms-2">Short-Cuts</div>
                        <div className="col-1 p-2 text-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                <img src="./setting_dashboard.svg" alt='setting_icon' />
                                </Dropdown.Toggle>                                                                
                                <Dropdown.Menu >
                                    <Dropdown.Item href="#/action-1">Add New Shortcut</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Customize</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>                            
                        </div>
                    </div>
                    <div className="col-12 py-4 px-2 ms-3">
                        <div className="col-3 d-flex align-items-center shadow-sm border rounded pt-2 pb-3 px-3">
                            <img src="batch_master.svg" />
                            <span className=" ms-2">Batch Master</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductMaster;