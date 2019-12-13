import styled from 'styled-components'

export const Listitemwrap = styled.div`
.list-view {
  background: #fff;
  padding-top: .26667rem;
  padding-left: .26667rem;
  width: 100%;
  overflow: hidden;

  ul>li>a {
    padding: .26667rem;
    padding-left: 0;
    border-bottom: 1px solid #e6e6e6;
    display: flex;


    .imgs {
      width: 30%;
      float: left;
      position: relative;

      .get_imgs {
        width: 100%;
        display: block;

        img {
          width: 100%
        }
      }
    }

    .details_box {
      width: 66%;
      position: relative;
      margin-left: .26667rem;
      height: 3rem;
      display: flex;
      -webkit-box-orient: vertical;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;

      h2 {
        font-size: 14px;
        color: #333;
        font-weight: 400;
        max-height: 1.12rem;
        overflow: hidden;
        word-break: break-all;
        line-height: .56rem;
      }

      .subtitle {
        bottom: .86667rem;
        left: 0;
        font-size: .4rem;
        color: #FF4338;
        line-height: .53333rem;
      }

      .desc .face {
        bottom: 1.06667rem;

        span {
          display: inline-block;
          border-radius: .26667rem;
          width: .53333rem;
          height: .53333rem;
          overflow: hidden;
          text-align: center;
          vertical-align: middle;
          margin-right: 10px;

          img {
            width: 100%;
            display: block;
            margin: 0;
          }
        }
      }

      .desc {
        font-size: .34667rem;
        color: #666;

        img {
          width: .24rem;
          display: inline-block;
          margin: 0 .13333rem;
        }
      }

      .from {
        font-size: .34667rem;
        color: #a4a4a4;
        width: 100%;
        bottom: .06667rem;
        left: 0;

        .column_name {
          float: left;

          span {
            color: #999;
            font-size: .26667rem;
            border: 1px solid #a8a8a8;
            border-radius: .08rem;
            padding: 0 .13333rem;
            display: inline-block;
            max-width: 3rem;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: .13333rem;
          }
        }

        .price {
          float: left;
          color: #999;
          font-size: .37333rem;

          span {
            color: #FF4338;
          }
        }

        .guanzhu {
          float: right;
          text-align: left;

          img {
            width: .33333rem;
            vertical-align: middle;
            margin-top: -5px;
            margin-right: 10px;
          }
        }

      }
    }
  }
}
`