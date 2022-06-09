import React, {useState, useEffect} from 'react'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// global context and useNavigate will come later

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: true
}

//if possible prefer local state
// global state

const Register = () => {
  //set state
  const [values, setValues] = useState(initialState)

  //global context and useNavigate will come later

  //handle onchange
  const handleChange = (e) => {
    console.log(e.target)
  }

  //handle submit
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}

        {/* Name field */}
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
        {/* email field */}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
        {/* password field */}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />


        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register