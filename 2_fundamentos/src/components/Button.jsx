import React from 'react'

const Button = () => {
  const handleClick = () => {
    console.log("Clicou!")
  };

  return <button onClick={handleClick}>Clique em mim!</button>
}

export default Button