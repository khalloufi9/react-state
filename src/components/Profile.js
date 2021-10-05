import React, { Component } from 'react'
import Imag from'../Profile.jpg'

export default class Profile extends Component {
    render() {
        return (
            <div style={{border:'solid',width:'500px',marginLeft:'400px',marginTop:'50px'}}>
            <h1>khaloufi oumaima</h1>
            <h2>License en Informatique de gestion</h2>
            <img src={Imag} alt="image" style={{width:'300px'}}/>
            <br/>
            </div>
        )
    }
}
