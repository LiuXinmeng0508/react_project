import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import '../App.css';

export default class AppListView extends Component {
    render() {
        return (
            <div>
                <WingBlank>
                <table className="shopDetails">
                    <tr>
                        <td><img src="../../imgs/m.jpg" style={{ width: "100px", height: "100px" }} /></td>
                        <td>
                            <span className="shop_title">M记</span>
                            <ul>
                                <li><img src="../../imgs/star1.png" alt="" style={{width:'22px',height:'22px'}}/ ></li>
                                <li><img src="../../imgs/star1.png" alt="" style={{width:'22px',height:'22px'}}/ ></li>
                                <li><img src="../../imgs/star1.png" alt="" style={{width:'22px',height:'22px'}}/ ></li>
                                <li><img src="../../imgs/star1.png" alt="" style={{width:'22px',height:'22px'}}/ ></li>
                                <li><img src="../../imgs/star2.png" alt="" style={{width:'22px',height:'22px'}}/ ></li>
                            </ul>
                            <table>
                                <td>人均￥55</td>
                                <td>起送￥50</td>
                            </table>
                            <p>10:00-20:00</p>
                        </td>
                    </tr>
                </table>
                </WingBlank>
            </div>
        )
    }
}
