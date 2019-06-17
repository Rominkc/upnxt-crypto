import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './About.css';

export default class About extends Component {
    render(){
        return(
            <div>
                <Grid >
                    <Row>
                        <Col xs={12} >
                            <h2 className="header-about-title">
                            About
                            </h2>
                            <p className="header-about-content">
                            UpNxt Crypto is a website that was created in 2019 with the purpose of helping inform 
                            people about today’s hottest cryptocurrencies. 
                            Along with this, UpNxt Crypto hopes to introduce cryptocurrencies to those who have 
                            no experience with the world of blockchain but would like to learn about it. When you visit UpNxt Crypto
                            you can rest assured that all of the information you see is 99.9% accurate and up to date. 
                            Based in the heart of New York, we provide real time information for all of your cryptocurrency needs.
                            </p>
                        </Col>
                    </Row>
                     {/*<Row>
                        <Col xs={12} >
                            <h2>
                            Contact Info
                            </h2>
                            <p>
                            For business inquires or if you would like to contact us please email Upnxtcrypto@gmail.com
                            </p>
                        </Col>
                     </Row>*/}
                </Grid>
            </div>
        );
    }
}