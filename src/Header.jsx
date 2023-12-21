import React from "react";
import logo from "./Images/logo.jpeg"

const Header = ()=>{
    return(
    <>
         <div className="header">
            <img src={logo} alt="logo" style={{borderRadius: "50%", width: "50px",height: "50px"}}/>
            <h1>gOGLe kip</h1>
         </div>
    </>
    );
}

export default Header;