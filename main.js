
// --- (1) 64괘 및 8괘 심층 데이터 ---
const detailedHexagramData = {
    "111111": { name: "중천건 (重天乾)", core_meaning: "강력한 창조와 실행력", action: "두려움 없이 전진", risk: "독단적인 판단" },
    "000000": { name: "중지곤 (重地坤)", core_meaning: "수용과 헌신의 미학", action: "앞서기보다 조력", risk: "주관 없는 태도" },
    "default": { core_meaning: "변화와 흐름", action: "상황을 관망하며 유연하게 대처", risk: "고정관념" }
};

const hexagramNames = {
    "111111": "중천건", "000000": "중지곤", "100010": "수뢰진", "010001": "산수몽",
    "111010": "수천수", "010111": "천수송", "000010": "지수사", "010000": "수지비",
    "111011": "풍천소축", "110111": "천택리", "111000": "지천태", "000111": "천지비",
    "111101": "천화동인", "101111": "화천대유", "001000": "지산겸", "000100": "뇌지예",
    "100110": "택뢰수", "011001": "산풍고", "110000": "지택임", "000011": "풍지관",
    "100101": "화뢰서합", "101001": "산화비", "000001": "산지박", "100000": "지뢰복",
    "111100": "천뢰무망", "001111": "산천대축", "100001": "산뢰이", "011110": "택풍대과",
    "010010": "중수감", "101101": "중화리", "011000": "택산함", "000110": "뇌풍항",
    "001111": "천산둔", "111100": "뇌천대장", "000101": "화지진", "101000": "지화명이",
    "101011": "풍화가인", "110101": "화택규", "001010": "수산건", "010100": "뇌수해",
    "110001": "산택손", "100011": "풍뢰익", "111110": "택천쾌", "011111": "천풍구",
    "000110": "택지췌", "011000": "지풍승", "010110": "택수곤", "011010": "수풍정",
    "101110": "택화혁", "011101": "화풍정", "100100": "중뢰진", "001001": "중산간",
    "001011": "풍산점", "110100": "뇌택귀매", "101100": "뇌화풍", "001101": "산화려",
    "011011": "중풍손", "110110": "중택태", "011010": "풍수환", "010110": "수택절",
    "110011": "풍택중부", "001100": "뇌산소과", "010101": "수화기제", "101010": "화수미제"
};

const trigramInfo = {
    "111": { name: "하늘(天)", desc: "강건하고 창조적인 에너지" },
    "000": { name: "땅(地)", desc: "포용하고 수용하는 안정감" },
    "100": { name: "우레(雷)", desc: "새로운 시작과 강력한 움직임" },
    "011": { name: "바람(風)", desc: "유연하고 스며드는 영향력" },
    "010": { name: "물(水)", desc: "험난함 속에서 흐르는 지혜" },
    "101": { name: "불(火)", desc: "명확한 판단과 화려한 결실" },
    "001": { name: "산(山)", desc: "멈추어 내실을 기하는 무게감" },
    "110": { name: "연못(澤)", desc: "기쁨과 소통의 화합" }
};

// --- (2) 강화된 프롬프트 설정 ---
const FINAL_GENERATION_PROMPT = `너는 매우 섬세하고 예리한 상담가야. 
반드시 사용자의 고민 내용을 깊이 분석해서 답변해야 한다.

[사용자 고민]
{{user_input}}

[주역 괘 정보]
{{gua_info}}

[절대 규칙]
- 사용자의 고민 내용을 반드시 직접 언급할 것 (예: "~~에 대해 걱정하시는 마음이 느껴집니다")
- 일반적인 운세 말 금지 (예: "운이 들어오네요", "길운입니다" 등)
- 누구에게나 적용되는 뻔한 말 금지
- 구체적인 상황처럼 해석할 것
- "지금 당신은 ~한 상황으로 보입니다" 형태를 반드시 포함할 것

[답변 구조]
1. 현재 상황 해석 (고민을 기반으로 한 구체적 진단)
2. 문제의 핵심 원인 (괘의 성질과 결합)
3. 구체적인 행동 조언
4. 주의할 점

[스타일]
- 자연스럽고 사람처럼 따뜻하게
- 5~6문장 내외
- 결과만 출력`;

// --- (3) 움직이는 강아지 생성기 ---
function generateAnimatedDogSVG(idx) {
    const colors = ["#F5D6A7", "#212121", "#E67E22", "#D2B48C", "#F39C12", "#795548", "#FFFFFF", "#5D4037"];
    const mainColor = colors[idx % colors.length];
    const tailSpeed = (0.3 + (idx % 5) * 0.1) + "s";
    return `<svg width="256" height="256" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" shape-rendering="pixelated">
        <style> @keyframes wag { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(25deg); } } .dog-tail { transform-origin: 18px 18px; animation: wag ${tailSpeed} infinite; } </style>
        <rect x="6" y="12" width="12" height="8" fill="${mainColor}" />
        <rect x="5" y="5" width="10" height="8" fill="${mainColor}" />
        <rect x="18" y="15" width="3" height="3" fill="${mainColor}" class="dog-tail" />
        <rect x="7" y="8" width="1" height="1" fill="#000" /><rect x="12" y="8" width="1" height="1" fill="#000" />
        <rect x="10" y="10" width="2" height="1" fill="#000" />
    </svg>`;
}

let drawnLines = [];
let userConcern = "";

const inputView = document.getElementById('input-view');
const divinationView = document.getElementById('divination-view');
const fortuneResult = document.getElementById('fortune-result');
const concernInput = document.getElementById('concern-input');
const interpretationSection = document.getElementById('hexagram-interpretation');

