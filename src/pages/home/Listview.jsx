import React from 'react'

import { Tabs, WhiteSpace } from 'antd-mobile';

import Recommend from '../../components/home/Recommend'

const tabs = [
  { title: '推荐', sub: '1' },
  { title: '篮球', sub: '2' },
  { title: '跑步', sub: '3' },
  { title: '健身', sub: '4' },
  { title: '潮流', sub: '5' },
];

const Listview = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      tabBarActiveTextColor={'#FF4338'}
      tabBarUnderlineStyle={{ borderColor: '#FF4338', width: '.45333rem', textAlign: 'center', }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Recommend listtype=''></Recommend>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Recommend listtype='basketball'></Recommend>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Recommend listtype='running'></Recommend>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Recommend listtype='fitness'></Recommend>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Recommend listtype='freestyle'></Recommend>
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default Listview