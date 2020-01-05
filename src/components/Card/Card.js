import React from "react";
import "./Card.style.css";

 export const Card = ({ id, name }) => {
     return (
          <div className="card-container">
          
               <img src={`https://www.robohash.org/${id}`} width="250px" height="250px" alt="monsters" style={{margin: "0 auto"}}/>
               <div>
                    <p>{name}</p>
                    
               </div>
               
          
          </div>
     )
}

