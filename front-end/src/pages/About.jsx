import React from 'react'
import Parent from '../components/Parent'

const About = () => {
    const element = <div>Hello Sammm!</div>;/* This is a JSX element */
  return (
    <div>
        <p>{element}</p>{/* We can use the JSX element inside another JSX element */}
        <Parent/>
    </div>
  )
}

export default About