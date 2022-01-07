import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    password: "",
    city: "",
    server: "Choose a webserver",
    role: "",
    activity: "",
    errorMessage: "",
    isSubmit: false,
    isValid: false
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  resetHandler = () => {
    this.setState({ name: "", password: "", city: "", errorMessage: ""});
    this.isValid = false;
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.isSubmit = true;
    const err = this.validate(this.state);
    this.setState({ errorMessage: err });
    if (Object.keys(err).length === 0 && this.isSubmit) {
      this.isValid = true;
    }
  };

  validate = (values) => {
    let regName = /^([^0-9/W\s]*)$/;
    let regPass = /[0-9][A-Z]/;
    const errors = {};
    if (!values.name) {
      errors.name = "username is required";
    } else if (!regName.test(values.name)) {
      errors.name = "provide proper name: noNumber & noSpaces";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 8) {
      errors.password = "password must be 8 characters";
    } else if (!regPass.test(values.password)) {
      errors.password = "password must have numbers and caps(A-Z) & nospaces";
    }
    if (!values.city) {
      errors.city = "city is required";
    } else if (!regName.test(values.city)) {
      errors.city = "provide proper city: noNumber & noSpaces";
    }
    this.setState({ err: errors });
    return errors;
  };
  render() {
    return (
      <div className="content">
        {this.isValid? <h3>Form is validated</h3> :""}
        <h1>Myform</h1>
        <form action="" onSubmit={this.submitHandler}>
          <div className="row">
            <label className="label">Username:</label>
            <input type="text" value={this.state.name} className="input" name="name" onChange={this.inputHandler} />
            <small className="error">{this.state.errorMessage.name}</small>
          </div>

          <div className="row">
            <label className="label">Password:</label>
            <input type="text" value={this.state.password} className="input" name="password" onChange={this.inputHandler} />
            <small className="error">{this.state.errorMessage.password}</small>
          </div>

          <div className="row">
            <label className="label">City of Employment:</label>
            <input type="text" value={this.state.city} className="input" name="city" onChange={this.inputHandler} />
            <small className="error">{this.state.errorMessage.city}</small>
          </div>

          <div className="row">
            <label>Webserver:</label>
            <select name="server" value={this.state.server} onChange={this.inputHandler}>
              <option value="webserver">Choose a webserver</option>
              <option value="apache">Apache</option>
              <option value="tomcat">Tomcat</option>
            </select>
          </div>

          <div className="row">
            <label htmlFor="role" className="label" onChange={this.inputHandler}>
              Please specify your role:
            </label>
            <div>
              <input type="radio" name="role" id="admin" value="Admin" />
              <label htmlFor="admin">Admin</label>
              <br />
              <input type="radio" name="role" id="engineer" value="Engineer" />
              <label htmlFor="engineer">Engineer</label>
              <br />
              <input type="radio" name="role" id="manager" value="Manager" />
              <label htmlFor="manager">Manager</label>
              <br />
              <input type="radio" name="role" id="guest" value="Guest" />
              <label htmlFor="guest">Guest</label>
              <br />
            </div>
          </div>

          <div className="row">
            <label htmlFor="activity" onChange={this.activityHandler} className="label">
              Single Sign-on to the following activity
            </label>
            <div>
              <input type="checkbox" name="mail" id="mail" />
              <label htmlFor="mail">Mail</label>
              <br />
              <input type="checkbox" name="payroll" id="payroll" />
              <label htmlFor="payroll">Payroll</label>
              <br />
              <input type="checkbox" name="service" id="service" />
              <label htmlFor="service">Self-service</label>
              <br />
            </div>
          </div>

          <div className="row">
            <button type="submit">Login</button>
            <button type="reset" onClick={this.resetHandler}>Reset</button>
          </div>

        </form>
      </div>
    );
  }
}
