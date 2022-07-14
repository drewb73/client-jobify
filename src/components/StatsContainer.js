import React from 'react'
import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
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
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#9c0202',
      bcg: '#e55959',
    },
    {
      title: 'offers accepted',
      count: stats.accepted || 0,
      icon: <FaBug />,
      color: '#065535',
      bcg: '#36ff20',
    },
    {
      title: 'offers extended',
      count: stats.offer || 0,
      icon: <FaBug />,
      color: '#93c47d',
      bcg: '#d9ead3',
    },
    {
      title: 'Jobs applied to',
      count: stats.applied || 0,
      icon: <FaBug />,
      color: '#8e7cc3',
      bcg: '#d9d2e9',
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