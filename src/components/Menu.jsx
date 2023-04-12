import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

import $ from 'jquery'


function NavLink(props) {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const className = isActive ? 'active' : '';
    return <Link {...props} className={className} />;

  }

function Menu() {

    const [menuAbrir, setMenuAbrir] = useState(false);

    const menuButton = () => {
      setMenuAbrir(!menuAbrir);
    };

    const menuFechar = () => {
      setMenuAbrir(false);
    }

  return (
    <>

        <div className='section-menu'>
            <div className='container'>

                <div className='logo-menu'>
                    <Link to="/">
                        <img alt='Lks-Programação' src="../../imagens/logo/Lkslogo.png" />
                    </Link>
                </div>

                <nav className='nav-menu'>
                    <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/projetos">Projetos</NavLink></li>
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    </ul>
                </nav>

                <nav className='nav-menu-mobile'>

                <BiMenu onClick={menuButton} />

                    <ul style={{ display: menuAbrir ? "block" : "none" }} >
                    <li><NavLink onClick={menuFechar} to="/">Inicio</NavLink></li>
                    <li><NavLink onClick={menuFechar} to="/skills">Skills</NavLink></li>
                    <li><NavLink onClick={menuFechar} to="/projetos">Projetos</NavLink></li>
                    <li><NavLink onClick={menuFechar} to="/contato">Contato</NavLink></li>
                    </ul>
                </nav>

                <div className='clear'></div>
                
            </div>
        </div>


    </>
  )
}

export default Menu