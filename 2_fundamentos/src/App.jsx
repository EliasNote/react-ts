import './App.css'

import { Welcome, BomDia, Pai, Descricao, Cachorro, 
  Counter, UserInfoForm, Button, PaiFunction, Form, 
  RenderCondicional, LoginButton, Warning, NumberList,
  BotaoEstilizado, BotaoAzul } from "./components";

function App() {
  return (
    <>
    {/* 6.1 - Criação de componente */}
    <Welcome/>

    {/* 6.2 - Expressões do JSX */}
    <BomDia/>

    {/* 6.3 - Componente dentro de componente */}
    <Pai/>

    {/* 6.4 - Props */}
    <Descricao nome="Elias" idade={30} />

    {/* 6.5 - Desestruturação de props */}
    <Cachorro nome="Urso" raca="Pastor Alemão" />

    {/* 6.6 - useState -> hook */}
    <Counter/>

    {/* 6.7 - múltiplos estados */}
    <UserInfoForm/>

    {/* 6.8 - Eventos */}
    <Button/>

    {/* 6.9 - Passando funções de manipulação de eventos como props */}
    <PaiFunction/>

    {/* 6.10 - Eventos de form */}
    <Form/>

    {/* 6.11 - Renderização condicional */}
    <RenderCondicional user="Elias" />

    {/* 6.12 - Expressão ternária */}
    <LoginButton loggedIn={false}/>
    <LoginButton loggedIn={true}/>

    {/* 6.13 - Render nulo */}
    <Warning warning={true}/>

    {/* 6.14 - Listas Chaves */}
    <NumberList numbers={[1, 2, 3, 4, 5]}/>

    {/* 6.15 - Estilos por atributo */}
    <BotaoEstilizado/>

    {/* 6.16 - Estilos globais */}
    <BotaoAzul/>


    </>
  )
}

export default App;
