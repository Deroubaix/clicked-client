import React from 'react';
import { Link } from 'react-router-dom';
import '/styles/footer.css';

function Footer() {
  return (
    <div className='page-content'>
      {/* Your page content goes here */}
      
      <footer className='footer'>
  <div className='footer-links'>
    <a href='https://www.linkedin.com/in/marisha-deroubaix/' target='_blank' rel='noopener noreferrer' className='footer-link'>Marisha Deroubaix</a>
    <a href='https://www.linkedin.com/in/eveline-coenegrachts/' target='_blank' rel='noopener noreferrer' className='footer-link'>Eveline Coenegrachts</a>
  </div>
</footer>

    </div>
  );
}

export default Footer;

