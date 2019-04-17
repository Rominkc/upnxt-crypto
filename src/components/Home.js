import React, {Component} from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
import ScrollUpButton from "react-scroll-up-button";
import './Home.css';

export default class Home extends Component {
    render(){
        
        return (
            <div>
            
            <Grid >
                <ScrollUpButton/>
                <Row>
                    <Col xs={12} >
                        
                        <Jumbotron >
                            <h2> Welcome to UpNxt Crypto</h2>
                            <p>Your #1 source to find out which crypto is "Up Next!"</p>
                            <a href="https://www.youtube.com/watch?v=kubGCSj5y3k"
                                target="_blank"
                                rel="noopener noreferrer" >
                                <Button>
                                    Learn More
                                </Button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=DHtilrc4zLQ"
                                target="_blank"
                                rel="noopener noreferrer" >
                                <Button>
                                    Investment Tips
                                </Button>
                            </a>
                            <a href="https://www.cryptocompare.com/exchanges/#/overview"
                                target="_blank"
                                rel="noopener noreferrer" >
                                <Button>
                                    Exchanges
                                </Button>
                            </a>
                        </Jumbotron>
                       
                    </Col>    
                </Row>
               
                <Row>
                  <Col xs={12} >
                      <h2>Frequently Asked Questions</h2>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12}  className="main-section">
                        <h3> What are cryptocurrencies, where did they come from and how do they work?</h3>
                        <p>
                            Cryptocurrencies are a decentralized form of digital currency. The first cryptocurrency, Bitcoin, is believed to be created by Satoshi Nakamoto.
                            Nakamoto's goal was to build a decentralized digital cash system, and in January 2009 he announced the first release of this system, Bitcoin.
                            How cryptocurrencies work is there is a 'global ledger' that all transactions are recorded on (more commonly known as the blockchain); 
                            however, there is no central entity (like banks) that is incharge of keeping track of and verifying these transactions. 
                            Instead, these transactions are verified by people in the crypto's peer-to-peer network. Every peer has a record of a complete history of all transactions,
                            and when a transaction is made it is verified and added to a new 'block' of other transactions. This 'block' of transactions is then added to the immutable blockchain.
                        </p>
                    </Col>
               </Row>
               <Row>
                    <Col xs={12} className="main-section">
                        <h3> How are transactions verfied?</h3>
                        <p>
                            In the peer-to-peer network, people who verify transactions are more commonly known as 'miners.' To ensure their legitimacy they must first provide a 'proof-of-work'
                            and find a hash that connects a new block to the current block. To find this hash they must solve a cryptographic function that is based on the SHA 256 Hash algorithm.
                            Once solved, a miner can connect a new block to the chain, and is awarded currency in exchange for their troubles. This is also the only valid way to create new coins.
                        </p>
                    </Col>
               </Row>
               <Row>
                  <Col xs={12} className="main-section">
                    <h3> Why should I invest?</h3>
                    <p>
                        On October 16, 2010 one Bitcoin was worth $0.07 and at it's peak on December 17, 2017 one Bitcoin was worth $19,783.21. That is a 28,261,629% increase in about the time span of 7 years!
                        While Bitcoin has decreased in price since then, and as of March 15, 2019 one is worth $3,980.17, there is no doubt that the potential for monetary gain is there. 
                        Another reason one might invest is their liking to the idea of a decentralized currency. 
                    </p>
                  </Col>
               </Row>
               <Row>
                  <Col xs={12}  className="main-section">
                    <h3> Is Bitcoin the only cryptocurrency?</h3>
                    <p>
                        No, Bitcoin is not the only cryptocurrency. In fact, new cryptocurrencies are created on a daily basis (although most fail). Bitcoin, however, is definitely the most popular.
                        Some others you have probably heard of include Ethereum, XRP, Litecoin, and Stellar (just to name a few).
                    </p>
                  </Col>
               </Row>
               
               <Row>
                 <Col xs={12}  className="main-section">
                    <h3> Are cryptocurrencies safe?</h3>
                    <p>
                        Yes, although there are some reports of criminal negotiations occuring through the use of some cryptocurrencies,
                        these transactions are in no way associated with the currencies themselves, and 
                        most of the popular coins are believed to be safe.
                    </p>
                 </Col>
               </Row>
            </Grid>
            </div>
        );
    }
}