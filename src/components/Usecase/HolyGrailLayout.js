import React from 'react';
import './HolyGrailLayout.css';

const HolyGrailLayout = () => {
  return (
    <div className='container-u'>
        <header className='flex-header'>
            HEADER
        </header>
        <main className='flex-main'>
            <nav className='flex-nav'>
                SIDENAV
            </nav>
            <article className='flex-article'>
                MAIN CONTENT
            </article>
            <side className='flex-aside'>
                SIDEBAR
            </side>
        </main>
        <footer className='flex-footer'>
            FOOTER
        </footer>
    </div>
  );
};

export default HolyGrailLayout;