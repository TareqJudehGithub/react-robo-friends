import React from "react";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

export const Nav = () => {
     return(
          <>
          <Navbar fixed="top" style={{padding:"0"}} 
          className="navBar">
          <Navbar.Brand
          style={{ 
               fontSize: "calc(30px + 3vmin)",          
               animation: "loading 2.5s linear infinite alternate",
               background: "linear-gradient(to left,rgb(21, 233, 180),rgb(10, 170, 245))",
               boxShadow: "2px 2px 10px rgb(21, 233, 180)",
               width:"100%",
               borderRadius: "10px",
               margin: "auto 0px auto 0"        
               }}
          >
               <img
               alt=""
               src={logo}            
               className=" App-logo"
               />{' '}
               Robo Monsters
          </Navbar.Brand>
          </Navbar>
</>
     )
}