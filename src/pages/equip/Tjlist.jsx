import React, {Component} from 'react'

import axios from 'axios'

export default class Tjlist extends Component {
  state= {
    tjList: []
  }

  async componentDidMount() {
    let result = await axios({
      method: 'post',
      url: '/zhuangbei/getHomeNews',
      data: {
        page: '1'
      },
      transformRequest: [
        function (data) {
           let ret = ''
           for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
           }
           ret = ret.substring(0, ret.lastIndexOf('&'));
           return ret
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    this.setState({
      tjList: result.data.data
    })
  }

  render() {
    return (
      <div className="tj-area">
        <div className="h2">最新推荐</div>
        <ul id="new-tag-list">
        {
          (this.state.tjList.length !== 0) && this.state.tjList.map((value, index) => {
            return (
              <li className="clearfix" key={index}>
                <a>
                  <div className="imgs">
                    <img
                      src={value.data.img} />
                  </div>
                  <div className="txt-area">
                    <div className="title">{value.data.title}</div>
                    <div className="txt">
                      <img style={{marginRight: '10px'}}
                        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-1_5297253.png" />{value.data.intro}
                      <img style={{marginRight: '10px'}}
                        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/quote_right_711acf3.png" />
                    </div>
                    <div className="price clearfix">
                    <div className="t1">{value.data.merchant} <s>¥{value.data.price}</s></div>
                      <div className="t2"><img
                          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png" />
                        {value.data.hits}
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}