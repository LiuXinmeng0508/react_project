import React, { Component } from 'react';
import { Menu, ActivityIndicator, Button } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import '../App.css';


const data = [
  {
    value: '1',
    label: '承德',
  }, {
    value: '2',
    label: '衡水',
  },
  {
    value: '3',
    label: '唐山',
    isLeaf: true,
  },
];

export default class AppMenu extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
    };
  }
  onChange = (value) => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }
  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    const { initData, show } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
        style={{color:'white'}}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
        <NavBar
            leftContent={[
              <div>石家庄</div>
              
            ]}
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
            style={{backgroundColor:'red',color:'#fff' }}
            rightContent={[
              <img key="0" src={require('./img/erweima.png')} style={{ marginRight: '14px',width:'23px',height:'23px' }} />,
              <img key="1" src={require('./img/remind.png')} style={{width:'23px',height:'23px'}} />,
          ]}
          >
            <input className="searchBar" type="search" name="search" placeholder="搜索商家、品类或商圈"/>
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    )
  }
}

 

