import React, { Component } from 'react'
import './App.css';
import AppTab from './Content/AppTab';
// import AppMenu from './Content/AppMenu';
import AppMain from './Content/AppMain';
// import AppHome from './Content/AppHome'
// yarn add antd-mobile

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <AppMain/> */}
        {/* <AppHome/> */}
        {/* <AppMenu/> */}
        <AppTab/>
      </div>
    )
  }
}




