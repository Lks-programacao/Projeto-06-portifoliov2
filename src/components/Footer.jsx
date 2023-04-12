import React from 'react'
import { Link, useLocation} from 'react-router-dom'


function NavLink(props) {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const className = isActive ? 'active' : '';
    return <Link {...props} className={className} />;
  }


export const Footer = () => {
  return (
    <>
    
    <div className='section-footer'>
            <div className='container'>

                <div className='footer-menu'>

                <h2>Menu</h2>

                <nav className='nav-menu'>
                    <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/projetos">Projetos</NavLink></li>
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    </ul>
                </nav>

                </div>

                <div className='footer-redes'>

                <h2>Redes sociais</h2>

                <div className='footer-redes-box'>

                    <a target='_blank' href='https://www.instagram.com/lks.programacao/'>
                    <img src="../../imagens/social/instagram.png" />
                    </a>

                    <a target='_blank' href='https://www.linkedin.com/in/lucas-oliveira-478236261/'>
                    <img src="../../imagens/social/whatsapp.png" />
                    </a>

                    <a target='_blank' href='https://wa.me/qr/SUMPQO4Y5U67P1'>
                    <img src="../../imagens/social/linkedin.png" />
                    </a>

                </div>

                </div>

            </div>
        </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer