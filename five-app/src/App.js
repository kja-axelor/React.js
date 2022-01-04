import React, { Component } from 'react'

export default class App extends Component {
  state = {
    change:false
  }
  btnclk = ()=>{
    this.setState({change:true})
  }
  render() {
    // we can declare all css property in once or seperately also define.
    const btnStyle = {
      color:"blue",
      backgroundColor:"orange"
    }
    const textColor = {
      color:"blue"
    }
    const backColor = {
      backgroundColor:"orange"
    }
    if(this.state.change){
      backColor.backgroundColor = "White"
    }
    return(
    <div>
         <h1>hello</h1>
          <button type="button" onClick={this.btnclk} style={{...backColor,...textColor,...{border:"5px dotted black",padding:"10px"}}}>Click me</button>
    </div>
    )
  }
}

