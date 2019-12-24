import React from 'react'

import { Tabs } from 'antd-mobile';

import { StickyContainer, Sticky } from 'react-sticky';

// import { Listitemwrap } from '@/home/listviewStyled'

// import Listelem from '@/Listelem'

import Dailylist from './Dailylist'

import { Listwrap } from './discoveryStyle'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  { title: '今日推荐', sub: '1' },
  { title: '篮球', sub: '2' },
  { title: '视频', sub: '3' },
  { title: '最新资讯', sub: '4' },
  { title: '潮流风向', sub: '5' },
  { title: '3c新奇特', sub: '6' },
  { title: '潮鞋志', sub: '7' },
  { title: '球鞋90秒', sub: '8' }
];

const Dailyrecomd = () => (

  <StickyContainer>
    <Tabs tabs={tabs}
      initialPage={0}
      tabBarActiveTextColor={'#FF4338'}
      tabBarUnderlineStyle={{ borderColor: '#FF4338' }}
      renderTabBar={renderTabBar}
      tabBarTextStyle={{ fontSize: '13px' }}
      swipeable={false}
      animated={false}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='283'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='347'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='281'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='270'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='318'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='273'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='285'></Dailylist>
        </Listwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listwrap>
          <Dailylist tagId='136'></Dailylist>
        </Listwrap>
      </div>
    </Tabs>
  </StickyContainer>
)

export default Dailyrecomd