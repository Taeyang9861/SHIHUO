import styled from 'styled-components'

export const Searchwrap = styled.div `
.searchBox {
  width: 100%;
  left: 0;
  background-color: #f0f3f5!important;
  padding-left: .4rem;
  padding-right: .4rem;

  form .search {
    background: #fff url(http://sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) .2rem center no-repeat;
    background-size: .4rem;
    color: #999;
    border-radius: .13333rem;
    overflow: hidden;
    font-size: 1.1em;
    border: 0 none;

    .input {
      padding: 0 10% 0 9%;
      width: 100%;
      border: 0;
      background: 0 0;
      color: #666;
      font-size: 0.55em;
      outline: 0;
      text-align: left;
      float: left;
      box-sizing: border-box;
    }

    .input[type=search] {
      height: 2.2em;
    }
  }
}
.yhq {
  background-color: #f0f3f5;
  padding: .34667rem .4rem;
  padding-top: .1rem;

  span {
    font-size: 15px;
    font-weight: bolder;
  }

  .zn {
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/sqzn_2e60ac8.png) no-repeat;
    background-size: 2rem auto;
    width: 2rem;
    height: .56rem;
  }
  .fr {
    float: right;
  }

  a {
    color: #444;
    text-decoration: none;
  }
}
`

export const Temaiwrap = styled.div `
.shihuo1111-temai {
  background-color: #fff;
  padding: .4rem;

  .tit-block {
    b {
    font-size: 14px;
    color: #333;
    vertical-align: middle;
  }

    .fr {
      vertical-align: middle;
      float: right;

      a {
        color: #999;
        font-size: 12px;
        padding-left: .2rem;
        vertical-align: middle;

        img {
          width: .14667rem;
          vertical-align: middle;
        }
      }
    }
  }

  .entrance-list {
    margin-top: .33333rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    .entrance-item {
      width: 1.30667rem;
      height: 1.84rem;

      a {
        color: #444;
        text-decoration: none;

        .item-img {
          width: 1.28rem;
          height: 1.28rem;
          border-radius: .64rem;
          border: .01333rem solid #eee;
          display: block;
        }

        .item-tit {
          font-size: 13px;
          text-align: center;
          color: #333;
        }
      }
    }
  }

  .brand-list {
    margin-top: .2rem;

    .brand-item {
      overflow: hidden;
      position: relative;
      float: left;
      width: 2.93333rem;
      height: 2.93333rem;
      margin-right: .2rem;
      margin-top: .2rem;

      a {
        color: #444;
        text-decoration: none;

        .brand-bg {
          top: 0;
          left: 50%;
          margin-left: -1.46667rem;
          max-height: 100%;
          border: 0;
          outline: 0;
          position: absolute;
        }

        .brand-logo {
          display: block;
          width: .93333rem;
          height: .93333rem;
          border-radius: .46667rem;
          left: 50%;
          margin-left: -.46667rem;
          top: .58667rem;
          position: absolute;
        }

        .brand-tit {
          height: .4rem;
          line-height: .4rem;
          font-size: 14px;
          color: #fff;
          width: 2.66667rem;
          text-align: center;
          display: -webkit-box!important;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          top: 1.73333rem;
          left: 50%;
          margin-left: -1.33333rem;
          position: absolute;
        }

        .brand-subtit {
          width: 2.26667rem;
          top: 2.26667rem;
          left: 50%;
          margin-left: -1.13333rem;
          background-color: #FF4338;
          line-height: .4rem;
          color: #fff;
          text-align: center;
          font-size: 11px;
          height: .4rem;
          border-radius: .2rem;
          display: -webkit-box!important;
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          position: absolute;
        }
      }
    }
  }
}
.shihuo1111-temai .brand-list .brand-item:nth-of-type(3n) {
  margin-right: 0;
}
`

export const Everydayjianwrap = styled.div `
.bg-color-all {
  background-color: #fff;

  .advert-radius {
    padding: 0 .4rem;
    margin-bottom: .4rem;

    .advert {
      width: 100%;
      display: block;
      overflow: hidden;
      border-radius: 7rem;
      color: #444;
      text-decoration: none;

      img {
        width: 100%;
        display: block;
      }
    }
  }

  .am-tabs {
    &:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0
        width: 1.52rem;
        height: 100%;
        background: rgba(255,255,255,.8) url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png) no-repeat;
        background-size: 100% auto;
        z-index: 1;
      }

    .am-tabs-tab-bar-wrap {
      width: 80% !important
    }
  }
}
`