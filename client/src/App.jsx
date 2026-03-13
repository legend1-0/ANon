import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Chat from './pages/Chat.jsx'
import './styles/App.css'

function App() {
 
  return (
   <>
   <Routes>
    <Route path='/' element={ <Home /> }/>
    <Route path='/chat/:roomId' element={ <Chat /> }/>
   </Routes>
   </>
  )
}

export default App
