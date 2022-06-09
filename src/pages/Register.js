import React, {useState, useEffect} from 'react'
import {Logo} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
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

        {/* Name field */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>

          <input
           type='text'
           value={values.name}
           name='name'
           onChange={handleChange}
           className='form-input' 
           />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}

export default Register