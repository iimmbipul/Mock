import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import SideNav from './Components/SideNav/SideNav.js';



export default class App extends Component {
  
 

render() {
  return (
    <Fragment>
    
    <Router>
   
    <Header/>
    <SideNav/>
    
    <Content/>
    </Router>
    
    </Fragment>
    )
  }
}
