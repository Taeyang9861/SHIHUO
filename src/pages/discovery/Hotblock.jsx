import React, {Component} from 'react'

import { Carousel } from 'antd-mobile'

export default class Hotblock extends Component {
  render() {
    return (
      <Carousel
        slideWidth='131px'
        dots={false}
      >
        <div className="swiper-slide swiper-slide-active">
          <a href="http://m.shihuo.cn/activity/312.html#qk=rmqd&amp;order=">
            <div className="imgs">
              <img src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg" alt="" className="lazy"
                />
            </div>
            <div className="blackbg">
              <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
            </div>
          </a>
        </div>

        <div className="swiper-slide swiper-slide-next">
          <a href="https://www.shihuo.cn/article/detail/19231.html#qk=rmqd&amp;order=">
            <div className="imgs">
              <img src="http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg" alt="" className="lazy"
                />
            </div>
            <div className="blackbg">
              <p># 限时下单 全场返利 #</p>
            </div>
          </a>
        </div>

        <div className="swiper-slide">
          <a href="http://m.shihuo.cn/activity/322.html#qk=rmqd&amp;order=">
            <div className="imgs">
              <img src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png" alt="" className="lazy"
                />
            </div>
            <div className="blackbg">
              <p># 晒照赢新年康扣 #</p>
            </div>
          </a>
        </div>

        <div data-href="http://m.shihuo.cn/column/columnHome?key=activity_list" className="look-more">
          查看更多
        </div>
      </Carousel>
    )
  }
}