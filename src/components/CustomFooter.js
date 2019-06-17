import React from 'react';
import {Link} from 'react-router-dom';
import './CustomFooter.css'
const CustomFooter =(props)=>(
    <div className="footer-container">
        <p className="footer-brandname">
        © UpNxt Crypto 2019
        </p>
        <p className="footer-content">
            <Link to="/about">About</Link> |&nbsp;
            <a href="mailto:grovelandinc@gmail.com">Contact</a>
        </p>
    </div>
);

export default CustomFooter;