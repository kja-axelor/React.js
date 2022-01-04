import React, { Component } from "react";

export default class Uncform extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: ""
      };
    // creating ref
    this.textInput = React.createRef();
  }
  componentDidMount() {
    console.log(this.textInput.current);
    this.textInput.current.focus();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.textInput.current.value);
    this.setState({value:this.textInput.current.value})
  } 
  render() {
    return (
      <div>
        {/* <form action="">
          Name: <input type="text" />
          <br />
          <br />
          Password: <input type="text"  />
          <br />
          <br />
          Address: <input type="text"  ref={this.textInput} />
        </form> */}
        <h2>You typed {this.state.value}</h2>
        <form action="" onSubmit={this.handleSubmit}>
            Input <input type="text" ref={this.textInput} className="form-control"/><br />
            <input type="submit" value="Submit" className="btn btn-info" />
        </form>
      </div>
    );
  }
}
