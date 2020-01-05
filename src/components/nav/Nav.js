import React from "react";
import logo from "./logo.svg";

export const Nav = () => {
     return(
          <nav>
               <ul style={{
                    listStyle: "none",
                    display:"",
                    float:"right",
                    margin: "0 0 10px 0",
                    textAlign: "right",
                    right: "0px",
                    top: "0px"
                    
                    }}>
                    <li>
                         <div className="react-logo">
                         <img src={logo} className="App-logo" alt="logo"/>
                         </div> 

                    </li>
               </ul>
          </nav>
     )
}