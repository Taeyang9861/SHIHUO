import React, { Component } from 'react'

import { Carousel } from 'antd-mobile';

class Headswipe extends Component {
  render() {
    return (
      <div style={{position: 'relative', backgroundColor: '#000'}}>
        <Carousel
          autoplay
          infinite
          dotStyle={{
            width: '10px',
            height: '2px',
            float: 'left',
            margin: '0 3px',
            borderRadius: '3px',
            backgroundColor: '#5e5e5e',
            opacity: '1'}}
            dotActiveStyle={{width: '10px',
            height: '2px',
            float: 'left',
            margin: '0 3px',
            borderRadius: '3px',
            backgroundColor: '#FF4338',
            opacity: '1'}}
        >
          <div className="download-info-solgen">
            <div className="img">
              <img src="http://sh1.hoopchina.com.cn/images/icons/logo_radius.png" alt="" />
            </div>
            <div className="download-solgen-info">
              <p>识货APP&nbsp;⋅&nbsp;全世界的运动好货</p>
              <p>获取运动装备最低价</p>
            </div>
          </div>

          <div className="download-info-product product">
            <div className="img">
              <img src="http://shihuo.hupucdn.com/def/20190109/5f88862c6fbf082ecfc5f717b9402f041546996723.jpg" alt="" />
            </div>
            <div className="download-info-product product-info">
              <p>adidas Pure Boost RBL</p>
              <p>¥299<span>2.5折</span><span>¥1199</span></p>
            </div>
          </div>

          <div className="download-info-product product">
            <div className="img">
              <img src="http://shihuo.hupucdn.com/trade/reposition/2018-08-10/fab2f1380c8692c30eeb67aec72e10cc.png" alt="" />
            </div>
            <div className="download-info-product product-info">
              <p>adidas D Lillard Brookfield</p>
              <p>¥239<span>3.3折</span><span>¥729</span></p>
            </div>
          </div>

          <div className="download-info-product product">
            <div className="img">
              <img src="http://shihuo.hupucdn.com/def/20190930/1b5234942f2174139015b7e49606f99d1569833261.jpg" alt="" />
            </div>
            <div className="download-info-product product-info">
              <p>Converse Chuck Taylor All Star</p>
              <p>¥279<span>6.4折</span><span>¥439</span></p>
            </div>
          </div>

        </Carousel>

        <a className="js-app-btn download-btn">
        打开</a>

      </div>
    );
  }
}

export default Headswipe