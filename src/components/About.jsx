import React from 'react';

function About() {
  return (
    <div className="container view">
      <header>
        <h1>소개 (About)</h1>
        <p className="description">주역(Book of Change)과 함께하는 지혜의 여정</p>
      </header>

      <div className="text-content">
        <h2>변화의 서, 주역</h2>
        <p>
          주역은 고대 동양의 철학과 지혜가 집대성된 고전입니다. 
          세상의 모든 만물은 끊임없이 변화하며, 그 변화 속에는 일정한 법칙이 있다는 믿음에서 시작되었습니다.
        </p>
        
        <h2>우리의 서비스</h2>
        <p>
          본 서비스는 복잡한 주역의 괘를 현대적인 시각으로 재해석하여, 
          사용자가 고민하는 문제에 대해 작은 통찰을 얻을 수 있도록 돕습니다. 
          전통적인 64괘의 의미를 쉽고 아름다운 디자인과 함께 만나보세요.
        </p>
        
        <p>
          당신의 오늘이 어제의 변화를 통해 내일의 지혜가 되길 바랍니다.
        </p>
      </div>
    </div>
  );
}

export default About;
