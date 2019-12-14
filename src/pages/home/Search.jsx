import React, {Component} from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="search_bar">
        <form id="searchBox" method="get" className="searchBox">
          <div className="search_box">
            <div className="search">
              <input type="text" className="input" name="keywords" placeholder="搜索商品，品牌" />
              <input type="reset" className="sh_searchClear" title="重置搜索词" style={{display: 'none'}} />
            </div>
            <a href="//m.shihuo.cn/user#qk=t_gr" className="me">
              <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png" alt="" />
            </a>
            {/* <a href="javascript:void(0);" className="cancel">取消</a> */}
          </div>
        </form>
      </div>
    )
  }
}