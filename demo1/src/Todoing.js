import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>正在进行{this.props.todo.length}</h1>
                <ul className="list">
                    {
                        this.props.todo.map((item,idx)=><li key={idx}><input type="checkbox" onClick={()=>{this.props.movTodo(idx)}} />{item} ------ <button onClick={()=>{this.props.del(idx)}}>删除</button></li>)
                    }
                </ul>
                <h1>已经完成{this.props.beOver.length}</h1>
                <ul className="list">
                    {
                       this.props.beOver.map((item,idx)=><li key={idx}><input type="checkbox" onClick={()=>{this.props.movTodo(idx)}}/>{item} ------ <button onClick={()=>{this.props.del(idx)}}>删除</button></li>)
                    }
                    
                </ul>
            </div>
        )
    }
}
// Todoing.propTypes = {
//     todo: PropTypes.array
// }
// Todoing.defaultProps = {
//     todo: [2,3,4],
//     a: 100
// }