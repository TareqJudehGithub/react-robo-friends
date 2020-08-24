import React from "react";
import "./Card.style.css";

const Card = ({ id, name, email }) => {
     return (
          <div className="card-container">
          
               <img src={`https://robohash.org/${id}`} 
                    width="250px" height="250px" alt="monsters" 
                    style={{margin: "0 auto"}}/>
               <div className="card-name">
                    <p>{name}</p>
                    <p style={{fontSize:"12.5px"}}>{email}</p>
                    
               </div>
               
          
          </div>
     )
}
export default Card;