document.getElementById('start-button').addEventListener('click', () => {
    userConcern = concernInput.value.trim();
    if (!userConcern) { alert("어떤 게 궁금해? 고민을 먼저 적어줘! ✨"); return; }
    inputView.classList.add('hidden');
    divinationView.classList.remove('hidden');
    drawnLines = [];
    document.getElementById('drawn-lines-container').innerHTML = "";
});

document.getElementById('divination-sticks-container').addEventListener('click', () => {
    if (drawnLines.length >= 6) return;
    const popStick = document.getElementById('pop-stick');
    popStick.classList.remove('pop-anim'); void popStick.offsetWidth; popStick.classList.add('pop-anim');
    const line = Math.random() > 0.5 ? 1 : 0;
    drawnLines.push(line);
    setTimeout(() => {
        const lineEl = document.createElement('div');
        lineEl.className = `yao-line ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        document.getElementById('drawn-lines-container').appendChild(lineEl);
        if (drawnLines.length === 6) setTimeout(showResult, 1000);
    }, 400);
});

// --- (4) 고도화된 운세 생성 함수 (로그 및 에러 체크 포함) ---
async function generateFortune(userConcern, guaInfo) {
    console.log("🔥 userConcern:", userConcern);
    console.log("🔥 guaInfo:", guaInfo);

    const apiKey = "YOUR_API_KEY"; // 여기에 실제 API 키를 입력하세요
    if (!apiKey || apiKey === "YOUR_API_KEY") {
        console.warn("⚠️ API Key가 설정되지 않았습니다. 폴백 문구를 사용합니다.");
        return null;
    }

    const prompt = FINAL_GENERATION_PROMPT
        .replace("{{user_input}}", userConcern)
        .replace("{{gua_info}}", JSON.stringify(guaInfo));

    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4", 
                messages: [{ role: "user", content: prompt }],
                temperature: 0.7
            })
        });

        const data = await res.json();
        console.log("🔥 API 응답:", data);

        if (!data.choices || data.choices.length === 0) {
            return "❌ API 응답 오류: " + JSON.stringify(data);
        }

        return data.choices[0].message.content;
    } catch (e) {
        console.error("🔥 API 호출 중 에러 발생:", e);
        return "❌ 연결 오류: API 서버와 통신할 수 없습니다.";
    }
}

async function showResult() {
    divinationView.classList.add('hidden');
    fortuneResult.classList.remove('hidden');
    interpretationSection.innerHTML = `<p style="text-align:center;">강아지가 우주의 기운을 모아 네 고민을 분석 중이야... 🐾</p>`;

    const hexKey = drawnLines.join('');
    const lowerKey = hexKey.substring(0, 3);
    const upperKey = hexKey.substring(3, 6);
    const hexName = hexagramNames[hexKey] || "신비로운 괘";
    const guaInfo = detailedHexagramData[hexKey] || detailedHexagramData.default;
    guaInfo.name = hexName;

    document.getElementById('dog-pixel-art-container').innerHTML = generateAnimatedDogSVG(parseInt(hexKey, 2));
    document.getElementById('hexagram-name').textContent = hexName;
    document.getElementById('user-concern-display').textContent = `Q. "${userConcern}"`;

    const miniYaoContainer = document.getElementById('hexagram-shape-display');
    miniYaoContainer.innerHTML = "";
    drawnLines.forEach(line => {
        const miniYao = document.createElement('div');
        miniYao.className = `mini-yao ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        miniYaoContainer.appendChild(miniYao);
    });

    // 운세 생성 호출
    const finalAdvice = await generateFortune(userConcern, guaInfo);

    // 공감 및 상호작용 기본 멘트
    const empathy = "네 고민을 가만히 들여다보니 그동안 얼마나 마음을 썼을지 충분히 느껴져서 내 마음도 뭉클해지네. 혼자서 해결책을 찾으려 애썼을 네 예쁜 마음을 꼭 안아주고 싶어. 이제 같이 길을 찾아보자.";
    const interaction = `네가 뽑은 운세는 하괘 **${trigramInfo[lowerKey].name}**와 상괘 **${trigramInfo[upperKey].name}**이 만난 조합이야. ${trigramInfo[lowerKey].desc}의 기운 위에 ${trigramInfo[upperKey].desc}의 흐름이 더해진 아주 특별한 상황이지.`;

    // 결과 출력 (성공/실패/폴백 분기)
    if (finalAdvice && !finalAdvice.startsWith("❌")) {
        interpretationSection.innerHTML = `
            <p>${empathy}</p>
            <hr style="border: 0; border-top: 1px solid #ffe5ec; margin: 20px 0;">
            <p>${interaction}</p>
            <p>${finalAdvice.replace(/\n/g, '<br>')}</p>
        `;
    } else {
        const fallback = finalAdvice || `지금 당신은 "${userConcern}"으로 인해 깊은 고민에 빠져 있는 상황으로 보입니다. ${hexName}의 기운은 현재 무리한 변화보다는 내실을 다지며 때를 기다릴 것을 제안하고 있어요. 당신의 진심이 닿는다면 머지않아 좋은 변화가 생길 거예요.`;
        interpretationSection.innerHTML = `
            <p>${empathy}</p>
            <hr style="border: 0; border-top: 1px solid #ffe5ec; margin: 20px 0;">
            <p>${interaction}</p>
            <p>${fallback.replace(/\n/g, '<br>')}</p>
        `;
    }
}

document.getElementById('retry-button').addEventListener('click', () => {
    fortuneResult.classList.add('hidden');
    inputView.classList.remove('hidden');
    concernInput.value = "";
});
