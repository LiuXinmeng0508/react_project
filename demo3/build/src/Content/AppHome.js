import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { WingBlank } from 'antd-mobile';
import '../App.css';
// import { createForm } from 'rc-form';
// import arrayTreeFilter from 'array-tree-filter';

// import { district, provinceLite } from 'antd-mobile-demo-data';

export default class MyHome extends Component {
    
    render() {
        // state = {
        //     data: [],
        //     cols: 1,
        //     pickerValue: [],
        //     asyncValue: [],
        //     sValue: ['>'],
        //   };
        //   onClick = () => {
        //     setTimeout(() => {
        //       this.setState({
        //         data: provinceLite,
        //       });
        //     }, 120);
        //   };
        //   onPickerChange = (val) =>{
        //     console.log(val);
        //     const d = [...this.state.data];
        //     const asyncValue = [...val];
        //     this.setState({
        //         data: d,
        //         cols: colNum,
        //         asyncValue,
        //       });
        //   };
        //   getSel() {
        //     const value = this.state.pickerValue;
        //     if (!value) {
        //       return '';
        //     }
        //     const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        //     return treeChildren.map(v => v.label).join(',');
        //   }
        return (
            <div>
                <div className="topRed">
                <div className="Homepic">
                    <img src="../../imgs/touxiang.png" alt="" style={{width:'24%',height:'24%'}}/>
                </div>
                <div>
                    <table className="mineData">
                        <td>我的钱包</td>
                        <td>我的红包</td>
                        <td>商家代金券</td>
                    </table>
                </div> 
                </div>
                <div>
                    {/* <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
                            <List.Item arrow="horizontal">Single</List.Item>
                        </Picker>
                    </List> */}
                    <table className="HomeList">
                        <tr>
                            <td><img src="../../imgs/zuobiao.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>我的收货地址<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                        <tr>
                            <td><img src="../../imgs/zuobiao.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>我的收藏<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                        <tr>
                            <td><img src="../../imgs/zuobiao.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>我的评论<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                        <tr>
                            <td><img src="../../imgs/zuobiao.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>我的退款<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                        <tr>
                            <td><img src="../../imgs/zuobiao.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>我的消息<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                    </table>
                    <table className="moreUl">
                        <tr>
                            <td><img src="../../imgs/more.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>帮助与反馈<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                    </table>
                    <table className="moreUl">
                        <tr>
                            <td><img src="../../imgs/more.png" alt="" style={{width:'30px',height:'30px'}}/></td>
                            <td>更多<Icon type="right" style={{float:'right'}}/></td>                            
                        </tr>
                    </table>
                </div>
                <p className="HomeTel">客服电话 400-820-8888</p>
                
            </div>
        )
    }
}
