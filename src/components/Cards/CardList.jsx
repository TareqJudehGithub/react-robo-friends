import React from "react";
import Card from "./Card"
import "./CardList.style.css"

const CardList = ({ robots }) => {
     
     return (
          <div className="card-list">
          {           
               robots.map(monster =>{
                    return (            
                         <Card 
                         key={monster.id}
                         id={monster.id}
                         name={monster.name}                      
                         />
                    )
               })
          }        
          </div>    
     )     
};
export default  CardList;