import React, {useState} from 'react';
import pointCreator from './pointCreator'
import {VictoryChart ,VictoryLegend,VictoryBrushContainer,VictoryAxis, VictoryGroup, VictoryArea, VictoryLabel, createContainer} from 'victory';
// Special hybrid container from Victory.js that inherits attributes/props from the two different container types
const VictoryZoomCursorContainer = createContainer("zoom", "cursor");
const RenderCryptoChart =(props)=>{
    //console.log('I was rendered')
    // Functions that create the data that will be displayed, and used in the Victory chart
    const close = pointCreator(props.data,'close')
    const open = pointCreator(props.data,'open')
    const high = pointCreator(props.data,'high')
    const low = pointCreator(props.data,'low')
    // implement hooks, have checkbox which lets user choose which data they want rendered out of the 4 values
    // hooks lets you use state without writing a class
    //set value to determine if button is able to be unchecked, one button should always be 'checked' so doesn't allow a button to be 'unchecked' if value is <=1
    const [activeBtnCount, setActiveBtnCount]=useState(4)
    //state hooks for graphs to be rendered
   const [highGraph, setHighGraph] = useState(true)
   const [openGraph, setOpenGraph] = useState(true)
   const [closeGraph, setCloseGraph] = useState(true)
   const [lowGraph, setLowGraph] = useState(true)
               return(
                        <div> 
                            <form>
                                <label>
                                    High:
                                    <input
                                        name="one"
                                        type="checkbox"
                                        checked={highGraph}
                                        onChange={()=> 
                                            {
                                            //only allow button state change if more than one button is active
                                                if(highGraph && activeBtnCount>1){
                                                setHighGraph(!highGraph)
                                                setActiveBtnCount(activeBtnCount-1)
                                                }
                                                else if (!highGraph && activeBtnCount >1){
                                                setHighGraph(!highGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                                else if(!highGraph && activeBtnCount <=1){
                                                setHighGraph(!highGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                            }
                                        }
                                            />
                                </label>
                                <label>
                                    Open:
                                    <input
                                        name="one"
                                        type="checkbox"
                                        checked={openGraph}
                                        onChange={()=> 
                                            {
                                                if(openGraph && activeBtnCount>1){
                                                setOpenGraph(!openGraph)
                                                setActiveBtnCount(activeBtnCount-1)
                                                }
                                                else if (!openGraph && activeBtnCount >1){
                                                setOpenGraph(!openGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                                else if(!openGraph && activeBtnCount <=1){
                                                setOpenGraph(!openGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                            }
                                        }
                                        />
                                </label>
                                <label>
                                    Close:
                                    <input
                                        name="one"
                                        type="checkbox"
                                        checked={closeGraph}
                                        onChange={()=> 
                                            {
                                                if(closeGraph && activeBtnCount>1){
                                                setCloseGraph(!closeGraph)
                                                setActiveBtnCount(activeBtnCount-1)
                                                }
                                                else if (!closeGraph && activeBtnCount >1){
                                                setCloseGraph(!closeGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                                else if(!closeGraph && activeBtnCount <=1){
                                                setCloseGraph(!closeGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                            }
                                        }
                                        />
                                </label>
                                <label>
                                    Low:
                                    <input
                                        name="one"
                                        type="checkbox"
                                        checked={lowGraph}
                                        onChange={()=> 
                                            {
                                                if(lowGraph && activeBtnCount>1){
                                                setLowGraph(!lowGraph)
                                                setActiveBtnCount(activeBtnCount-1)
                                                }
                                                else if (!lowGraph && activeBtnCount >1){
                                                setLowGraph(!lowGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                                else if(!lowGraph && activeBtnCount <=1){
                                                setLowGraph(!lowGraph)
                                                setActiveBtnCount(activeBtnCount+1)
                                                }
                                            }
                                        }
                                        />
                                </label>
                            </form>
                        <VictoryChart
                            domainPadding={20}
                        
                        
                            scale={{x: 'time',y: 'linear'}}
                            width={1200} 
                            height={900}
                            animate={{duration:1000}}
                            containerComponent={
                                <VictoryZoomCursorContainer
                                // Disables zooming and panning which were a performance issue because of the need to re-render the chart, this was esp a problem for mobile
                                allowZoom= {false}
                                allowPan={false}
                                cursorLabel={(d) =>(`USD $${d.y.toFixed(2)} Date: ${d.x.toLocaleDateString("en-US")}`)}
                                zoomDimension="x"
                                zoomDomain={props.zoomDomain}
                                onZoomDomainChange={props.handleZoom}
                                cursorLabelComponent={
                                <VictoryLabel
                                x={105} y={150}
                                desc='USD amount and date for selected point'
                                style={{fontSize: 20 }}
                                />}
                                    

                                />
                            }
                            
                        >
                            <VictoryLegend
                            // Legend Component that gives users a key for what colors respond to which data
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
                            {highGraph ?
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={high}
                                    style={{ data: { strokeWidth: .5, fill:'#1111c5ba' } }}
                                    
                                    />
                                    :[]}

                            {openGraph ?
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={open}
                                    style={{ data: { strokeWidth: .5, fill:'green' } }}
                                    
                                    />
                                    :[]}
                            {closeGraph ?     
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={close}
                                    style={{ data: { strokeWidth: .5, fill:'red' } }}
                                    
                                    />
                                    :[]}
                            {lowGraph ?
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={low}
                                    style={{ data: { strokeWidth: .5, fill:'yellow' } }}
                                    
                                    />
                                    :[]}
                        
                            
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
                            {highGraph ?
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={high}
                                    style={{ data: { strokeWidth: .5, fill:'#1111c5ba' } }}
                                    
                                    />
                                    :[]}
                            {openGraph ?
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={open}
                                    style={{ data: { strokeWidth: .5, fill:'green' } }}
                                    
                                    />
                                    :[]}
                            {closeGraph ?     
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={close}
                                    style={{ data: { strokeWidth: .5, fill:'red' } }}
                                    
                                    />
                                    :[]}
                            {lowGraph ?
                                <VictoryArea
                                    scale={{x:'time'}}
                                    data={low}
                                    style={{ data: { strokeWidth: .5, fill:'yellow' } }}
                                    
                                    />
                                    :[]}
                            
                            
                            </VictoryGroup>
                        </VictoryChart>
                        </div>);

}
export default RenderCryptoChart;