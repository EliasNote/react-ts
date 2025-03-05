import React, { useState } from 'react'

const UserInfoForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log("Acessando a api");

    }


  return <form onSubmit={handleSubmit}>
    <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Digite o seu nome"
    />
    <br/>
    {name}
    <br/>
    <input 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Digite o seu nome"
    />
    <br/>
    {email}
    <br/>
    <button type="submit">Enviar</button>
  </form>
}

export default UserInfoForm