import React  from "react";
import { Component } from "react";
import PT from "prop-types";


// Function based component

// const Employee = (props)=>{
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.sirname}</h1>
//             <h1>{props.marks}</h1>
//         </div>
//     )
// }

// class based component

class Employee extends Component{
    render(){
        return(
            <div>
                <h1>Description: {this.props.children}</h1>
                <h1>Name: {this.props.name}</h1>
                <h1>Sirname: {this.props.sirname}</h1>
                <h1>Salary: {this.props.salary}</h1>
            </div>
        );
    }
}

/* Props Property
    propTypes -- for datatypes
    isRequired -- for mandatory fields
    defaultProps -- for giving default props value special property you can not change its name
*/

// Special Property :: propTypes so you cant change its name you have to write as it is But you can change PropTypes name ex. PT

//props.children :: used for accessing the child content or properties

Employee.propTypes = {
    name: PT.string,
    sirname: PT.string.isRequired,
    salary: PT.number
};
Employee.defaultProps = {
    name:"Apple",
    sirname:'Hirpara',
    salary:100
};
export default Employee;