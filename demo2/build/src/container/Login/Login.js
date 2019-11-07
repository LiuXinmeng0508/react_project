import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../container.css'

export default class Login extends Component {
    render() {
        return (
            <div className="formcont">
                <form action="/" className="logform" method="post">
                    <div className="user">
                        <span>用户名</span>
                        <input type="text" id="username" name="username"/>
                    </div>
                    <div className="pwd">
                        <span>密码</span>
                        <input type="password" id="passwd" name="passwd"/>
                    </div>
                </form>
                <div>
                <button><Link to="../Home/Home">登录</Link></button>
                </div>
            </div>
        )
    }
}
