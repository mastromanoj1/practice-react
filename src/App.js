import './App.css';

import Class from  './components/class_component' ;
import Functional from './components/functional_components'

import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <div>
         <Functional/>
          <Class/>
      </div>
    
    )
  }
}


export default App
