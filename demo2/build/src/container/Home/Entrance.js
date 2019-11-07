import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../container.css'

export default class Entrance extends Component {
    render() {
        return (
            <div className="entrance" method="post">
                <form action="">
                    <span>CNode：Node.js专业中文社区</span><br/>
                    <span>您可以登录或注册，也可以</span><br/>
                    <button><Link to='../Login/Login'>通过 GitHub 登录</Link></button>
                </form>
            </div>
        )
    }
}
