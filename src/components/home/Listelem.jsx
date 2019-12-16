import React, { Component } from 'react'

import { get } from 'utils/http'

export default class Listelem extends Component {
  state = {
    itemList: [],
    listtype: '',
    r: ''
  }

  async componentDidMount() {
    // console.log(this.props.channel_type)

    // this.setState({
    //   listtype: this.props.listtype
    // })

    // console.log(this.state.listtype)

    if(this.props.r !== '999'){
      let result = await get({
        url: `/homefis/getNews?pageSize=20&param_str=&type=${this.props.listtype}&channel_type=${this.props.channel_type}`
      })
      this.setState({
        itemList: result.data
      })
    }
    else {
      let result = await get({
        url: '/youhui/list?r=1&page=1&page_size=30&publish_date='
      })
      this.setState({
        itemList: result.data
      })
    }



    // console.log(this.state.itemList)

  }

  render() {
    return (
      <div className="list-view">
        <ul id="shihuo-news">
          {
            (this.state.itemList.length !== 0) && (this.state.itemList.map((value, index) => {
              return (
                <li key={index}>
                  <a className="link-a clearfix">
                    <div className="imgs">
                      <span className="get_imgs">
                        <img
                          src={value.data.img}
                          className="lazy"
                        />
                      </span>
                    </div>

                    <div className="details_box">
                      {
                        value.data.title
                        &&
                        <h2>{value.data.title}</h2>
                      }

                      {
                        value.data.subtitle
                        &&
                        <p className="subtitle">{value.data.subtitle}</p>
                      }

                      {
                        value.data.avatar
                        &&
                        <div className="desc face">
                          <span>
                            <img className="lazy" src={value.data.avatar} />
                          </span>
                          {value.data.author_name}
                        </div>
                      }

                      {
                        (value.data.intro && !value.data.avatar)
                        &&
                        <p className="desc single3">
                          <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt="" />
                          {value.data.intro}
                          <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" alt="" />
                        </p>
                      }

                      {
                        value.data.merchant
                        &&
                        <div className="from">
                          {
                            value.data.column_name
                            &&
                            <div className="column_name">
                              <span>{value.data.column_name}</span>
                              &nbsp;
                              {value.data.merchant}
                            </div>
                          }

                          {
                            value.data.price
                            &&
                            <div className="price">{value.data.merchant}&nbsp;<span>¥{value.data.price}</span></div>
                          }

                          {
                            value.data.hits
                            &&
                            <div className="guanzhu">
                              <img src="http://sh1.hoopchina.com.cn/images/trademobile/look.png" alt="" />
                              {value.data.hits}
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