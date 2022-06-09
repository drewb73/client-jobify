import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

function Error() {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt='not found' />
            <h3>Uh Oh! Page Not Found</h3>
            <p>This is not the page you are looking for</p>
            <Link to='/'>Back Home</Link>
        </div>
    </Wrapper>
  )
}

export default Error