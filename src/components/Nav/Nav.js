import React from 'react';

const Nav = ({ onRouteChange }) => {
    return (
        <section className="Nav-container">
            <section className="Nav-above">
                
            </section>
            <section className="Nav-cover">
                <nav className="Nav-nav">
                    <p onClick={() => onRouteChange('home')}>Home</p>
                    <p onClick={() => onRouteChange('projects')}>Projects</p>
                    <p onClick={() => onRouteChange('contact')}>Contact</p>
                </nav>
            </section>
        </section>
    );
}

export default Nav;