import React, { Component } from 'react'
import  "./form.css";
export default class App extends Component {
  state = { 
    name:"",
    password:"",
    city:"",
    server:"Choose a webserver",
    role:"",
    activity:"",
    errorMessage:""
  }
    nameHandler = (event)=>{
      this.setState({"name":event.target.value})
    }
    passHandler = (event)=>{
      this.setState({"password":event.target.value})
    }
    cityHandler = (event)=>{
      this.setState({"city":event.target.value})
    }
    serverHandler = (event)=>{
      this.setState({"server":event.target.value});
    }
    roleHandler = (event) =>{
      this.setState({"role":event.target.value})
    }
    resetHandler = () =>{
      this.setState({"name":"","password":"","city":"","errorMessage":""})
    }
    submitHandler = (event) =>{
      event.preventDefault();
      const err = this.validate(this.state);
      this.setState({"errorMessage":err})
    }

    validate = (values)=>{
      let regName = /^([^0-9/W\s]*)$/;
      let regPass = /[0-9][A-Z]/;
      const errors = {};
      if(!values.name){
        errors.name = "username is required";
      }
      else if(!regName.test(values.name)){
        errors.name = "provide proper name: noNumber & noSpaces"
      }
      if(!values.password){
        errors.password = "password is required!";
      } 
      else if(values.password.length < 8){
        errors.password = "password must be 8 characters"
      }
      else if(!regPass.test(values.password)){
        errors.password = "password must have numbers and caps(A-Z) & nospaces"
      }
      if(!values.city){
        errors.city = "city is required";
      }else if(!regName.test(values.city)){
        errors.city = "provide proper city: noNumber & noSpaces"
      }
      this.setState({"err":errors})
      return errors;
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <h1>Myform</h1>

          <div className="inputfield">
            <label>
            <br />
            Username:  <input type="text" value={this.state.name} name="username" onChange={this.nameHandler}/>  <small className="error">{this.state.errorMessage.name}</small>
          </label><br /><br />
          </div>

          <div className="inputfield">
            <label>
            Password:  <input type="text" value={this.state.password} name="password" onChange={this.passHandler}/>   <small className="error">{this.state.errorMessage.password}</small>
          </label><br /><br />
          </div>

          <div>
             <label>
            City of Employment:  <input type="text" value={this.state.city} name="city" onChange={this.cityHandler}/>  <small className="error">{this.state.errorMessage.city}</small>
          </label><br /><br />
          </div>

          <label>
            Webserver:  <select name="server" value={this.state.server} onChange={this.serverHandler}>
              <option value="webserver">Choose a webserver</option>
              <option value="apache">Apache</option>
              <option value="tomcat">Tomcat</option>
            </select>
          </label> <br /><br />

          <label htmlFor="role" onChange={this.roleHandler}>Please specify your role:
            <div>
            <input type="radio" name="role" id="admin" value="Admin"/>
            <label htmlFor="admin">Admin</label><br></br>
            <input type="radio" name="role" id="engineer" value="Engineer"/>
            <label htmlFor="engineer">Engineer</label><br></br>

            <input type="radio" name="role" id="manager" value="Manager"/>
            <label htmlFor="manager">Manager</label><br></br>

            <input type="radio" name="role" id="guest" value="Guest"/>
            <label htmlFor="guest">Guest</label><br></br>
            
            </div>
          </label> <br /><br />

          <label htmlFor="activity" onChange={this.activityHandler}>Single Sign-on to the following activity
          <div>
            <input type="checkbox" name="mail" id="mail" />
            <label htmlFor="mail">Mail</label><br />
            <input type="checkbox" name="payroll" id="payroll" />
            <label htmlFor="payroll">Payroll</label><br />
            <input type="checkbox" name="service" id="service" />
            <label htmlFor="service">Self-service</label><br />
          </div>
          </label>

          <button type="submit">Login</button> <button type="reset" onClick={this.resetHandler}>Reset</button>
        </form>
      </div>
    )
  }
}