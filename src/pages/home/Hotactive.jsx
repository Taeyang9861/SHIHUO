import React, { Component } from 'react'

export default class Hotactive extends Component {
  render() {
    return (
      <section className="hot-activity clearfix">
        <h3>热门活动</h3>
        <ul>
          <li>
            <a href="http://www.shihuo.cn/app/assets/youhui/1.0.2/brandSale.html">
              <div className="img">
                <img src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg" alt="" />
              </div>
              <p className="p1">skullcandy骷髅头耳机</p>
              <p className="p2"><span>券后低至89元起</span></p>
            </a>
          </li>
          <li>
            <a href="http://www.shihuo.cn/article/detail/18871.html">
              <div className="img">
                <img src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg" alt="" />
              </div>
              <p className="p1">花鸟市场行</p>
              <p className="p2"><span>今天穿这样</span></p>
            </a>
          </li>
          <li>
            <a href="http://t.shihuo.cn/m/538.html">
              <div className="img">
                <img src="http://shihuo.hupucdn.com/appZone/201812/0411/965ca32793c9a42a11c0de32465d9a64.jpg" alt="" />
              </div>
              <p className="p1">独家折扣专场</p>
              <p className="p2"><span>买到就是赚到！</span></p>
            </a>
          </li>
          <li>
            <a href="http://m.shihuo.cn/activity/239.html">
              <div className="img">
                <img src="http://shihuo.hupucdn.com/appZone/201804/1310/87609edab6d859bb211b0243418109b5.jpg" alt="" />
              </div>
              <p className="p1">#什么跑鞋值得买#</p>
              <p className="p2"><span>晒晒你最爱的跑鞋</span></p>
            </a>
          </li>
          <li>
            <a href="http://www.shihuo.cn/article/detail/19901.html">
              <div className="img">
                <img src="http://shihuo.hupucdn.com/appZone/201811/1214/2720301b13ee5c2b0003f78125b698ea.jpg" alt="" />
              </div>
              <p className="p1">1000块包全身</p>
              <p className="p2"><span>不说虚话</span></p>
            </a>
          </li>
          <li>
            <a href="http://www.shihuo.cn/article/detail/20620.html">
              <div className="img">
                <img src="http://shihuo.hupucdn.com/appZone/201805/1415/b2ab22bb8987165ad1681520c9bbcf9c.jpg" alt="" />
              </div>
              <p className="p1">好物推荐</p>
              <p className="p2"><span>为您推荐潮酷好物</span></p>
            </a>
          </li>
        </ul>
      </section>
    )
  }
}