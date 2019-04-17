import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, Image,} from 'react-bootstrap';
import RenderCryptoChart from './RenderCryptoChart'
import cryptoCompareImg from '../assets/Images/JPEG24.jpg';
import ScrollUpButton from 'react-scroll-up-button';
import coinList from './coinList';

 // needed for react-timeseries-charts to specify the data


//const apiKey= '?apikey=EDF05C8A-8D9D-477B-A056-90FDB99C20F8';
//const baseUrl ='https://rest.coinapi.io';
// Two above are for coin API
const baseUrl='https://min-api.cryptocompare.com';
const coinDataUrlpt1='/data/histoday?fsym=';
const coinDataUrlpt2='&tsym=USD&limit=1000&aggregate=30';
//const apiKey='&apikey=3b881008384ac0d0e22294c065aed977c394f51d2a959fbe1ffdc9c5f70f745f';
/* Function to transform data received from get request into x,y values that will be used for chart
Specify type to determine Y value as x value is constant between all values i.e time is the shared value for all types*/


export default class CryptoCharts extends Component {
    state = {
        data:[],
        coinSymbol:'BTC',
        userInput:'BTC',
        validInput:true,
        zoomDomain:{}       
    }
    // handle change for when user changes zoom
    handleZoom =(domain)=> {
        this.setState({ zoomDomain: domain });
      }
    // handle user input to react state for "one source of truth"
    handleChange =(event)=> {
        this.setState({userInput: event.target.value.toUpperCase()});
      }
    handleSubmit =(event) =>{
            event.preventDefault();
            //Check if the symbol entered by the user is a valid entry before rendering the element
            const validEntry = coinList.includes(this.state.userInput) 
            validEntry ?
            (axios.get(baseUrl+coinDataUrlpt1+`${this.state.userInput}`+coinDataUrlpt2).then(res => {
            const coinSymbol= this.state.userInput;
            const coinDataArray = res.data.Data;
            //console.log(coinDataArray[0])
           
            this.setState({data:coinDataArray,
                           coinSymbol,
                           validInput:validEntry,
                           //instantiate zoom domain based on lowest and highest date from array
                           zoomDomain:{ x: [ new Date(coinDataArray[0].time *1000), 
                                             new Date(coinDataArray[coinDataArray.length-1].time *1000)] }
                                            })
          
           // console.log(this.state); 
           }))  : this.setState({validInput:validEntry})
    } 

    //Get data from API lifecycle method called when component mounts to screen
    // Default coin is BTC but can be changed by user
    componentDidMount(){
        //console.log('component mounted')
            axios.get(baseUrl+coinDataUrlpt1+`${'BTC'}`+coinDataUrlpt2).then(res => {
            //console.log(res.data);
            const coinDataArray = res.data.Data;
            //console.log(coinDataArray[0])
            
            this.setState({data:coinDataArray,
                           zoomDomain:{ x: [ new Date(coinDataArray[0].time *1000), 
                                             new Date(coinDataArray[coinDataArray.length-1].time *1000)] } });
           // console.log(this.state);
            })
      
    } 
    
    render(){
    
      // console.log('i was rendered ' + this.state.coinSymbol)
      // console.log(this.state.data)
        return(
            
            <Grid >
                <ScrollUpButton/>
                <Row>
                    <Col xs={12} >
                        
                        <h2>Cryptocurrency Historical Data</h2><br/> 
                        <p>OHLC historical data for hundreds of cryptocurrencies (data aggregated on a 30 day basis)</p>
                        <p>Please Enter the symbol for the currency you would like to view. (i.e BTC,ETH,LTC)</p>
                        <p>A list of valid currencies symbols can be found<span>{/*adds a space*/} </span> 
                            <a 
                                href='https://github.com/crypti/cryptocurrencies'
                                target="_blank"
                                rel="noopener noreferrer">here</a>
                        </p>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                            Coin Name:
                            <input type="text" spellCheck="false" value={this.state.userInput} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </Col>    
                </Row>
                
                <Row>
                    <Col xs={12}>
                     { this.state.validInput ?  
                     <RenderCryptoChart data={this.state.data}
                                        handleZoom={this.handleZoom}
                                        zoomDomain={this.state.zoomDomain}/> : 
                        <p
                        style={{marginTop:'100px',
                        color:'red',
                        fontSize:'5rem'}}> 
                        *Please enter a valid input
                        </p>
                      }

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