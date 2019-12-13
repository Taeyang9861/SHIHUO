import React, { Component } from 'react'

import { Carousel } from 'antd-mobile';

class Headswipe extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://shihuo.hupucdn.com/def/20190111/42814a73fae40bc89474e12073d3ef071547178413.jpg', 'http://sh1.hoopchina.com.cn/images/icons/logo_radius.png', 'http://shihuo.hupucdn.com/def/20191028/bfb8c375e06ac175b91b004655fe73221572249491.jpg'],
      });
    }, 100);
  }
  render() {
    return (
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {this.state.data.map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={`${val}`}
              alt=""
              style={{ width: '37.5px', verticalAlign: 'top', height: '37.5px' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}

export default Headswipe