import React from "react";
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import { Route, Routes } from "react-router-dom";
import ProductMaster from "../Masters/ProductMaster";




const Dashboard = () => {
    return (
        <div className="container-fluid p-0" style={{backgroundColor:"#f7fafc"}}>
            <Navbar/>
            
                <Routes>
                    <Route exact path='/' element={<Mainpage/>}></Route>
                    <Route exact path='/ProductMaster' element={<ProductMaster/>} />
                </Routes>
            
            
        </div>
    );
}

export default Dashboard;