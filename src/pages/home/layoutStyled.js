import styled from 'styled-components'

export const SearchWrap = styled.div `
position: relative

.search_bar {
  width: 100%;
  overflow: hidden;
  position: absolute;
  max-width: 10rem;
  top: 0;
  z-index: 10;
  border: 0;
  background: -webkit-linear-gradient(top,rgba(0,0,0,.4),transparent);

  .searchBox {
    width: 100%;

    .search_box {
      width: 100%;
      overflow: hidden;
      height: 100%;

      .search {
        width: 85%;
        float: left;
        padding-left: .26667rem;
        position: relative;

        .input {
          width: 100%;
          border-radius: .10667rem;
          height: .82667rem;
          margin: .2rem 0;
          border: 0;
          padding-left: .6rem;
          color: #666;
          font-size: .32rem;
          background: #fff url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png) .13333rem center no-repeat;
          background-size: .34667rem;
          overflow: hidden;
        }

        input[type=reset] {
          background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/reset_5513c70.png) no-repeat;
          background-size: .4rem;
          position: absolute;
          right: .26667rem;
          top: 35%;
          height: .4rem;
          width: .4rem;
          border: 0;
          color: transparent;
          display: none;
          z-index: 1;
          outline: 0;
        }
      }

      .me {
        display: block;
        float: right;
        width: 15%;
        padding: 0 .2rem;
        padding-top: .2rem;
        text-align: center;

        img {
          width: 70%;
        }
      }

      .cancel {
        display: none;
      }
    }
  }
}
`

export const Picbanwrap = styled.div`
.pic_banner {
  background: #fff;
  margin-top: .26667rem;
  border-bottom: 1px solid #e6e6e6;

  .zone li {
    width: 50%;
    float: left;
    border-bottom: 1px solid #f0f3f5;
    border-left: 1px solid #f0f3f5;
    padding: .06667rem .4rem;

    a {
      color: #444;

      .tit {
        width: 2.56rem;
        float: left;
        margin-top: .2rem;

        h2 {
          font-size: .4rem;
          color: #333;
          font-weight: 600;
        }

        p {
          font-size: .32rem;
          color: #666;
          width: 2.56rem;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      .pic {
        float: right;

        img {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
  }
}
`

export const Hotwrap = styled.div`
.hot {
  background: #f0f3f5;
  margin: .08rem;

  .block {
    text-align: center;
    padding: .2rem 0;
    width: 3.13333rem;
    float: left;
    background: #fff;
    margin: .06667rem;

    h2 {
      font-size: .37333rem;
      color: #333;
      font-weight: 400;
    }

    p.desc {
      font-size: .32rem;
      color: #666;
      margin: .13333rem 0;
      margin-bottom: .26667rem;
      width: 100%;
    }

    p.imgs {
      text-align: center;
      padding-bottom: 1.6rem;
      height: 0;

      img {
        width: 1.6rem;
      }
    }
  }
}
`

export const Hotactwrap = styled.div`

.hot-activity {
  background: #FFF;
  margin: .08rem 0 .14667rem;

  h3 {
    line-height: .4rem;
    padding: .26667rem .4rem;
    margin-bottom: .13333rem;
  }

  ul {
    padding: 0 .4rem;
    dispaly: flex;
    flex-wrap: wrap;

    li {
      float: left;
      width: 32.46%;
      margin-right: 1.3%;
      margin-bottom: .33333rem;

      a {
        dispaly: block;
        color: #444;

        .img {
          height: 1.78667rem;
          overflow: hidden;
          margin-bottom: .13333rem;

          img {
            width: 100%;
          }
        }

        .p1 {
          font-size: 12px;
          font-weight: 700;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: .4rem;
        }

        .p2 {
          color: #666;
          text-align: left;

          span {
            font-size: 12px;
            transform: scale(0.8333);
          }
        }
      }
    }

    li:nth-child(3n) {
      margin-right: 0;
    }
  }
}
`

