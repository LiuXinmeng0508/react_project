import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(props){
        super(props);
        this.state = {
            n1:''
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
            this.setState({
                n1:''
            })
        }
    }
    handleChange = (e)=>{
        this.setState({
            n1:e.target.value
        })
    }
    render() {
        return (
            <div>
                <label style={{
                    fontSize:50
                    }} 
                    htmlFor="inp">输入：</label>
                <input id="inp" name="n1" onChange={this.handleChange} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}
