import React, {Component} from 'react'

import { Equipwrap } from './Equipstyle'

import Headswipe from '@/Headswipe'
import { Headswipewrap } from '@/Headswipewrap.js'

import TjList from './Tjlist'

export default class Equip extends Component {
  render() {
    return (
      <>
        <Headswipewrap>
          <Headswipe></Headswipe>
        </Headswipewrap>
        <Equipwrap>
          <div className="top_bar">
            <form action="//m.shihuo.cn/search/searchResult/goods" id="searchBox" method="get" className="searchBox">
              <div className="search_box" style={{width: '90%'}}>
                <div className="search">
                  <input type="text" className="input" name="keywords" placeholder="搜索全网低价好券" id="searchVal" />
                </div>
              </div>
              <div className="ico_list">
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png" />
              </div>
            </form>
          </div>

          <div className="menu-area">
            <ul className="clearfix">
              <li><a href="/zhuangbei/sales_ranking#qk=volumnrank">热销排行</a></li>
              <li><a href="/zhuangbei/decline_ranking#qk=pricerank">好价精选</a></li>
              <li><a href="/zhuangbei/season_newpro#qk=newrank">当季新款</a></li>
            </ul>
          </div>

          <div className="banner-area">
            <div className="bg-img">
              <img
                src="http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1"
                className="bg-loding-img" />
            </div>
            <a className="click" href="http://m.shihuo.cn/basketball">
              <div className="bg-color"></div>
              <div className="ban-txt">
                <div className="h2"><s>篮球</s>BASKETBALL
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" />
                </div>
                <div className="txt">
                  <p></p>
                  <p>匹克闪现评测</p>
                </div>
                <div className="list clearfix" style={{marginTop:'0'}}>
                </div>
                <div className="left">
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
                </div>
                <div className="right"><img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
                </div>
              </div>
            </a>
          </div>

          <div className="tag-area">
            <div className="tag-list">
              <a>篮球鞋</a>
              <a>篮球服饰</a>
              <a>篮球配件</a>
              <a>篮球<img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
            <div className="tag-list">
              <a>Nike</a>
              <a>adidas</a>
              <a>Jordan</a>
              <a>全部<img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
          </div>

          <div className="bg-area" style={{backgroundColor: '#f0f3f5',height: '.26667rem'}}></div>

          <div className="banner-area">
            <div className="bg-img">
              <img
                src="http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1"
                className="bg-loding-img" />
            </div>
            <a className="click" href="http://m.shihuo.cn/running">
              <div className="bg-color"></div>
              <div className="ban-txt">
                <div className="h2">
                  <s>跑步</s>RUNNING
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" />
                </div>
                <div className="txt">
                  <p></p>
                  <p>户外跑鞋选购</p>
                </div>
                <div className="list clearfix">
                </div>
                <div className="left">
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
                </div>
                <div className="right">
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
                </div>
              </div>
            </a>
          </div>

          <div className="tag-area">
            <div className="tag-list">
              <a>跑步鞋</a>
              <a>跑步服饰</a>
              <a>跑步配件</a>
              <a>运动补给
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
            <div className="tag-list">
              <a>adidas</a>
              <a>asics</a>
              <a>New
                Balance</a>
              <a>全部
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
          </div>

          <div className="bg-area" style={{backgroundColor: '#f0f3f5',height: '.26667rem'}}></div>

          <div className="banner-area">
            <div className="bg-img">
              <img
                src="http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1"
                className="bg-loding-img" />
            </div>
            <a className="click">
              <div className="bg-color"></div>
              <div className="ban-txt">
                <div className="h2"><s>潮流</s>CASUAL
                <img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" />
                </div>
                <div className="txt">
                  <p>radium 格子衬衫 等8款超低价</p>
                  <p>年度鞋款回顾</p>
                </div>
                <div className="list clearfix">
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI0MDI3NTY5OTQvVEIyb1J3dGpZQm5wdUZqU1pGR1hYWDUxcFhhXyEhMjQwMjc1Njk5NC5qcGc?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kyLzI1NTA1OTI4MDYvVEIybmJKRHJoeG1wdUZqU1pGTlhYWHJSWFhhXyEhMjU1MDU5MjgwNi5qcGc?imageView2/1/w/100/h/100)'}} />
                    </div>
                  </div>
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzL1RCMVVoVUtSVlhYWFhhTVhwWFhYWFhYWFhYWF8hITItaXRlbV9waWMucG5n?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI0MDI3NTY5OTQvVEIyX3lMSmVSMGxwdUZqU3N6ZFhYY2R4RlhhXyEhMjQwMjc1Njk5NC5qcGc?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left">
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" />
              </div>
              <div className="right">
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" />
              </div>
            </a>
          </div>

          <div className="tag-area">
            <div className="tag-list">
              <a>鞋类</a>
              <a>服装</a>
              <a>配饰</a>
              <a>耳机
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
            <div className="tag-list">
              <a>Converse</a>
              <a>CASIO</a>
              <a>Vans</a>
              <a>全部
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
          </div>

          <div className="bg-area" style={{backgroundColor: '#f0f3f5',height: '.26667rem'}}></div>

          <div className="banner-area">
            <div className="bg-img"><img
                src="http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1"
                className="bg-loding-img" />
            </div>
            <a className="click" href="http://m.shihuo.cn/fitness?newsId=542448">
              <div className="bg-color"></div>
              <div className="ban-txt">
                <div className="h2"><s>健身</s>FITNESS<img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png" /></div>
                <div className="txt">
                  <p>Landcase 暗黑系列大容量镭射双肩包 Z-301, adidas 运动短袖T恤 DN7389, adidas 运动短袖T恤 DN7389, Puma/彪马 跑步短袖T恤 853131</p>
                  <p>战斗绳狂塑</p>
                </div>
                <div className="list clearfix">
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kxLzMwMzg5Nzg5NzUvVEIyTGQ2T2NlVWt5S0pqU3NwaFhYYmRhVlhhXyEhMzAzODk3ODk3NS5qcGc?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE5MDQvMTQxMy85ZDgzMzUzNDA5YTRlYmIyZjJhZGFiMzNiYjIzOGFiMC5wbmc?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE5MDQvMTMxMi8zZjU0M2U0YmYyNDc4NThmZmRkYmIwNDQxMzBmMmNmNS5wbmc?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="boxF">
                    <div className="boxS">
                      <div className="boxT bg-loding-img-s"
                        style={{backgroundImage: 'url(http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE5MDQvMTMxMS9lMDU5Y2JmMjU4NjhiZWYyMWFjOGZhNTAzMGIxMmU3Ny5qcGc?imageView2/1/w/100/h/100)'}}>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left"><img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png" /></div>
                <div className="right"><img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png" /></div>
              </div>
            </a>
          </div>

          <div className="tag-area">
            <div className="tag-list">
              <a>健身装备</a>
              <a>健身用品</a>
              <a>营养补剂</a>
              <a>全部类目
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png" /></a>
            </div>
          </div>

          <div className="bg-area" style={{backgroundColor: '#f0f3f5',height: '.26667rem'}}></div>

          <TjList></TjList>
        </Equipwrap>
      </>
    )
  }
}