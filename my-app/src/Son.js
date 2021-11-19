import React, { Component } from 'react'

export default class Son extends Component {
    constructor(props){
        super(props);
        this.state = {
            mSalary:this.props.salary
        }
    };

    // in this case we have to update child state according to btn-clk so  use get derivedstatefromProps
    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props",props,state);
        if(props.salary != state.mSalary){
            return {mSalary:props.salary}
        }
            return null;
    } 

    // return value will be stored in componentdidupdate's 3 argument
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('get snapshot before update');
        console.log(prevProps,prevState);

        // this 45 value is stored by componentdidupdate
        return 45;
    }
    componentDidUpdate(prevProps, prevState,snapshot){
        console.log("component did update it run after update");
        console.log(prevProps,prevState,snapshot);
    }
    render() {
        console.log('Son rendered');
        return (
            <div>
                <h1>Your salary is {this.state.mSalary}$</h1>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('should component update method');
        console.log(nextProps,nextState);
        if(this.state.mSalary > 10000){
            console.log("you are now crossing the limits");
            return false;
        }
            return true;
    }
}
