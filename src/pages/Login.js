import React from 'react'
import Template from '../components/Template'
import girl from '../assets/girl.png'

function Login({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow and beyond."
    desc2="Education to future-proof your career."
    image={girl}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login