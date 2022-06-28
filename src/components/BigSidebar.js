import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import NavlLinks from './NavlLinks'
import Logo from './Logo'


const BigSidebar = () => {
const {showSidebar} = useAppContext()
  return (
    <Wrapper>
        <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
            <div className='content'>
                <header>
                    <Logo />
                </header>
                <NavlLinks />
            </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar