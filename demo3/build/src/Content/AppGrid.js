import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import '../App.css';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: '../../imgs/eat.png',
    text: `餐饮${i}`,
  }));
  
// const data1 = Array.from(new Array(9)).map(() => ({
//     icon: './img/eat.png',
//   }));
export default class AppGrid extends Component {
    
    render() {
        return (
            <div className="Carousel_Grid">
                <Grid data={data} isCarousel onClick={_el => console.log(_el)}  hasLine={false} itemStyle={{height:'70px',background: '#ff3d67',borderRadius:'40px',marginTop:'10px',marginLeft:'4px',marginRight:'4px'}}/>
            </div>
        )
    }
}
