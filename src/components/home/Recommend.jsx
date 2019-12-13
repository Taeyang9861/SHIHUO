import React from 'react'
import { Tabs } from 'antd-mobile';

import Listelem from './Listelem'

import { Listitemwrap } from './listviewStyled'


const tabs = [
  { title: '全部', sub: '1' },
  { title: '单品推荐', sub: '2' },
  { title: '原创精选', sub: '3' },
  { title: '用户晒物', sub: '4' },
];

const Recommend = (props) => (
    <Tabs tabs={tabs}
      initialPage={0}
      tabBarUnderlineStyle={{border: 'none'}}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listitemwrap>
          <Listelem listtype={props.listtype} channel_type=''></Listelem>
        </Listitemwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listitemwrap>
          <Listelem listtype={props.listtype} channel_type='11'></Listelem>
        </Listitemwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listitemwrap>
          <Listelem listtype={props.listtype} channel_type='12'></Listelem>
        </Listitemwrap>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <Listitemwrap>
          <Listelem listtype={props.listtype} channel_type='7'></Listelem>
        </Listitemwrap>
      </div>
    </Tabs>
);

export default Recommend