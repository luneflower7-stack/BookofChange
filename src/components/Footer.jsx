import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 주역 (Book of Change). All rights reserved.</p>
      <ul>
        <li><Link to="/privacy">개인정보처리방침 (Privacy Policy)</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
