import React from 'react'
import './signup.scss'

function SignUp(props) {
    return <form className='sign-up-form'>
        {/* <label for="" */}
        <input placeholder='First Name'/>
        <input placeholder='Last Name'/>
        <input placeholder='Email'/>
        <input placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button type='submit'>Sign Up</button>
    </form>
}

export default SignUp