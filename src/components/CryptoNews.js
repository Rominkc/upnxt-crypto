import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, } from 'react-bootstrap';
import CryptoNewsArticles from './CryptoNewsArticles';
import Spinner from '../assets/UI/Spinner';
import ScrollUpButton from "react-scroll-up-button"; // From a third party package
import './CryptoNews.css';

const baseUrl='https://min-api.cryptocompare.com';
const coinDataUrl1='/data/v2/news/?lang=EN';

export default class CryptoRankings extends Component {
    state = {
        dataNews:[],
        loading:false
    }
    //Get data from API lifecycle method called when component mounts to screen
    componentDidMount(){
   /*     axios.all([
        axios.get(baseUrl+coinDataUrl1),
        axios.get(baseUrl+coinDataUrl2)
      ])
      .then(axios.spread((respMktCap, res24HVol) => {
        // do something with both responses
        const topTenCoinDataArrayMktCap = respMktCap.data.Data;
        const topTenCoinDataArray24HVol = res24HVol.data.Data;
        this.setState({dataMktCap:topTenCoinDataArrayMktCap,
                       data24HVol:topTenCoinDataArray24HVol});
      })) */
      this.setState({loading:true})
      axios.get(baseUrl+coinDataUrl1).then(res => {
       //console.log(res.data.Data);
       const newsData= res.data.Data;
       this.setState({dataNews:newsData,
                      loading:false});
      // console.log(this.state.dataNews);
      }); 
    }
 
    render(){
    
        const data = this.state.dataNews;
        return(
            
            <Grid >
                <ScrollUpButton/>
                <Row>
                    <Col xs={12} >
                        <h2>Crypto News</h2><br/> 
                    </Col>    
                </Row>
        {   this.state.loading ? <Spinner/> : <CryptoNewsArticles data = {data} /> }
            </Grid>
          
        );
    }
}