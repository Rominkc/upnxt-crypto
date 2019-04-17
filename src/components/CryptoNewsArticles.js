import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import cryptoCompareImg from '../assets/Images/JPEG24.jpg';
 /* Sometimes dynamic content has HTML entities that don't get transformed correctly
and displayed as their literal codes i.e instead of '·'  it would be '&middot' this func transforms the
dynamic text into its proper form, and then returns it so it displays correctly */
const entityToChar = str => { 
     const textarea = document.createElement('textarea'); 
        textarea.innerHTML = str; 
        return textarea.value; 
          };

const CryptoNewsArticles= (props) => {

    const data = props.data
    return(
        data.length > 0 ?
            data.map((articData, index)=>(
                <Row key={articData.id}>
                    <Col xs={12} className="article-row">
                        <div >
                            <a href={articData.guid}
                            target="_blank"
                            className="article-image-a">
                                <Image src={articData.imageurl} className="article-image"/>
                            </a>
                            <div className="article-body">
                                <p className="article-sourceinfo-name">{articData.source_info.name}</p>
                                <a href={articData.guid}
                                    target="_blank" 
                                    className="article-title-a">
                                    <p className="article-title">{articData.title}</p>
                                </a>
                                <p>{entityToChar(articData.body)}</p>
                                <p><span>Categories:</span> {articData.categories}</p>
                            </div>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                            <Image src={cryptoCompareImg}  />
                        </div>
                        <br/>
                    </Col>    
                </Row>))
                : null
    )  
}

export default CryptoNewsArticles;