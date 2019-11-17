import React from "react";
import { TabBar } from "antd-mobile";
import AppMain from './AppMain';
import AppNearby from './AppNearby';
import AppHome from './AppHome';
// import AppHome from "./AppHome";

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#fff"
          tintColor="#000"
          barTintColor="red"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              
              // type={require('img/符号-首页.png')}
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    // "url(img/符号-首页.png) center center /  21px 21px no-repeat"
                    `url(${require("./img/符号-首页.png")})  center center /  21px 21px no-repeat`
                    
                }}
              />
            }
           
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url(${require("./img/符号-首页 (1).png")})  center center /  21px 21px no-repeat`
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppMain />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url(${require("./img/region.png")})  center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url(${require("./img/region (1).png")})  center center /  21px 21px no-repeat`
                }}
              />
            }
            title="附近"
            key="nearby"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <AppNearby/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url(${require("./img/order.png")})  center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url(${require("./img/order (1).png")})  center center /  21px 21px no-repeat`
                }}
              />
            }
            title="订单"
            key="order"
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            这里说不用写了_(:3J∠)_
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  `url(${require("./img/user.png")})  center center /  21px 21px no-repeat`
                }}
              />
            }
            selectedIcon={<div
              style={{
                width: "22px",
                height: "22px",
                background:
                `url(${require("./img/order (1).png")})  center center /  21px 21px no-repeat`
              }}
            />}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
