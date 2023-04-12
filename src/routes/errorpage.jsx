import React from 'react'
import { Link } from 'react-router-dom'

export const Errorpage = () => {
  return (
    <div className='error-page'>
    
    <div className='error-box'>

      <h1>ERROR 404</h1>
      <h3>Página não encontrada!</h3>

    <Link to="/">
    <img src="../../imagens/logo/Lkslogo.png" />
    </Link>
    
    </div>

    </div>
  )
}

export default Errorpage