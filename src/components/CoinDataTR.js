import React from 'react';
import './CoinDataTR.css';

const CoinDataTR = props => {
    
    let chg24HTxtColor = '';
    let pctChngClr = parseFloat(props.percentChange24h,10);
 
   if(pctChngClr > 0){
       chg24HTxtColor='tbl-data-green'
       
   }
   else if (pctChngClr < 0){
    chg24HTxtColor='tbl-data-red'
 
   }

    return(
        <tr key={props.id}>
            <td>{props.id}
                <a href={props.coinLink}
                   rel="noopener noreferrer"
                target="_blank">
                    <img alt={props.coinName + ' image'} style={{width:'2rem', marginLeft:'1rem'}}src={props.coinImage} />
                    
                </a>
            </td>
            <td>{props.coinName}</td>
            <td>{props.coinId}</td>
            <td>{props.price}</td>
            <td>{props.marketCap}</td>
            <td >{props.totalVol24h}</td>
            <td className={chg24HTxtColor}>{props.usdChange24h}</td>
            <td className={chg24HTxtColor}>{props.percentChange24h}</td>
            
        </tr>);
}

export default CoinDataTR;