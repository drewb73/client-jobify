import React from 'react'
import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaCheck, FaPenFancy, FaRegNewspaper,FaBan } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const {stats} = useAppContext()
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bg: '#e0e8f9',
    },
    {
      title: 'jobs rejected',
      count: stats.rejected || 0,
      icon: <FaBan />,
      color: '#9c0202',
      bcg:  '#ffffff',
    },
    {
      title: 'offers accepted',
      count: stats.accepted || 0,
      icon: <FaCheck />,
      color: '#065535',
      bcg: '#ffffff',
    },
    {
      title: 'offers extended',
      count: stats.offer || 0,
      icon: <FaPenFancy />,
      color: '#93c47d',
      bcg: '#ffffff',
    },
    {
      title: 'Jobs applied to',
      count: stats.applied || 0,
      icon: <FaRegNewspaper />,
      color: '#8e7cc3',
      bcg: '#ffffff',
    },

  ]



  return (
   <Wrapper>
    {defaultStats.map((item, index) =>{
      return <StatItem key={index} {...item} />
    })}
   </Wrapper>
  )
}

export default StatsContainer