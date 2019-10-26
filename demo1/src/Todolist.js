import React, { Component } from 'react'
import Todoinput from './Todoinput';
import Todoing from './Todoing';

export default class Todolist extends Component {
    constructor(props){
        super(props);
        this.state={
            todo:[],
            beOver:[]
        }
        console.log(this.state.todo.length);
    }
    componentDidMount(){
        let toDo=JSON.parse(localStorage.getItem('todo'));
        let over=JSON.parse(localStorage.getItem('beOver'));
        if(toDo){
            this.setState({
                todo:JSON.parse(localStorage.getItem('todo'))
            })
        }if(over){
            this.setState({
                beOver:JSON.parse(localStorage.getItem('beOver'))
            })
        }
    }
    addItem = (msg)=>{
        // this.state.todo.push(msg)
        // console.log(this.state.todo)
        this.setState({
            todo: [...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
        })
        console.log(msg);
    }
    delItem = (a)=>{
        this.state.todo.splice(a,1);
        //深拷贝\浅拷贝
        var todo = [...this.state.todo];
        var beOver = [...this.state.beOver];
        if(todo){
            todo.splice(a,1);
            this.setState({
                todo: todo
            },()=>{localStorage.setItem('todo', JSON.stringify(this.state.todo));})
        }if(beOver){
            beOver.splice(a,1);
            this.setState({
                beOver: beOver
            },()=>{localStorage.setItem('beOver', JSON.stringify(this.state.beOver));})
        }       
        console.log(a);
    }
    overItem = (idx)=>{
        var todo = [...this.state.todo];
        this.setState({
            todo: todo,
            beOver:[...this.state.beOver,todo[idx]]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
            localStorage.setItem('beOver',JSON.stringify(this.state.beOver));
        })
        console.log(idx);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} beOver={this.state.beOver} del={this.delItem} movTodo={this.overItem}/>
            </div>
        )
    }
}
