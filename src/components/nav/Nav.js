import React from "react";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";

export const Nav = () => {
     return(
          <>
          <Navbar  fixed="top">
          <Navbar.Brand
          style={{ 
               fontSize: "calc(30px + 3vmin)",
               margin:"0 auto 50px auto",
               animation: "loading 3s linear infinite alternate",
               background: "linear-gradient(to left,rgba(21, 233, 180, 1),rgba(241, 245, 247, 0.3))",
               boxShadow: "2px 2px 10px rgb(21, 233, 180)",
               width:"100%"
          
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