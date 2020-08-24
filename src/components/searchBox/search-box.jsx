import React from "react";

import Navbar from "react-bootstrap/Navbar";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const SearchBox = ({ searchInput }) => {
     return (
          <div>
               <Navbar fixed="top" style={{padding:"0"}} 
               className="navBar">
                    <Navbar.Brand>
                         <InputGroup size="lg" fixed="top"
                         style={{ width: "30%",margin: "175px auto 50px auto" }}
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

               {/* <InputGroup size="lg" fixed="top"
                style={{
                    width: "30%",
                    margin: "175px auto 50px auto"                   
                    }}
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
               </InputGroup> */}
               
          </div>
     )
}
export default SearchBox;