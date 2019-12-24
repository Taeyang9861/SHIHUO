import React, {Component} from 'react'

import { Swipewrap, Blocklistwrap, Hotblockwrap, Hotwrap } from './discoveryStyle'

import Swipe from './Swipe'
import Dailyrecomd from './Dailyrecomd'
import Hotblock from './Hotblock'
import Headswipe from '@/Headswipe'
import { Headswipewrap } from '@/Headswipewrap.js'

export default class Discovery extends Component {
  render() {
    return (
      <>
        <Headswipewrap>
          <Headswipe></Headswipe>
        </Headswipewrap>
        <Swipewrap>
          <Swipe></Swipe>
        </Swipewrap>
        <Blocklistwrap>
          <div className="block_list clearfix">
            <a href="http://m.shihuo.cn/zhongce/newIndex#qk=qdhd" className="list">
              众测</a>
            <a href="http://m.shihuo.cn/column/columnHome?key=column_list_about&amp;val=6,280,137,135,285,13,238,5,8#qk=sw"
              className="list">
              栏目</a>
            <a href="http://m.shihuo.cn/column/columnHome?key=collect_article&amp;val=sort_new#qk=zc" className="list">
              最新</a>
            <a href="http://m.shihuo.cn/column/columnHome?key=collect_article&amp;val=sort_hot#qk=zc" className="list">
              最热</a>
          </div>
        </Blocklistwrap>
        <Hotblockwrap>
          <div className="hotBlock">
            <div className="title">热门话题</div>
            <Hotwrap>
              <Hotblock></Hotblock>
            </Hotwrap>
          </div>
        </Hotblockwrap>
        <Dailyrecomd></Dailyrecomd>
      </>
    )
  }
}