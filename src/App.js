import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/CustomNavBar';
import Home from './components/Home';
import About from './components/About';
import CryptoRankings from './components/CryptoRankings';
import CryptoNews from './components/CryptoNews';
import CryptoCharts from './components/CryptoCharts';
import CustomFooter from './components/CustomFooter';
import ScrollToTop from './components/ScrollToTop';
// must first cd into Client before npm start, did it because was thinking of implementing a node server but decided not to
class App extends Component {
  render() {
    
    return (
      <Router >
      <ScrollToTop>
        <div className='main-div'>
        <Navbar/>
        <Route exact path ="/" component ={Home}/>
        <Route path ="/about" component ={About}/>
        <Route path ="/crypto-rankings" component ={CryptoRankings}/>
        <Route path ="/crypto-charts" component ={CryptoCharts}/>
        <Route path ="/crypto-news" component ={CryptoNews}/>
        <CustomFooter/>
        </div>
        </ScrollToTop>
      </Router>
    
    );
  }
}

export default App;
