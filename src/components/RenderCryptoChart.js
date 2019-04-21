import React from 'react';
import pointCreator from './pointCreator'
import {VictoryChart ,VictoryLegend,VictoryBrushContainer,VictoryAxis, VictoryGroup, VictoryArea, VictoryLabel, createContainer} from 'victory';

const VictoryZoomCursorContainer = createContainer("zoom", "cursor");
const RenderCryptoChart =(props)=>{
    //console.log('I was rendered')
    const close = pointCreator(props.data,'close')
    const open = pointCreator(props.data,'open')
    const high = pointCreator(props.data,'high')
    const low = pointCreator(props.data,'low')
               return(
               <div> 
                <VictoryChart
                    domainPadding={20}
                    allowZoom={false}
                    scale={{x: 'time',y: 'linear'}}
                    width={1200} 
                    height={900}
                    animate={{duration:1000}}
                    containerComponent={
                        <VictoryZoomCursorContainer
                        
                        allowZoom= {false}
                       
                        cursorLabel={(d) =>(`USD $${d.y.toFixed(2)} Date: ${d.x.toLocaleDateString("en-US")}`)}
                        zoomDimension="x"
                        zoomDomain={props.zoomDomain}
                        onZoomDomainChange={props.handleZoom}
                        cursorLabelComponent={
                        <VictoryLabel
                        x={105} y={150}
                        desc='USD amount and date for selected point'
                        style={{fontSize: 20 }}
                        events={{onChange: (evt) => console.log("x: " + evt.target.x)}}
                        />}
                            

                        />
                    }
                    
                >
                    <VictoryLegend
                    x={105} y={50}
                    	title="Legend"
                        centerTitle
                        orientation="horizontal"
                        gutter={20}
                        style={{ border: { stroke: "black" }, title: {fontSize: 25 } }}
                        data={[
                          { name: "high", symbol: { fill: "#1111c5ba",}, labels:{fontSize:15} },
                          { name: "open", symbol: { fill: "green" }, labels:{fontSize:15} },
                          { name: "close",symbol: { fill: "red" }, labels:{fontSize:15} },
                          { name: "low", symbol: { fill: "yellow" , labels:{fontSize:15}} }
                        ]}
                    />
                    <VictoryGroup
                       style={{
                        data: { strokeWidth: 3, fillOpacity: 0.4 }
                      }}>
                        <VictoryArea
                            scale={{x:'time'}}
                            data={high}
                            style={{ data: { strokeWidth: .5, fill:'#1111c5ba' } }}
                            
                            />
                        <VictoryArea
                        scale={{x:'time'}}
                        data={open}
                        style={{ data: { strokeWidth: .5, fill:'green' } }}
                        
                        />
                        <VictoryArea
                        scale={{x:'time'}}
                        data={close}
                        style={{ data: { strokeWidth: .5, fill:'red' } }}
                        
                        />
                        <VictoryArea
                        scale={{x:'time'}}
                        data={low}
                        style={{ data: { strokeWidth: .5, fill:'yellow' } }}
                        
                        />
                  
                    
                    </VictoryGroup>
                </VictoryChart>
                <VictoryChart
                    padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
                    scale={{x: 'time',y: 'linear'}}
                    width={600} 
                    height={100}
                    containerComponent={
                        <VictoryBrushContainer
                        brushDimension="x"
                        brushDomain={props.zoomDomain}
                        onBrushDomainChange={props.handleZoom}
                        defaultBrushArea='all'
                        />
                    }
                >
                     <VictoryAxis tickFormat={(x) => new Date(x).getFullYear()}/>
                     
                    <VictoryGroup>
                        <VictoryArea
                            scale={{x:'time'}}
                            data={high}
                            style={{ data: { strokeWidth: .5, fill:'#1111c5ba' } }}
                            
                            />
                        <VictoryArea
                        scale={{x:'time'}}
                        data={open}
                        style={{ data: { strokeWidth: .5, fill:'green' } }}
                        
                        />
                        <VictoryArea
                        scale={{x:'time'}}
                        data={close}
                        style={{ data: { strokeWidth: .5, fill:'red' } }}
                        
                        />
                        <VictoryArea
                        scale={{x:'time'}}
                        data={low}
                        style={{ data: { strokeWidth: .5, fill:'yellow' } }}
                        
                        />
                    
                    
                    </VictoryGroup>
                </VictoryChart>
                </div>);

}
export default RenderCryptoChart;