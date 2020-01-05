import React from "react";
import { Card } from "../Card/Card"
import "./CardList.style.css"

export const CardList = ({ monstersList }) => {
     
     return (
          <div className="card-list">
          {           
               monstersList.map((monster, index)=>{
                    return (
                         <Card 
                         key={monster.id}
                         id={monstersList[index].id}
                         name={monstersList[index].name}                        
                         />
                    )
               })
          }        
          </div>    
     )     
};
