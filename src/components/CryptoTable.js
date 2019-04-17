import React from 'react';
import {Table} from 'react-bootstrap';
import CoinDataTr from './CoinDataTR';
const CryptoTable= props => (
    <Table  bordered  responsive hover>
    <thead>
         <tr>
             <th>
                 # 
             </th>
             <th>
                 Coin  
             </th>
             <th>
                 Coin ID  
             </th>
             <th>
                 Price
             </th>   
             <th>
                 Market Cap
             </th>
             <th>
                 Total Vol.24H  
             </th>         
             <th>
             ($) Chg.24H  
             </th> 
             <th>
             (%) Chg.24H  
             </th>      
         </tr>   
     </thead>
     <tbody>
     {props.coinData.map((coinD,index) => (
         <CoinDataTr key={index +1}
                     id={index +1}
                     price={coinD.DISPLAY.USD.PRICE}
                     coinImage={'https://www.cryptocompare.com'+coinD.CoinInfo.ImageUrl}
                     coinLink={'https://www.cryptocompare.com'+coinD.CoinInfo.Url} 
                     coinName={coinD.CoinInfo.FullName}
                     coinId={coinD.CoinInfo.Name}
                     marketCap={coinD.DISPLAY.USD.MKTCAP} 
                     totalVol24h={coinD.DISPLAY.USD.VOLUME24HOURTO}  
                     usdChange24h={coinD.DISPLAY.USD.CHANGE24HOUR}  
                     percentChange24h={coinD.DISPLAY.USD.CHANGEPCT24HOUR} 
                     />
     ))}
     </tbody> 
 </Table>
);

export default CryptoTable;