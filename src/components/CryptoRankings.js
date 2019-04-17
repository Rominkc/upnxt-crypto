import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, Image,} from 'react-bootstrap';
import CryptoTable from './CryptoTable';
import Spinner from '../assets/UI/Spinner';
import ScrollUpButton from 'react-scroll-up-button';
import cryptoCompareImg from '../assets/Images/JPEG24.jpg';

import './CryptoRankings.css';


const baseUrl='https://min-api.cryptocompare.com';
const coinDataUrl1='/data/top/mktcapfull?limit=20&tsym=USD';
const coinDataUrl2='/data/top/totalvolfull?limit=20&tsym=USD';
//const apiKey='&apikey=3b881008384ac0d0e22294c065aed977c394f51d2a959fbe1ffdc9c5f70f745f';
export default class CryptoRankings extends Component {
    state = {
        dataMktCap:[],
        data24HVol:[],
        loading:false
    }
    //Get data from API lifecycle method called when component mounts to screen
    componentDidMount(){
    // show spinner because component is loading
        this.setState({loading:true})
        axios.all([
        axios.get(baseUrl+coinDataUrl1),
        axios.get(baseUrl+coinDataUrl2)
      ])
      .then(axios.spread((respMktCap, res24HVol) => {
        // do something with both responses and switch loading state to false because the component is no longer loading
        const topTwentyCoinDataArrayMktCap = respMktCap.data.Data;
        const topTwentyCoinDataArray24HVol = res24HVol.data.Data;
        this.setState({dataMktCap:topTwentyCoinDataArrayMktCap,
                       data24HVol:topTwentyCoinDataArray24HVol,
                       loading:false});
      }))
    }
    
    render(){
        // show loading animation while data is being requested from server
     
        return(
            
            <Grid >
                <ScrollUpButton/>
                <Row>
                    <Col xs={12} >
                       
                        <h2>Top Twenty Cryptocurrencies</h2><br/> 
                    </Col>    
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4>*by market capitalization</h4>
                        {this.state.loading ? <Spinner/> : <CryptoTable coinData={this.state.dataMktCap} />}
                        
                        <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <Image src={cryptoCompareImg}  />
                        </div>
                        <br/>
                    </Col>    
                </Row>
                <Row>
                    <Col xs={12}>
                        <h4>*by 24 hour volume</h4>
                        {this.state.loading ? <Spinner/> : <CryptoTable coinData={this.state.data24HVol} />}
                       
                        
                        <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                        <Image src={cryptoCompareImg}  />
                        </div>
                        <br/>
                    </Col>    
                </Row>
             
            </Grid>
          
        );
    }
}