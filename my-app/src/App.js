import React, {Component} from 'react';
import { Fragment } from 'react';
import Student from './Student';


const el = <h2>Hello Krjani</h2> 

// let m = <h1>Hello krjani from modules react hii</h1>

// class component is used when we have need of state or lifecycle hook
class App extends Component{
    render(){
        // return React.createElement("h1",null,"Hello React from Class Based Component")
        return (
        // <div>
        //     <h1>Hello React from Class Based Component again</h1>
        //     <h2>Hello again</h2>
        // </div>
        // );
        // <React.Fragment>
        //     <h1>Hello React from Class Based Component again</h1>
        //     <h2>Hello again</h2>
        // </React.Fragment>
        // );
        // <Fragment>
        //     <h1>Hello React from Class Based Component again</h1>
        //     <h2>Hello again again</h2>
        // </Fragment>
        // );
        <>
            <h1>Hello React from Class Based Component again</h1>
            <h1>Hello from react Fragment by {this.props.name}</h1>
            {/* composing components */}
            <Student name="krjani"/>
            <Student name="apple"/>
            <Student name="priyanka"/>
        </>
        );
    }
}
export default App;