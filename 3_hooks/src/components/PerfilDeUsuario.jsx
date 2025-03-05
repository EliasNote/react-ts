import { useState, useEffect } from 'react'

const PerfilDeUsuario = ({ usuarioId }) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        // Função para buscar dados
        const buscarUsuario = async() => {

            // resposta assíncrona
            const resposta = await fetch(
                `https://jsonplaceholder.typicode.com/users/${usuarioId}`
            );

            const dadosUsuario = await resposta.json();

            setUsuario(dadosUsuario);
        };

        if (usuarioId) {
            buscarUsuario();
        }

    }, [usuarioId]);

  return (
    <div>{
        usuario ? (
        <div>
            <hr/>
            <h3>{usuario.name}</h3>
            <p>{usuario.email}</p>
            <hr/>
        </div>
    ) : <p>Carregando o perifl do usuário...</p>
    }</div>
  )
}

export default PerfilDeUsuario