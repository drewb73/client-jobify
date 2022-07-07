import React from 'react'
import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'

const Job = ({company, createdAt}) => {
    let date = moment(createdAt)
    date = date.format('MMM Do, YYYY')
  return (
    <div>
        <h5>{company}</h5>
        <h5>{date}</h5>
    </div>
  )
}

export default Job