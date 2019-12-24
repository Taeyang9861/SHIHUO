import React from 'react'

import { Tabs } from 'antd-mobile';

import { StickyContainer, Sticky } from 'react-sticky';

import { Listitemwrap } from '@/home/listviewStyled'

import Listelem from '@/Listelem'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
  { title: '精选', sub: '1' },
  { title: '鞋类', sub: '2' },
  { title: '服饰', sub: '3' },
  { title: '数码', sub: '4' },
  { title: '兴趣', sub: '5' }
];

const Everydayjian = () => (
  <div className="bg-color-all">
    <div className="advert-radius">
      <a className="advert">
        <img src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png" alt="每日荐" />
      </a>
    </div>

    <StickyContainer>
      <Tabs tabs={tabs}
        initialPage={0}
        tabBarActiveTextColor={'#FF4338'}
        tabBarUnderlineStyle={{ borderColor: '#FF4338' }}
        renderTabBar={renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Listitemwrap>
            <Listelem r='999'></Listelem>
          </Listitemwrap>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Listitemwrap>
            <Listelem r='1'></Listelem>
          </Listitemwrap>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Listitemwrap>
            <Listelem r='2'></Listelem>
          </Listitemwrap>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Listitemwrap>
            <Listelem r='3'></Listelem>
          </Listitemwrap>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          <Listitemwrap>
            <Listelem r='4'></Listelem>
          </Listitemwrap>
        </div>
      </Tabs>
    </StickyContainer>
  </div>
)

export default Everydayjian