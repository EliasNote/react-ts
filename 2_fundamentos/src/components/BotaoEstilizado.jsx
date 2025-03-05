import React from 'react'

const BotaoEstilizado = () => {

    const estiloBotao = {
        // background-color -> backgroundColor
        backgroundColor: "#333",
        color: "#FFF",
        padding: "25px 32px",
        cursor: "pointer"
    };

  return (
    <div>
        <button style={{ padding: "20px" }}>Clique em mim! 1</button>
        <button style={estiloBotao}>Clique em mim! 2</button>
    </div>
  )
}

export default BotaoEstilizado