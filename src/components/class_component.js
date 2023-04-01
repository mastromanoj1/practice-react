import React, { Component } from 'react'

class Class extends Component {

    constructor(props){
      super(props)
      this.state = {
        name: 'Class Component.'
      }
    }
  render() {
      return (
             <h1>This is a {this.state.name} #Hollow Brick</h1>
      )
  }
  }
  
  export default Class