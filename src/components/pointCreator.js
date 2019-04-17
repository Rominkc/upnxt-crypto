
const pointCreator =(data, type)=> {
    let points = [];
    switch (type){
        case 'close': for (let i = 0; i < data.length; i++) {
                     points.push(
                            {x:  new Date(data[i].time *1000), // must convert to milliseconds to get correct timestamp value
                            y:data[i].close, 
                             })  
                           
                    }
                    return points;
        case 'high': for (let i = 0; i < data.length; i++) {
                        points.push(
                               {x: new Date(data[i].time *1000), 
                               y:data[i].high,
                            });    
                       }
                       return points;
        case 'low': for (let i = 0; i < data.length; i++) {
                        points.push(
                            {x: new Date(data[i].time *1000), 
                            y:data[i].low,
                        });    
        }
                       return points; 
        case 'open': for (let i = 0; i < data.length; i++) {
                        points.push(
                            {x: new Date(data[i].time *1000), 
                            y:data[i].open,
                        });    
        }
                       return points;
        default: return points=[...data];                             
   }
}
export default pointCreator;