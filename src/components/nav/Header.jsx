import React from "react";

import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Header = ({ searchInput }) => {
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
                    alt="React-logo"
                    src={logo}            
                    className=" App-logo"
                    />
                    <span>Robo friends</span>
                    <InputGroup size="lg" fixed="top"
                         style={{ width: "30%",margin: "25px auto" }}
                         >
                         <FormControl 
                              aria-label="Large" 
                              aria-describedby="inputGroup-sizing-lg"
                              width="50px" 
                              type="search"
                              placeholder="Search.."
                              onChange={searchInput}
                              style={{
                                   boxShadow: "1px 1px 5px rgb(21, 233, 180)",
                                   color: "rgb(92, 105, 109)",
                                   fontWeight: "100"                   
                              }}                 
                         />
                    </InputGroup>
               </Navbar.Brand>
          </Navbar>
</>
     )
}
export default  Header;