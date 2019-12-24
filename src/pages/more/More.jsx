import React, {Component} from 'react'

import { Morewwrap } from './Morestyle'

import Headswipe from '@/Headswipe'
import { Headswipewrap } from '@/Headswipewrap.js'

export default class More extends Component {
  render() {
    return (
      <>
        <Headswipewrap>
          <Headswipe></Headswipe>
        </Headswipewrap>
        <Morewwrap>
          <div className="mainBox  indexpage">
            <div className="banner_block">
              <div className="userface">
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" alt="" />
              </div>
              <div className="login"><a href="https://passport.shihuo.cn/m/2?from=m&amp;project=shihuo&amp;appid=10017">登录</a>
                <a href="//passport.shihuo.cn/m/2/register?from=m&amp;project=shihuo&amp;appid=10017">注册</a>
                <p className="jb">金币 0</p>
              </div>
            </div>
            <div className="menu_list">
              <div className="tit"><span>我的识货</span></div>
              <ul>
                <li><a href="http://m.shihuo.cn/user/myCollect"><img
                      src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt="" />
                    <p>我的收藏</p>
                  </a></li>
                <li><a href="http://m.shihuo.cn/shaiwu/myList"><img
                      src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt="" />
                    <p>我的晒物</p>
                  </a></li>
                <li><a href="http://m.shihuo.cn/user/my_wallet"><img
                      src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt="" />
                    <p>我的礼品</p>
                  </a></li>
              </ul>
            </div>
            <div className="menu_list">
              <div className="tit"><span>识货必备</span></div>
              <ul>
                <li><a href="http://m.shihuo.cn/recShop"><img
                      src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png" alt="" />
                    <p>推荐店铺</p>
                  </a></li>
                <li><a href="http://www.shihuo.cn/app/assets/xuanxie/xuanxie.html"><img
                      src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt="" />
                    <p>黑科技选鞋</p>
                  </a></li>
              </ul>
            </div>
          </div>
        </Morewwrap>
      </>
    )
  }
}