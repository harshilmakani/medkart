import React from "react";
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import { Route, Routes } from "react-router-dom";
import ProductMaster from "./Masters/ProductMaster";
import LocationMaster from "./Masters/LocationMaster";
import MinMaxMaster from "./Masters/MinMaxMaster";
import MoleculeMaster from "./Masters/MoleculeMaster";
import ManufactureMaster from "./Masters/ManufactureMaster";
import VendorMaster from "./Masters/VendorMaster";
import ProductChannelMapping from "./Masters/ProductChannelMapping";
import B2cPricingMaster from "./Masters/B2cPricingMaster";
import StoreMaster from "./Masters/StoreMaster";
import WarehouseMaster from "./Masters/WarehouseMaster";
import MrpPtrMapping from "./Masters/MrpPtrMapping";
import Stockadjustment from "./Inventory/Stockadjustment";
import StockRearrange from "./Inventory/StockRearrange";
import Reallocation from "./Inventory/Reallocation";
import TransferOut from "./Sales/TransferOut";
import InternalSales from "./Sales/InternalSales";
import B2cSales from "./Sales/B2cSales";


const Dashboard = () => {
    return (
        <div className="container-fluid p-0" style={{backgroundColor:"#f7fafc"}}>
            <Navbar/>
            
                <Routes>
                    <Route exact path='/' element={<Mainpage/>}></Route>
                    <Route exact path='/ProductMaster' element={<ProductMaster/>}/>
                    <Route exact path='/locationmaster' element={<LocationMaster/>}/>
                    <Route exact path='/minmaxmaster' element={<MinMaxMaster/>}/>
                    <Route exact path='/moleculemaster' element={<MoleculeMaster/>}/>
                    <Route exact path='/manufacturemaster' element={<ManufactureMaster/>}/>
                    <Route exact path='/vendormaster' element={<VendorMaster/>}/>
                    <Route exact path='/productchannelmapping' element={<ProductChannelMapping/>}/>
                    <Route exact path='/b2cPricingMaster' element={<B2cPricingMaster/>}/>
                    <Route exact path='/storemaster' element={<StoreMaster/>}/>
                    <Route exact path='/warehousemaster' element={<WarehouseMaster/>}/>
                    <Route exact path='/mrp_ptr_mapping' element={<MrpPtrMapping/>}/>
                    <Route exact path='/stockadjustment' element={<Stockadjustment/>}/>
                    <Route exact path='/stockrearrange' element={<StockRearrange/>}/>
                    <Route exact path='/reallocation' element={<Reallocation/>}/>
                    <Route exact path='/transferout' element={<TransferOut/>}/>
                    <Route exact path='/internalsales' element={<InternalSales/>}/>
                    <Route exact path='/b2csales' element={<B2cSales/>}/>
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}
                    {/* <Route exact path='/reallocation' element={<Reallocation/>}/> */}

                </Routes>                       
        </div>
    );
}

export default Dashboard;