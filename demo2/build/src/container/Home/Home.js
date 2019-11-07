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
      page:''
    };
  }
  componentDidMount(){
    fetch('https://cnodejs.org/api/v1/topics?tab=all')
    .then((res)=>res.json())
    .then((res)=>{
        this.setState({postList:res.data})
    });
  }
  componentDidUpdate(prevState,prevProps){
    if(prevProps.tagType == this.state.tagType && prevProps.page !== this.state.page){
      fetch('https://cnodejs.org/api/v1/topics?tab='+this.state.tagType+'&page='+this.state.page)
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
  tagType = (tag)=>{
    switch(tag){
      case '全部':
          tag = 'all';
          break;
      case '精华':
          tag = 'good';
          break;
      case '分享':
          tag = 'share';
          break;
      case '问答':
          tag = 'ask';
          break;
      case '招聘':
          tag = 'job';
          break;
      default:
          break;
  }
    this.setState({
      tagType:tag
    },()=>{
      console.log(this.state.tagType)
    })
  }
  pagesType = (idx)=>{
    this.setState({
      page:idx
    },()=>{console.log(this.state.page)})
  }
  render() {
    return (
      <div>
        <div getTab={this.tagType} className="homeHeader">
              {
                  ['全部','精华','分享','问答','招聘'].map((res)=>(
                      <button onClick={()=>this.props.getTab(res)} className="topic_tab" key={res}>{res}</button>
                  ))
              }
        </div>
        <div>{
          this.state.postList.map((res)=>(
            <ul>
              <li>
                <img src={res.author.avatar_url} alt=""/>
                <span>{res.reply_count}/{res.visit_count}</span>
                <span>{res.tab}</span>
                <Link to={'/detail/'+res.id}></Link>
                <span>刚刚</span>
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
