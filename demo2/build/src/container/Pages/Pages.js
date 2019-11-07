import React, { Component } from 'react'
import '../container.css'

export default class Pages extends Component {
    render() {
        return (
            <div className="pagbtn">
                {
                     [1,2,3,4,5,6,7,8,9,10].map((idx)=>(
                        <button onClick={()=>this.props.getPages(idx)} className="pages" key={idx}>{idx}</button>
                     ))
                }
            </div>
        )
    }
}
