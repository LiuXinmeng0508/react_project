import React, { Component } from 'react';
import store from '../store';

export default class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            login: store.getState()
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                login: store.getState()
            })
        })
    }
    
    render() {
        if (this.state.login) {
            return (
                <div>
                    <h3>已登录</h3>
                </div>
            )
        } else {
            return (
                <div>请登录</div>
            )
        }


    }
}