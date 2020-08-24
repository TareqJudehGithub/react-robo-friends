import React from 'react';
import "../containers/App.css";

export const Loading = () => {
     return (
          <div style={{
               textAlign:"center",
               marginTop: "225px",
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