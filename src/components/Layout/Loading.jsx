import React from 'react';

export const Loading = () => {
     return (
          <div style={{
               textAlign:"center",
               marginTop: "150px",
               }}>
              <h1 
              style={{ animation: "loading 2.5s linear infinite alternate"}}
              > 
               Loading..please wait..
               </h1>
          </div>
     )
}
export default Loading;