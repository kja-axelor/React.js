import React, { Component } from 'react'
import Guest from "./Guest";
import User from "./User";

export default class Admin extends Component {
  state = {
    isLoggedIn: false
  }
  clickLogin = ()=>{
      this.setState({isLoggedIn:true})
  }
  clickLogout = ()=>{
      this.setState({isLoggedIn:false})
  }
  render() {
    // const isRegistered = this.props.status;
    
        const isLoggedIn = this.state.isLoggedIn;
    
// if logic 

//     if (isLoggedIn) {
//       return <User name="krjani" clickdata={this.clickLogout}/>;
//     }
//     return <Guest clickdata={this.clickLogin}/>;
//   }

// IIFE logic 
// we use IIFE to write any js code b/w jsx
    return(
        <div>
            { ( () => {
                    if(isLoggedIn){
                        return <User name="krjani" clickdata={this.clickLogout}/>;
                    }
                    else{
                        return <Guest clickdata={this.clickLogin}/>;
                    }
            } ) ()

            }
        </div>
    )
}
}