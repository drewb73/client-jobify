import React from 'react'
import { useAppContext } from '../context/appContext'

//create error alert for login and register page
const Alert = () => {
  const {alertType, alertText} = useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>{alertText}</div>
  )
}

export default Alert