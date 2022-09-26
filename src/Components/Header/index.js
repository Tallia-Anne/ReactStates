import './index.css'
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <nav>
                <div className="icon">
                    <Link to="/"> <p>Exo</p></Link></div>
                <ol>
                    <li> <Link to="/compteurs" > Compteurs</Link></li>
                    <li><Link to="/selecteur"> Selecteur </Link>  </li>
                    <li><Link to="/toggle"> Toggle </Link>  </li>
                    <li><Link to="/move"> Move </Link>  </li>
                    <li><Link to="/modale"> Modale </Link>  </li>
                    <li><Link to="/converters"> Converters </Link>  </li>
                    <li><Link to="/configurateur"> Configuration </Link>  </li>
                   
                   
                </ol>
                <label htmlFor="check" className='bar' >
                    <span className="fa fa-bars" id="bars"></span>
                    <span className="fa fa-times" id="times"></span>
                </label>
            </nav>
        </>
    )
}

export default Header