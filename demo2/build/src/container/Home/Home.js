import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pages from '../Pages/Pages';
import '../container.css'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      tagType: '',
      page:'',
      api:'https://cnodejs.org/api/v1/topics/',
    };
  }
  tagType = (tag) =>{
      if(tag = '全部'){
        tag = 'all';
      }else if(tag = '精华'){
        tag = 'good';
      }else if(tag = '分享'){
        tag = 'share';
      }else if(tag = '问答'){
        tag = 'ask';
      }else if(tag = '招聘'){
        tag = 'job';
      }
    this.setState({
      tagType:tag
    },()=>{
      console.log(this.state.tagType)
    })
  }
  componentDidMount(){
    fetch(this.state.api)
    .then((res)=>res.json())
    .then((res)=>{
        res.data.map((item)=>{
          this.setState({
              postList:res.data
          })
      })
    });
  }
  componentDidUpdate(a,b){
    var url = 'https://cnodejs.org/api/v1/topics/?tab=all&page='+this.state.page;
    if(b.tagType == this.state.tagType && b.page !== this.state.page){
      fetch(url)
      .then((res)=>res.json())
      .then((res)=>{
          this.setState({postList:res.data})
      });
    }else{
      fetch('https://cnodejs.org/api/v1/topics?tab='+this.state.selectTab+'&page=1')
      .then((res)=>res.json())
      .then((res)=>{
          this.setState({postList:res.data})
      });
    }
  }
  pagesType = (idx)=>{
    this.setState({
      page:idx
    },()=>{console.log(this.state.page)})
  }
  render() {
    return (
      <div className="homeAll">
        <div getTab={this.tagType} className="homeHeader">
              {
                  ['全部','精华','分享','问答','招聘'].map((res)=>(
                      <button onClick={()=>this.props.getTab(res)} className="topic_tab" key={res}>{res}</button>
                  ))
              }
        </div>
        <div>{
          // error
          this.state.postList.map((res)=>(
            <ul>
              <li>
                <img src={res.author.avatar_url} alt=""/>
                <span>{res.reply_count}/{res.visit_count}</span>
                <span>{res.tab}</span>
                <Link to={'/detail/'+res.id}></Link>
                <span>刚刚</span>
                <img src={res.author.avatar_url} alt=""/>
              </li>
            </ul>
          ))
        }
        </div>
        <br/>
        <Pages getPages={this.pagesType}/>
      </div>
    )
  }
}
