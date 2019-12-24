import React, { Component } from 'react'

import { get } from 'utils/http'

export default class Listelem extends Component {
  state = {
    youhuiItemList: []
  }

  async componentDidMount() {
    let result = await get({
      url: `/youhui/list?r=${this.props.r}&page=1&page_size=30&publish_date=`
    })
    this.setState({
      youhuiItemList: result.data
    })

  }

  render() {
    return (
      <div className="list-view">
        <ul id="shihuo-news">
          {
            (this.state.youhuiItemList.length !== 0) && (this.state.youhuiItemList.map((value, index) => {
              return (
                <li key={index}>
                  <a className="link-a clearfix">
                    <div className="imgs">
                      <span className="get_imgs">
                        <img
                          src={value.img}
                          className="lazy"
                        />
                      </span>
                    </div>

                    <div className="details_box">
                      {
                        value.title
                        &&
                        <h2>{value.title}</h2>
                      }

                      {
                        value.subtitle
                        &&
                        <p className="subtitle">{value.subtitle}</p>
                      }

                      {
                        value.avatar
                        &&
                        <div className="desc face">
                          <span>
                            <img className="lazy" src={value.avatar} />
                          </span>
                          {value.author_name}
                        </div>
                      }

                      {
                        (value.intro && !value.avatar)
                        &&
                        <p className="desc single3">
                          <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt="" />
                          {value.intro}
                          <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" alt="" />
                        </p>
                      }

                      {
                        value.merchant
                        &&
                        <div className="from">
                          {
                            value.column_name
                            &&
                            <div className="column_name">
                              <span>{value.column_name}</span>
                              &nbsp;
                              {value.merchant}
                            </div>
                          }

                          {
                            value.price
                            &&
                            <div className="price">{value.merchant}&nbsp;<span>¥{value.price}</span></div>
                          }

                          {
                            value.hits
                            &&
                            <div className="guanzhu">
                              <img src="http://sh1.hoopchina.com.cn/images/trademobile/look.png" alt="" />
                              {value.hits}
                            </div>
                          }

                        </div>
                      }

                    </div>
                  </a>
                </li>
              )
            }))
          }
        </ul>
      </div>
    )
  }
}