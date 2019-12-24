import React, {Component} from 'react'

import { get } from 'utils/http'


export default class Dailylist extends Component {
  state= {
    itemList: []
  }

  async componentDidMount() {
    let result = await get({
      url: `/find/mobileList?tag_id=${this.props.tagId}&param_str=`
    })

    this.setState({
      itemList: result.data
    })
  }

  render() {
    return (
      <div className="jingxList">
        <ul id="jingxList">
          {
            (this.state.itemList.length !== 0) && this.state.itemList.map((value, index) => {
              return (
                <li key={index}>
                  <div className="author">
                    <a className="face">
                      <img src={value.data.avatar} alt="" />
                    </a>
                    <div className="nameM">
                      <p className="name">{value.data.author_name}</p>
                      <p className="time">{value.data.date}</p>
                    </div>
                  </div>
                  <div className="content">
                    <a href="http://m.shihuo.cn/article/detail/43830.html#qk=jxtj">
                      <div className="tit">{value.data.title}</div>
                      <p className="imgOne">
                        <img
                          src={value.data.img}
                          alt=""
                          className="lazy"
                        />
                      </p>
                      <div className="tags">
                        <span className="like">{value.data.praise}</span>
                        <span className="say">{value.data.reply_count}</span>
                      </div>
                    </a>
                  </div>
                </li>
              )
            })
          }

        </ul>
      </div>
    )
  }
}