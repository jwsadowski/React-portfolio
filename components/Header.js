import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
        background: 'blue',
    },
    headingStyle: {
        fonstSize: '100px',
    },
};

function Header() {
    return (
        <header style={styles.headerStyle}
        className='header'>
            <h1 style={styles.headingStyle}>My Portfolio</h1>
        </header>
    );
}

export default Header;