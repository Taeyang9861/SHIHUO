import styled from 'styled-components'

export const Morewwrap = styled.div`
.indexpage {
  padding-bottom: 1.26667rem;

  .banner_block {
    width: 100%;
    height: 4rem;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png) top no-repeat;
    background-size: 100% auto;
    font-family: Helvetica,sans-serif;

    .userface {
      width: 1.33333rem;
      height: 1.33333rem;
      margin-top: 1.86667rem;
      overflow: hidden;
      border-radius: 50%;
      margin-left: .66667rem;
      box-shadow: 0 0 30px rgba(255,255,255,.5);
      float: left;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .login {
      padding-left: .66667rem;
      width: 75%;
      float: left;
      margin-top: 2rem;
      font-size: 14px;
      color: #fff;

      a {
        color: #fff;
        font-size: 15px;
        margin-right: .26667rem;
      }

      .jb {
        margin-top: .13333rem;
        font-size: 12px;
      }
    }
  }

  .menu_list {
    padding: .2rem;
    background: #fff;
    margin-bottom: .26667rem;

    .tit {
      font-size: 14px;
      color: #333;
      background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png) left center repeat-x;
      background-size: .06667rem;

      span {
        background: #fff;
        padding: 0 10px;
      }
    }

    ul {
      display: flex;
      align-items: center;

      li {
        width: 25%;
        text-align: center;
        color: #333;
        font-size: 12px;
        margin: .26667rem 0;
        position: relative;

        a {
          display: block;
          color: #444;

          img {
            width: 1.2rem;
          }
        }
      }
    }
  }
}

`