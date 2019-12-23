import React, {Component} from 'react'

import { TabBar } from 'antd-mobile';

import Home from './home/Home'
import Discount from './discount/Discount'
import Discovery from './discovery/Discovery'
import Equip from './equip/Equip'

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'equipTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#444"
          tintColor="#FF4338"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'homeTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'homeTab',
              });
            }}
            data-seed="logId"
          >
            <Home></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600) center center /  21px 21px no-repeat' }}
              />
            }
            title="优惠"
            key="discounts"
            selected={this.state.selectedTab === 'discountsTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'discountsTab',
              });
            }}
            data-seed="logId1"
          >
            <Discount></Discount>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600) center center /  21px 21px no-repeat' }}
              />
            }
            title="发现"
            key="find"
            selected={this.state.selectedTab === 'findTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'findTab',
              });
            }}
          >
           <Discovery></Discovery>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600' }}
            selectedIcon={{ uri: 'http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600' }}
            title="装备"
            key="equip"
            selected={this.state.selectedTab === 'equipTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'equipTab',
              });
            }}
          >
            <Equip></Equip>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600) center center /  21px 21px no-repeat' }}
              />
            }
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'moreTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'moreTab',
              });
            }}
          >
           <div>e</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}