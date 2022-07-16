import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/peliculas'>Peliculas</Link></li>
                    <li><Link to='/series'>Series</Link></li>
                    <li><Link to='/populares'>Populares</Link></li>
                    <li><Link to='/favoritos'>Favoritos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
