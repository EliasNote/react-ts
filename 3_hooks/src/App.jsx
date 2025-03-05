import './App.css'
import CalculoPesado from './components/CalculoPesado'
import ComponentFilho from './components/ComponentFilho'
import Contador from './components/Contador'
import ContadorCallback from './components/ContadorCallback'
import Container from './components/Container'
import DisplayWindowSize from './components/DisplayWindowSize'
import ExemploUseEffect from './components/ExemploUseEffect'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import Timer from './components/Timer'
import ValorDoConteoxto from './components/ValorDoConteoxto'
import { MeuContextoProvider } from './contexts/MeuContexto'

function App() {
  return (
    <>
    {/* 8.1 - useEffect */}
    <ExemploUseEffect/>
    <Timer/>

    {/* 8.2 - useContext */}
    {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
    <MeuContextoProvider>
      <ComponentFilho/>
      <ValorDoConteoxto/>
    </MeuContextoProvider>

    {/* 8.3 - useReducer */}
    {/* estados mais complexos */}
    <Contador/>

    {/* 8.4 - Custom hook */}
    <DisplayWindowSize/>

    {/* 8.5 - Slots e children props */}
    <Container>
      <h1>Título da seção</h1>
      <p>Este é o meu subtítulo</p>
    </Container>

    {/* 8.6 - Sincronizar o estado com props */}
    {/* prop => componente => chamada de API => resulta em um dado */}
    <PerfilDeUsuario usuarioId={1}/>
    <PerfilDeUsuario usuarioId={2}/>

    {/* 8.7 - useMemo e useCallback */}
    <CalculoPesado numero={2}/>
    <ContadorCallback/>






    </>
  )
}

export default App
