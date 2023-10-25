import React from "react";
import Pages from "./Dashboard/Pages";
import Appdata from "./Appdata";

const Test = () =>{
    const {testdata}= Appdata;
    return(
        <div>
            <Pages data={testdata}/>
        </div>
    );
}

export default Test;