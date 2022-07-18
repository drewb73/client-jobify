import React from 'react'
import { useAppContext } from '../context/appContext'
import {HiChevronDoubleLeft, HiChevronDoubleRight} from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'

const PageBtnContainer = () => {
    const {numOfPages, page} = useAppContext

    const prevPage = () => {
        console.log('prev page')
    }

    const nextPage = () => {
        console.log('next page')
    }



  return (
    <div>PageBtnContainer</div>
  )
}

export default PageBtnContainer