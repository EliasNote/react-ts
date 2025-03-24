import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import TextInput from './components/TextInput'
import ContadorIntervalo from './components/ContadorIntervalo'

function App() {
  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - Componente funcional com TS */}
      <Greeting name="Elias"/>

      {/* 2 - Hooks com tipos */}
      <Counter/>

      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput/>

      {/* 4 - Custom hooks com TS */}
      <ContadorIntervalo/>
    </>
  )
}

export default App
