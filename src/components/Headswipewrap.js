import styled from 'styled-components'

export const Headswipewrap = styled.div`
.download-btn {
  position: absolute;
  width: 50px;
  height: 32px;
  line-height: 32px;
  color: #FFF;
  background-color: #FF4338;
  font-size: 13px;
  text-align: center;
  border-radius: 3px;
  right: 20px;
  top: 7px;
  z-index: 99;
}

.download-info-solgen {
  padding: 0 2.13333rem 0 .26667rem;
  height: 1.2rem;
  color: #fff;

  .img {
    overflow: hidden;
    float: left;
    width: .93333rem;
    height: 1.2rem;
    padding-top: .16rem;

    img {
      width: 100%
      border-radius: .08rem;
    }
  }

  .download-solgen-info {
    margin-left: .26667rem;
    padding: .16rem 0;
    height: 1.2rem;
    line-height: .45333rem;
    float: left;
    max-width: 80%;

    p:first-child {
      font-size: 14px;
      letter-spacing: .02667rem;
    }

    p:last-child {
      font-size: 11px;
      letter-spacing: .18667rem;
    }
  }
}

.download-info-product {
  padding: 0 2.13333rem 0 .26667rem;
  height: 1.2rem;
  font-size: 12px;

  .img {
    overflow: hidden;
    float: left;
    width: .93333rem;
    height: 1.2rem;
    padding-top: .16rem;

    img {
      width: 100%
      border-radius: .08rem;
    }
  }

  .product-info {
    margin-left: .26667rem;
    padding: .13333rem 0;
    height: 1.2rem;
    line-height: .45333rem;
    float: left;
    max-width: 70%;

    p:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%
      color: #fff !important;
    }

    p:last-child {
      color: #FF4338;

       span:first-child {
        padding: 0 .08rem;
        line-height: .4rem;
        margin: 0 .10667rem;
        border-radius: .08rem;
        background-color: #FF4338;
        color: #fff;
      }

      span:last-child {
        text-decoration: line-through;
        color: #5e5e5e;
      }
    }
  }
}
`