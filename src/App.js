import './App.css';
import Profile from  './components/Profile'
import React, { Component } from 'react'


export default class App extends Component {
 state={x:true,Date:new Date().toDateString(),name:"oumaima"
}

  show= () =>{this.setState({x: !this.state.x})}

  render() {

    return (

      <div className="App">    
     <button  onClick={this.show} style={{width:'200px',fontSize:'20px',marginTop:'50px'}}>Show</button>
     {this.state.x ? <Profile/>:null}
     

    <h1>{this.state.Date}</h1>;
      </div>
    )}
}
  

