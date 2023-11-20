import React from 'react'
import { useNavigate } from 'react-router-dom'

const Choose_template = () => {
    const navigate = useNavigate();

    const handleClick= () =>{
        navigate("/")
    }
  return (
    <div>
      <h1>This is choose template section</h1>
      <button onClick={handleClick}>Click me </button>
    </div>
  )
}

export default Choose_template
