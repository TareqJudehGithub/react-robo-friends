import React from 'react';


export const Scroll = ({children}) => {
     return (
          <div style={{
               overflowY: "hidden", scrollBehavior: "smooth", height: "auto"
          }}> 
              {children}
          </div>
     )
}
export default Scroll;