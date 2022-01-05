import React, { useState,useEffect } from 'react'

const Myform = () => {
    // initial values
    const initialValues = {username:"",password:""}

    // states
    // initial values
    const [formValues,setFormValues] = useState(initialValues);
    
    //form errors
    const [formError,setFormError] = useState({});

    // state for checking whether the form is submitted or not
    const[isSubmit,setIsSubmit] = useState(false);

    // handleChange
    const handleChange = (e) =>{
        // setFormvalues({[e.target.name]:e.target.value});
       const {name, value} = e.target;
       //...formValues means initial state and then add new state
       setFormValues({...formValues,[name]:value});
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        setFormValues(validate(formValues));
        setIsSubmit(true);

    }

    useEffect(() => {
        console.log(formError);
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formError])
    const validate = (values)=>{
        const err = {};
        const regName = /^([^0-9/W\s]*)$/;
        if(!values.username){
            err.username = "username is required";
        }
        if(!values.password){
            err.password = "password is required";
        }
        return err;
    }
    return(
        <div>
            <h1>MyForm</h1>
            <form action="" onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formValues.username} onChange={handleChange}
                />
                <p>{formError.username}</p>
                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={formValues.password} onChange={handleChange}/>
                <small>{formError.password}</small>
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Myform;