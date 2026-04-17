import React from 'react';

function Privacy() {
  return (
    <div className="container view">
      <header>
        <h1>개인정보처리방침 (Privacy Policy)</h1>
        <p className="description">귀하의 소중한 정보를 보호하기 위한 약속입니다.</p>
      </header>

      <div className="text-content">
        <h2>1. 수집하는 정보</h2>
        <p>
          본 서비스는 사용자의 익명성을 존중하며, 별도의 회원가입 없이 이용 가능합니다. 
          고민 상담을 위해 입력하시는 텍스트는 결과 도출을 위해서만 일시적으로 사용됩니다.
        </p>

        <h2>2. 정보의 활용</h2>
        <p>
          입력된 내용은 서버에 영구적으로 저장되지 않으며, 
          오직 주역의 괘를 풀이하고 사용자에게 답변을 제공하는 용도로만 활용됩니다.
        </p>

        <h2>3. 쿠키 및 분석</h2>
        <p>
          더 나은 사용자 경험을 제공하기 위해 브라우저의 로컬 스토리지를 활용하여 
          이전 상담 기록을 본인의 기기에만 일시적으로 보관할 수 있습니다.
        </p>

        <p>
          본 방침은 2026년 4월 6일부터 적용됩니다.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
