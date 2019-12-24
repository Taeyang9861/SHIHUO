import styled from 'styled-components'

export const Swipewrap = styled.div`
.slider {
  overflow: hidden;
  max-height: 3.6rem
}
`

export const Blocklistwrap = styled.div`
.block_list {
  width: 100%;
  background: #fff;
  height: 70px;
  margin-bottom: .26667rem;

  .list {
    width: 25%;
    float: left;
    background-size: .05333rem .13333rem;
    text-align: center;
    padding-top: .26667rem;
    height: 1.88rem;
    font-size: 12px;
    color: #666;
  }

  .list:before {
    background-color: #FFF;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    content: "";
    display: block;
    margin: 0 auto .13333rem;
    width: .97333rem;
    height: .82667rem;
  }

  .list:nth-child(1):before {
    background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png);
  }

  .list:nth-child(2):before {
    background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png);
  }

  .list:nth-child(3):before {
    background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png);
  }

  .list:nth-child(4):before {
    background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png);
  }
}
`

export const Hotblockwrap = styled.div`
.hotBlock {
  width: 100%;
  overflow: hidden;
  background: #fff;
  padding-bottom: .4rem;
  margin-bottom: .2rem;
  border-bottom: 1px #ececec solid;

  .title {
    padding: .26667rem;
    text-align: left;
    font-size: 14px;
    color: #222;
  }
}
`

export const Listwrap = styled.div`
.jingxList {
  width: 375px;
  padding-left: .26667rem;
  padding-bottom: .53333rem;

  ul {
    li {
      border-bottom: 1px solid #e6e6e6;
      padding: .26667rem .26667rem .26667rem 0;

      .author {
        .face {
          width: .90667rem;
          height: .90667rem;
          float: left;
          border-radius: .66667rem;
          overflow: hidden;
          margin-right: .26667rem;
          color: #444;

          img {
            display: block;
            width: 100%;
          }
        }

        .nameM {
          .name {
            color: #444;
            font-size: 16px;
          }

          .time {
            color: #999;
            font-size: 11px;
          }
        }
      }

      .content {
        font-size: 15px;
        color: #222;
        margin-left: 1.17333rem;

        a {
          color: #444;
          text-decoration: none;

          .tit {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }

          .imgOne {
            margin: .26667rem 0;

            img {
              width: 311px !important;
            }
          }

          .tags {
            .like {
              background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png) left center no-repeat;
              padding-left: .58667rem;
              background-size: .45333rem auto;
              height: .45333rem;
              display: inline-block;
              color: #a4a4a4;
              margin-right: .26667rem;
              line-height: .45333rem;
            }

            .say {
              background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png) left center no-repeat;
              padding-left: .58667rem;
              background-size: .45333rem auto;
              line-height: .45333rem;
              height: .45333rem;
              color: #a4a4a4;
            }
          }
        }
      }
    }
  }
}
`

export const Hotwrap = styled.div`
.slider {
  padding: 0 .26667rem;
  height: 1.65333rem !important;
  overflow: hidden;

  .swiper-slide {
    text-align: center;
    padding-right: .08rem;

    a {
      display: block;
      position: relative;
      height: 100%;

      .imgs {
        width: 100%;
        overflow: hidden;
        position: relative;

        img {
          width: 100%
        }
      }

      .blackbg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,.2);

        p {
          width: 100%;
          padding: 0 .26667rem;
          font-size: .34667rem;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 10;
          color: #FFF;
          word-wrap: break-word;
        }
      }
    }
  }

  .look-more {
    width: 1.14667rem;
    padding: .13333rem .24rem 0;
    color: #999;
    text-align: center;
    display: block;
    flex-shrink: 0;
    font-size: 11px;
  }

  .look-more:after {
    content: "";
    display: block;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-arrow_7dcc7b2.png) no-repeat scroll center center transparent;
    width: .26667rem;
    height: .26667rem;
    margin: .06667rem auto 0;
  }
}
`