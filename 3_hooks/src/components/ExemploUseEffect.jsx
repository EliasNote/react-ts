import { useState } from 'react'
import { useEffect } from 'react'

const ExemploUseEffect = () => {
    const [contador, setContador] = useState(0)

    // executar algo, baseado em algo
    // a mudança de valor, carregamento da página
    useEffect(() => {
        // atualiza o title
        document.title = `Você clicou ${contador} vezes`;
    })


  return (
    <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  )
}

export default ExemploUseEffect