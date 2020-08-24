import React from 'react';

export const Loading = () => {
     return (
          <div className="loading">
              <h1 
              style={{ animation: "loading 2.5s linear infinite alternate"}}
              > 
               Loading..please wait..
               </h1>
          </div>
     )
}
export default Loading;