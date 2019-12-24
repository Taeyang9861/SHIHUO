import React, {Component} from 'react'

import Headswipe from '@/Headswipe'
import { Headswipewrap } from '@/Headswipewrap.js'
import Search from './Seacrch'
import Temai from './Temai'
import Everydayjian from './Everydayjian'

import { Searchwrap, Temaiwrap, Everydayjianwrap } from './discountStyle'

export default class Discount extends Component {
  render() {
    return (
      <>
        <Headswipewrap>
          <Headswipe></Headswipe>
        </Headswipewrap>
        <Searchwrap>
          <Search></Search>
        </Searchwrap>
        <Temaiwrap>
          <Temai></Temai>
        </Temaiwrap>
        <Everydayjianwrap>
          <Everydayjian></Everydayjian>
        </Everydayjianwrap>
      </>
    )
  }
}