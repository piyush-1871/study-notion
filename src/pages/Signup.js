import React from 'react'
import group from '../assets/group.png'
import Template from '../components/Template'


function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Join the millions learning to code with StudeyNotion for free"
    desc1="Build skills for today, tomorrow and beyond."
    desc2="Education to future-proof your career."
    image={group}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup