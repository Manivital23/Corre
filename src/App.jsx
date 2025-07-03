import './App.css'
import Home from './assets/Componentes/Home'
import Cadastro from './assets/Componentes/Cadastro'
import CasaDois from './assets/Componentes/CasaDois'
import CasaQuatro from './assets/Componentes/CasaQuatro'
import Casas from './assets/Componentes/Casas'
import CasaTres from './assets/Componentes/CasaTres'
import Footer from './assets/Componentes/Footer'
import Header from './assets/Componentes/Header'
import Login from './assets/Componentes/Login'
import Formulario from './assets/Componentes/Formulario'
import Politica from './assets/Componentes/Politica'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='/CasaDois' element={<CasaDois />} />
        <Route path='/CasaQuatro' element={<CasaQuatro />} />
        <Route path='/Casas' element={<Casas />} />
        <Route path='/CasaTres' element={<CasaTres />} />
        <Route path='/Formulario' element={<Formulario />} />
        <Route path='/Politica' element={<Politica />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
