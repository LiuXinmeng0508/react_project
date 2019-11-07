import React, { Component } from 'react'

export default class Detail extends Component {

    render() {
        let path = {
            pathname:'/postList',
            state:this.props.data.item
        };
        return (
            <div className="cell">
                <a className="user_avatar pull-left">
                    <img src={this.props.data.item.author.avatar_url} title={this.props.data.item.author.loginname} alt=""/>
                </a>
                <span className="reply_count pull-left">
                    <span className="count_of_replies" title="回复数">
                        {this.props.data.item.reply_count}
                    </span>
                    <span className="count_seperator">/</span>
                    <span className="count_of_visits" title="点击数">
                        {this.props.data.item.visit_count}
                    </span>
                </span>
                <div className="topic_title_wrapper">
                    <span className="put_top">{this.props.data.item.tab}</span>       
                        <Link to={path}>
                            {this.props.data.item.title}
                        </Link>                    
                </div>
            </div>
        )
    }
}
