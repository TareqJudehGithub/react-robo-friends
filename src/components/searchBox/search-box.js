import React from "react";
import "./search-box.style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export const SearchBox = ({ searchInput }) => {
     return (
          <div>
               <InputGroup size="lg"
                style={{
                    width: "30%",
                    margin: "175px auto 50px auto"                   
                    }}
               >
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-lg"
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
               
          </div>
     )
}