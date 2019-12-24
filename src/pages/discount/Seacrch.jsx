import React, {Component} from 'react'

export default class Search extends Component {
  render() {
    return (
      <>
        <div className="searchBox">
          <form id="searchform" action="#">
            <div className="search">
              <input type="search" className="input" name="search" placeholder="搜索全网低价好券" />
            </div>
          </form>
        </div>

        <div className="yhq" style={{fontSize: '12px'}}>已收集&nbsp;<span>0</span>&nbsp;张优惠券
          <a className="zn fr" />
        </div>
      </>
    )
  }
}