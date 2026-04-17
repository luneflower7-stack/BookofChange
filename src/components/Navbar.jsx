import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="top-nav">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/">홈 (Home)</Link>
          <Link to="/about">소개 (About)</Link>
          <Link to="/privacy">개인정보처리방침 (Privacy)</Link>
        </div>
        {/* Language switcher would go here in React version */}
        <div id="language-switcher">
          <select id="lang-select">
            <option value="ko">🇰🇷 한국어</option>
            <option value="en">🇺🇸 English</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
