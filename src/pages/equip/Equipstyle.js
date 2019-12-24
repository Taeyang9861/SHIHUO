import styled from 'styled-components'

export const Equipwrap = styled.div`
.top_bar {
  width: 100%;
  z-index: 10;
  border: 0;
  height: auto;
  background: #f7f7f7;
  max-width: 10rem;

  .searchBox {
    width: 100%;
    display: flex;

    .search_box {

      overflow: hidden;
      height: 100%;

      .search {
        width: 8.8rem;

        padding-left: .26667rem;
        position: relative;

        .input {
          width: 8.53333rem;
          border-radius: .10667rem;
          margin: .2rem 0;
          height: .73333rem;
          line-height: .73333rem;
          border: 0;
          padding-left: .6rem;
          color: #666;
          font-size: .32rem;
          background: #ebebeb url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png) .13333rem center no-repeat;
          background-size: .34667rem;
          overflow: hidden;
        }
      }
    }

    .ico_list {

      height: 100%;
      width: 10%;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      display: flex;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.menu-area {
  background: #fff;

  ul {
    li {
      width: 33.33%;
      padding: .33333rem 0;
      float: left;

      a {
        display: block;
        text-align: center;
        color: #333;
        font-size: 14px;
        border-right: 1px solid #d4d4d4;
      }
    }

    li a:before {
      content: "";
      display: block;
      margin: 0 auto .2rem;
    }

    li:nth-child(1) a:before {
      margin-left: 40%;
      width: 1.14667rem;
      height: .58667rem;
      background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png) no-repeat center center transparent;
      background-size: contain;
    }

    li:nth-child(2) a:before {
      width: .58667rem;
      height: .58667rem;
      background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png) no-repeat center center transparent;
      background-size: contain;
    }

    li:nth-child(3) a:before {
      width: .56rem;
      height: .50667rem;
      background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png) no-repeat center center transparent;
      -webkit-background-size: contain;
      background-size: contain;
    }
  }

  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
  }

  .clearfix:after {
    clear: both;
  }
}

.banner-area {
  position: relative;
  height: 195px;

  .bg-img img {
    width: 100%;
    height: 195px;
  }

  .click {
    display: block;
    color: #fff;

    .bg-color {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 195px;
      background-color: #000;
      opacity: .5;
    }

    .ban-txt {
      position: absolute;
      left: 0;
      width: 100%;
      top: .53333rem;
      text-align: center;
      color: #fff;

      .h2 {
        font-size: 25px;
        text-shadow: 1px 1px 3px #666;

        s {
          font-weight: 700;
        }

        img {
          width: 22px;
          height: 22px;
          display: inline-block;
          margin: .06667rem 0 0 .13333rem;
        }
      }

      .txt {
        font-size: 14px;
        text-align: center;

         p {
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0 auto;
        }
      }

      .list {
        position: relative;
        z-index: 8;
      }

      .clearfix:before, .clearfix:after {
        display: table;
        content: "";
        line-height: 0;
      }

      .clearfix:after {
        clear: both;
      }

      .list .boxF {
        margin: 0 .06667rem;
        -webkit-transform: rotate(120deg);
        visibility: hidden;
        width: 60px;
        height: 80px;
        display: inline-block;
        overflow: hidden;

        .boxS {
          -webkit-transform: rotate(-60deg);
          width: 60px;
          height: 80px;
          display: inline-block;
          overflow: hidden;

          .boxT {
            background: no-repeat center center;
            background-size: 100%;
            background-color: #fff;
            -webkit-transform: rotate(-60deg);
            visibility: visible;
            width: 60px;
            height: 80px;
            display: inline-block;
            overflow: hidden;
          }
        }
      }


      .left {
        position: absolute;
        left: .53333rem;
        top: .4rem;

        img {
          width: 23.5px;
          height: 120px;
        }
      }

      .right {
        position: absolute;
        right: .53333rem;
        top: .4rem;

        img {
          width: 16.5px;
          height: 120px;
        }
      }
    }
  }
}

.tag-area .tag-list {
  background: #fff;
  display: flex;

  a {
    width: 100%;
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    box-align: center;
    border-bottom: 1px #ececec solid;
    border-right: 1px #ececec solid;
    padding: .33333rem 0;
    text-align: center;
    font-size: 14px;
    color: #444;

    img {
      width: 5px;
      vertical-align: middle;
      margin-left: .26667rem;
    }
  }
}

.tj-area {
  padding: .26667rem 0 0 .26667rem;
  background: #fff;

  .h2 {
    font-size: 16px;
  }

  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
  }

  .clearfix:after {
    clear: both;
  }

  ul li {
    padding: .26667rem 0;
    border-bottom: 1px #e6e6e6 solid;
    position: relative;

    a {
      display: block;
      color: #444;

      .imgs {
        float: left;
        text-align: center;
        width: 3.33333rem;

        img {
          max-width: 100%;
        }
      }

      .txt-area {
        padding: 0rem .2rem 0 .33333rem;
        margin-left: 3.46667rem;

        .title {
          font-size: .4rem;
          height: 1.13333rem;
          overflow: hidden;
          word-break: break-all;
          word-wrap: break-word;
        }

        .txt {
          font-size: 13px;
          margin-top: .33333rem;
          height: 40px;
          overflow: hidden;

          img {
            position: relative;
            margin-top: -2px;
            margin-right: 5px;
            width: 11px;
          }
        }

        .price {
          margin-top: .33333rem;

          .t1 {
            float: left;
            font-size: 13px;

            s {
              color: #FF4338;
              font-weight: 700;
            }
          }

          .t2 {
            float: right;
            font-size: 12px;

            img {
              vertical-align: middle;
              position: relative;
              margin: -2px .06667rem 0 0;
              width: 12.5px;
            }
          }
        }
      }
    }
  }
}
`