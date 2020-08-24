import React, {Component} from "react";

class ErrorBoundry extends Component {
     constructor() {
          super()
          this.state = {
               hasError: false
          }
     }

     componentDidCatch(error, info){  // like try/catch
          this.setState({ hasError: true});
     }
     render(){
          const { hasError } = this.state;
          if (hasError) {
               return <h1>Error!</h1>
          }
          return(
               <div>
                    {this.props.children}
               </div>
          )
     }
}
export default ErrorBoundry;