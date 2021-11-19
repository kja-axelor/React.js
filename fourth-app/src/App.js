import React, { Component } from 'react'

export default class App extends Component {
  state={
    users:[
      {id:101,name:"krjani",password:"krjani1214"},
      {id:102,name:"banana",password:"krjani124"},
      {id:103,name:"apple",password:"krjani214"},
    ],
    isLoggedIn:false
  }
  render() {

    const stateArr = this.state.users;

    // const arr = [10,20,30,40];
    const arr = this.props.myarr;
    const newArr = arr.map((num)=>{
      console.log(num);
      return <li name="kj">{num * 2}</li>
    })
    console.log("old array",arr);
    console.log("new array",newArr);
    // map will create new array. inside it returns all the object
    // all object is react.element means they have props,type and children
    return (
      // <ul>
      //   <li>{arr[0]}</li>
      //   <li>{arr[1]}</li>
      //   <li>{arr[2]}</li>
      //   <li>{arr[3]}</li>
      // </ul>
      // <ul>
      //   {arr.map(num =><li>{num}</li>)}
      // </ul>
      <div>
        {
        /* <h1>ID: {this.state.users[0].id} Name: {this.state.users[0].name} password: {this.state.users[0].password} </h1>
        <h1>ID: {this.state.users[1].id} Name: {this.state.users[1].name} password: {this.state.users[1].password} </h1>
        <h1>ID: {this.state.users[2].id} Name: {this.state.users[2].name} password: {this.state.users[2].password} </h1> */
        }

        {
          stateArr.map((obj)=>{
            return(
              <h1 key={obj.id}>ID: {obj.id} Name: {obj.name} password: {obj.password}</h1>
            )
          })
        }
      </div>
    )
  }
}
