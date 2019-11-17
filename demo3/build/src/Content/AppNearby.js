import React, { Component } from 'react';
import '../App.css';
import AppMenu from './AppMenu';
import AppListView from './AppListView';

export default class AppNearby extends Component {
    render() {
        return (
            <div>
                <div className="TopNavBar">
                    <AppMenu />
                    {/* <SearchBar placeholder="搜索商家、品类或商圈" /> */}
                    <div className="addr">
                        <table>
                            <td>1000m <img src="../../imgs/sanjiao.png" alt="" style={{width:'25px',height:'25px'}}/></td>
                            <td>全部餐厅<img src="../../imgs/sanjiao.png" alt="" style={{width:'25px',height:'25px'}}/></td>
                            <td>默认排序<img src="../../imgs/sanjiao.png" alt="" style={{width:'25px',height:'25px'}}/></td>
                        </table>
                    </div>
                </div>
                <div>
                    <AppListView/>
                    <AppListView/>
                    <AppListView/>
                    <AppListView/>
                    <AppListView/>
                    <AppListView/>
                </div>
            </div>
        )
    }
}
