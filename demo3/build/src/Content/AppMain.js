import React, { Component } from 'react';
import '../App.css';
import { NavBar, Icon } from 'antd-mobile';
// import { SearchBar } from 'antd-mobile';
import { WingBlank } from 'antd-mobile';
import AppMenu from './AppMenu';
import AppPics from './AppPics';
import AppGrid from './AppGrid';
import AppListView from './AppListView';


export default class AppMain extends Component {
    
    render() {
        return (
            <div>
            <div className="TopNavBar">
                <AppMenu />
                {/* <SearchBar placeholder="搜索商家、品类或商圈" /> */}
            </div>
            <div className="HomeTap">
                <AppPics/>
            </div>
            <div>
                <AppGrid />
            </div>
            <div>
                <table className="ad">
                    <tr>
                        <td rowspan="2">超值购菜品</td>
                        <td colspan="2">五星好评店</td>
                    </tr>
                    <tr>
                        <td>天天满减</td>
                        <td>新店尝鲜</td>
                    </tr>
                </table>
            </div>
            <div className="shopList">
                <WingBlank>
                    <span>商家分类 <Icon type="down"/></span>
                    <span className="span2">排序 <Icon type="down"/></span>                    
                </WingBlank>
                <AppListView/>
                <AppListView/>
            </div>
            </div>
        )
    }
}
