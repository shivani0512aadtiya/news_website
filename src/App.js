import './App.css';
import React, { Component } from 'react'

import Navbar from './Components/Navbar';
import News from './Components/News';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Cards from './Components/Cards';


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <Card/>
        <Cards/>
        <Footer/>
      </div>
    )
  }
}

 