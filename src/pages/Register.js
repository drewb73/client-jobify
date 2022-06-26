import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
// global context and useNavigate will come later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

//if possible prefer local state
// global state

const Register = () => {
  const navigate = useNavigate()
  //set state
  const [values, setValues] = useState(initialState)
  //global context and useNavigate will come later
  const {user, isLoading, showAlert, displayAlert, registerUser, loginUser}= useAppContext()

const toggleMember = () => {
  setValues({...values, isMember: !values.isMember})
}


  //handle onchange
  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  //handle submit
  const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isMember} = values
    if(!email || !password || (!isMember && !name)) {
      displayAlert()
      return 
    }
    const currentUser = {name, email, password}
    if(isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
    console.log(values)
  }

  // useEffect
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* Name field */}
        {!values.isMember && (
          <FormRow 
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange} 
          />
        )}
        
        
        {/* email field */}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
        {/* password field */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />


        <button type='submit' className='btn btn-block' disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?': 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register