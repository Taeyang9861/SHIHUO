import React, {Component} from 'react'

import Headswipe from './Headswipe'
import Search from './Search'
import Swipe from './Swipe'
import Picbanner from './Picbanner'
import Hot from './Hot'
import Hotactive from './Hotactive'
import Listview from './Listview'
import { SearchWrap, Picbanwrap, Hotwrap, Hotactwrap } from './layoutStyled'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Headswipe></Headswipe>
        <SearchWrap>
          <Search></Search>
        </SearchWrap>
        <Swipe></Swipe>
        <Picbanwrap>
          <Picbanner></Picbanner>
        </Picbanwrap>
        <Hotwrap>
          <Hot></Hot>
        </Hotwrap>
        <Hotactwrap>
          <Hotactive> </Hotactive>
        </Hotactwrap>
        <Listview></Listview>
      </div>
    )
  }
}