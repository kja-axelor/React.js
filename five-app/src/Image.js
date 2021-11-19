import React, { Component } from 'react'
import krjani from './images/krjani.jpg'

export default class Image extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>hello IMG</h1>
                {/* assets in public folder */}
                {/* <img src={process.env.PUBLIC_URL + "images/krjani.jpg"} alt="krjani's picture" width="300px" /> */}
                
                {/* assets in src folder */}
                <img src={krjani} alt="krjani's picture" width="300px" />
            </React.Fragment>
        )
    }
}
