import './App.css'

import { Outlet } from "react-router-dom"


import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
        <Menu />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App
