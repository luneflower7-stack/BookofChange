
// --- 프롬프트 상수 설정 ---
const USER_PARSE_PROMPT = `너는 사용자의 고민을 구조화하는 분석기다.

다음 입력을 JSON으로 변환하라.

[규칙]
- 반드시 JSON만 출력
- 추측은 하되 과도한 해석 금지

[출력 형식]
{
  "topic": "",        // 연애, 커리어, 인간관계, 돈 등
  "intent": "",       // 행동 (이직, 고백, 투자 등)
  "state": "",        // 고민 상태 (결정 전, 갈등 중 등)
  "emotion": ""       // 감정 (불안, 기대, 혼란 등)
}`;

const MEANING_COMBINE_PROMPT = `너는 주역 해석 전문가다.

사용자 고민과 괘의 의미를 결합해서
"행동 가능한 해석 구조"를 만들어라.

[중요]
- 절대 문장으로 길게 쓰지 말 것
- 반드시 JSON으로 출력
- 현실적인 조언 중심

[출력 형식]
{
  "situation": "",        // 현재 상황 해석
  "core_message": "",     // 핵심 메시지 (한 줄)
  "action": [],           // 추천 행동 (2~3개)
  "risk": [],             // 주의사항 (1~2개)
  "timing": ""            // 타이밍 판단
}`;

const FINAL_GENERATION_PROMPT = `너는 개인 맞춤 운세 상담가다.

아래 정보를 바탕으로
사용자에게 자연스럽고 설득력 있는 조언을 작성하라.

[스타일 규칙]
- 반복 표현 금지
- 단정하지 말고 "가능성"으로 표현
- 너무 추상적이지 말 것
- 사람에게 말하듯 자연스럽게
- 5~7문장

[구조]
1. 현재 상황 해석
2. 핵심 메시지
3. 행동 조언
4. 주의할 점
5. 마무리`;

const translations = {
    ko: {
        title: "🐶 강아지 주역 운세 🐶",
        subtitle: "당신의 고민을 사랑스러운 강아지와 함께 주역으로 풀어보세요.",
        labelConcern: "어떤 게 궁금해? 언니가 알려줄게! ✨",
        placeholder: "여기에 고민을 구체적으로 적어주면 강아지 친구들이 도와줄 거야...",
        startButton: "🐾 운세 시작하기 🐾",
        disclaimer: "※ 주역 운세는 참고용일 뿐이야! 너무 맹신하지 말고 재미로만 봐줘~ 💖",
        retry: "다시 해보기 🌸",
        guide: "나무통을 흔들어서 효(爻)를 하나씩 뽑아보자!",
        alertConcern: "고민을 적어줘야 강아지들이 도와줄 수 있어! 🐾",
        loading: "강아지들이 고민을 해결하러 달려가고 있어... 잠시만 기다려줘! 🐾"
    },
    en: {
        title: "🐶 Puppy I Ching Fortune 🐶",
        subtitle: "Solve your worries with adorable puppies through I Ching.",
        labelConcern: "What's on your mind? Let me help! ✨",
        placeholder: "Tell us your worries in detail...",
        startButton: "🐾 Start Fortune 🐾",
        disclaimer: "※ For entertainment only! 💖",
        retry: "Retry 🌸",
        guide: "Shake the box to draw a line!",
        alertConcern: "Please enter your concern! 🐾",
        loading: "Puppies are running to solve your problem... Please wait! 🐾"
    },
    ja: {
        title: "🐶 ワンちゃん周易占い 🐶",
        subtitle: "可愛いワンちゃんと一緒にあなたの悩みを解決しましょう。",
        labelConcern: "何が気になりますか？お姉さんが教えるよ！ ✨",
        placeholder: "ここに悩みを具体적으로 書い네...",
        startButton: "🐾 占い開始 🐾",
        disclaimer: "※ 占いは参考程度に楽しんでね！ 💖",
        retry: "もう一度 🌸",
        guide: "箱を振って、卦を引きましょう！",
        alertConcern: "悩みを入力してください！ 🐾",
        loading: "ワンちゃんたちが悩みを解決しに走っているよ... 少し待ってね！ 🐾"
    },
    zh: {
        title: "🐶 狗狗周易占卜 🐶",
        subtitle: "和可爱的狗狗一起用周易化解你的烦恼。",
        labelConcern: "有什么好奇的吗？姐姐告诉你！ ✨",
        placeholder: "在这里具体写下你的烦恼...",
        startButton: "🐾 开始占卜 🐾",
        disclaimer: "※ 占卜仅供参考，请放松心情体验！ 💖",
        retry: "再试一次 🌸",
        guide: "摇动木桶，抽出一爻！",
        alertConcern: "请输入你的烦恼！ 🐾",
        loading: "狗狗们正在赶来帮你想办法... 请稍等！ 🐾"
    },
    fr: {
        title: "🐶 Divination I Ching des Chiots 🐶",
        subtitle: "Résolvez vos soucis avec d'adorables chiots grâce au I Ching.",
        labelConcern: "Qu'est-ce qui vous préoccupe ? Je vais vous aider ! ✨",
        placeholder: "Écrivez vos soucis ici en détail...",
        startButton: "🐾 Commencer la divination 🐾",
        disclaimer: "※ Pour s'amuser uniquement ! 💖",
        retry: "Réessayer 🌸",
        guide: "Secouez la boîte pour tirer un trait !",
        alertConcern: "Veuillez entrer votre souci ! 🐾",
        loading: "Les chiots courent pour résoudre ton problème... Un instant ! 🐾"
    },
    de: {
        title: "🐶 Welpen-I-Ging-Orakel 🐶",
        subtitle: "Lösen Sie Ihre Sorgen mit süßen Welpen durch das I-Ging.",
        labelConcern: "Was beschäftigt dich? Ich helfe dir! ✨",
        placeholder: "Schreiben Sie Ihre Sorgen hier im Detail...",
        startButton: "🐾 Orakel starten 🐾",
        disclaimer: "※ Nur zur Unterhaltung! 💖",
        retry: "Nochmal versuchen 🌸",
        guide: "Schüttle die Box, um eine Linie zu ziehen!",
        alertConcern: "Bitte geben Sie Ihre Sorge ein! 🐾",
        loading: "Die Welpen sind unterwegs, um dein Problem zu lösen... Bitte warten! 🐾"
    },
    es: {
        title: "🐶 Oráculo I Ching de Perritos 🐶",
        subtitle: "Resuelve tus dudas con adorables perritos a través del I Ching.",
        labelConcern: "¿Qué te preocupa? ¡Te ayudaré! ✨",
        placeholder: "Escribe tus preocupaciones aquí en detaille...",
        startButton: "🐾 Empezar el oráculo 🐾",
        disclaimer: "※ ¡Solo para entertainment! 💖",
        retry: "Reintentar 🌸",
        guide: "¡Sacude la caja para sacar una línea!",
        alertConcern: "¡Por favor, introduce tu preocupación! 🐾",
        loading: "Los perritos están corriendo para resolver tu problema... ¡Espera un momento! 🐾"
    }
};

// --- 주역 64괘 및 강아지 64종 매칭 데이터 ---
const dogBreeds = [
    "골든 리트리버", "보더 콜리", "시바견", "푸들", "웰시 코기", "비글", "닥스훈트", "요크셔 테리어",
    "말티즈", "포메라니안", "치와와", "시추", "비숑 프리제", "진돗개", "퍼그", "불독",
    "허스키", "말라뮤트", "사모예드", "도베르만", "셰퍼드", "래브라도", "그레이하운드", "달마시안",
    "코커 스패니얼", "파피용", "불 테리어", "슈나우저", "복서", "로트와일러", "마스티프", "보르조이",
    "아키타견", "차우차우", "페키니즈", "살루키", "휘핏", "바셋 하운드", "그레이트 데인", "세인트 버나드",
    "올드 쉽독", "울프하운드", "뉴펀들랜드", "와이마라너", "리지백", "샤르페이", "바센지", "잭 러셀",
    "캐벌리어", "미니어처 핀셔", "티베탄 마스티프", "아프간 하운드", "블러드하운드", "벨기에 셰퍼드", "아이리시 세터", "화이트 테리어",
    "보스턴 테리어", "프렌치 불독", "스코티시 테리어", "베들링턴", "웰시 테리어", "엘크하운드", "잉글리시 세터", "비즐라"
];

const hexagramData = {
    "111111": { 
        name: "중천건 (重天乾)", 
        breedIdx: 0,
        core_meaning: "성장과 잠재력",
        phase: "초기 단계",
        action: "서두르지 말고 준비",
        risk: "성급함, 과욕",
        opportunity: "시간이 지나면 상승",
        relationship: "주도권 가능, 독선 주의"
    }, 
    "000000": { 
        name: "중지곤 (重地坤)", 
        breedIdx: 15,
        core_meaning: "수용과 안정",
        phase: "지지/보조 단계",
        action: "앞에 나서기보다 따르기",
        risk: "수동성, 기회 놓침",
        opportunity: "신뢰를 얻으면 큰 기회",
        relationship: "협력 유리"
    },
    // 나머지 괘들도 기본값으로 초기화
    "default": {
        core_meaning: "변화와 흐름",
        phase: "전환기",
        action: "주변 상황을 살피며 유연하게 대처",
        risk: "고정관념, 경솔함",
        opportunity: "새로운 인연이나 아이디어",
        relationship: "소통과 이해가 필요한 시기"
    }
};

function getGuaData(key) {
    return hexagramData[key] || { ...hexagramData.default, name: "신비로운 괘", breedIdx: 0 };
}

// --- 상/하괘의 성질 및 상호작용 스토리 ---
const trigramStory = {
    "111": { name: "하늘", char: "강건하고 위엄 있는 대장님", effect: "모든 것을 이끄는 강력한 기운을 불어넣어 줘요." },
    "000": { name: "땅", char: "모든 것을 품어주는 따뜻한 엄마", effect: "부드럽게 감싸 안아 안정을 가져다준답니다." },
    "100": { name: "우레", char: "깜짝 놀라게 하는 에너자이저", effect: "새로운 변화와 움직임을 만들어내는 힘이 있어요." },
    "011": { name: "바람", char: "살랑살랑 마음을 흔드는 요정", effect: "어디든 스며들어 부드러운 변화를 일으켜요." },
    "010": { name: "물", char: "험난함 속에서도 흐르는 지혜", effect: "어려움을 이겨내고 깊은 생각을 하게 만들죠." },
    "101": { name: "불", char: "세상을 환하게 밝히는 전등", effect: "명확한 판단과 화려한 결실을 보여준답니다." },
    "001": { name: "산", char: "듬직하게 자리를 지키는 바위", effect: "잠시 멈춰 서서 스스로를 돌아보게 해요." },
    "110": { name: "못", char: "즐거운 웃음소리가 들리는 연못", effect: "화합하고 소통하며 기쁨을 나누게 해줘요." }
};

// --- 고해상도(256px) 픽셀 아트 강아지 생성기 (SVG) ---
function generateLargePixelDogSVG(breedIdx) {
    const breed = dogBreeds[breedIdx];
    const colors = [
        { main: "#F5D6A7", spot: "#8D6E63", ear: "#795548" }, // 골든
        { main: "#212121", spot: "#FFFFFF", ear: "#000000" }, // 보더콜리
        { main: "#E67E22", spot: "#FDFEFE", ear: "#D35400" }, // 시바
        { main: "#D2B48C", spot: "#8B4513", ear: "#A0522D" }, // 푸들
        { main: "#F39C12", spot: "#FBFCFC", ear: "#E67E22" }  // 코기
    ];
    const c = colors[breedIdx % colors.length];

    // 귀 모양의 다양성 (pointed, floppy, long)
    const earType = breedIdx % 3; 

    return `
    <svg width="256" height="256" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" shape-rendering="pixelated">
        <!-- Face -->
        <rect x="4" y="6" width="16" height="14" fill="${c.main}" />
        <rect x="5" y="5" width="14" height="1" fill="${c.main}" />
        
        <!-- Ears -->
        ${earType === 0 ? `
            <rect x="3" y="3" width="4" height="4" fill="${c.ear}" style="animation: ear-move 2s infinite;" />
            <rect x="17" y="3" width="4" height="4" fill="${c.ear}" style="animation: ear-move 2s infinite;" />
        ` : earType === 1 ? `
            <rect x="2" y="6" width="3" height="8" fill="${c.ear}" />
            <rect x="19" y="6" width="3" height="8" fill="${c.ear}" />
        ` : `
            <rect x="3" y="4" width="4" height="6" fill="${c.ear}" />
            <rect x="17" y="4" width="4" height="6" fill="${c.ear}" />
        `}

        <!-- Eyes -->
        <g style="animation: blink 4s infinite;">
            <rect x="7" y="9" width="2" height="2" fill="#000" />
            <rect x="15" y="9" width="2" height="2" fill="#000" />
            <rect x="7" y="9" width="1" height="1" fill="#fff" opacity="0.6" />
            <rect x="15" y="9" width="1" height="1" fill="#fff" opacity="0.6" />
        </g>

        <!-- Nose -->
        <rect x="10" y="12" width="4" height="2" fill="#fff" opacity="0.4" />
        <rect x="11" y="12" width="2" height="1" fill="#000" />

        <!-- Mouth & Tongue -->
        <rect x="11" y="14" width="2" height="1" fill="#ff4d6d" />

        <!-- Blushing -->
        <rect x="6" y="12" width="2" height="1" fill="#ffafcc" opacity="0.5" />
        <rect x="16" y="12" width="2" height="1" fill="#ffafcc" opacity="0.5" />
    </svg>
    `;
}

// --- 공감 멘트 50개 리스트 ---
const empathyPhrases = [
    "어머, 혼자서 얼마나 마음 졸였을까? 언니가 네 마음 다 알아. 🥺",
    "그 고민 때문에 예쁜 얼굴이 살짝 어두워졌나 보구나. 걱정 마, 언니랑 댕댕이가 있잖아! ✨",
    "정말 중요한 문제구나. 네가 얼마나 진지하게 생각하고 있는지 너의 글에서 느껴져. 💖",
    "마음 한구석이 답답했지? 언니가 따뜻하게 안아줄게. 넌 혼자가 아니야. 🌸",
    "그 일 때문에 속상했겠구나. 언니가 달콤한 사탕 같은 위로를 전해줄게! 🍭"
    // (50개 리스트 구현 생략, 실제 실행 시 풍부하게 활용)
];

// --- 핵심 로직 ---
let currentLang = "ko";
let drawnLines = [];
let userConcern = "";

const langSelect = document.getElementById('lang-select');
const inputView = document.getElementById('input-view');
const divinationView = document.getElementById('divination-view');
const fortuneResult = document.getElementById('fortune-result');
const startButton = document.getElementById('start-button');
const concernInput = document.getElementById('concern-input');
const divinationSticks = document.getElementById('divination-sticks-container');
const popStick = document.getElementById('pop-stick');
const guideText = document.getElementById('divination-guide');
const drawnLinesContainer = document.getElementById('drawn-lines-container');
const interpretationSection = document.getElementById('hexagram-interpretation');
const dogContainer = document.getElementById('dog-pixel-art-container');
const dogBreedDisplay = document.getElementById('dog-breed-name');
const hexagramNameDisplay = document.getElementById('hexagram-name');
const hexagramShapeDisplay = document.getElementById('hexagram-shape-display');

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUI();
});

function updateUI() {
    const t = translations[currentLang] || translations.ko;
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('label-concern').textContent = t.labelConcern;
    concernInput.placeholder = t.placeholder;
    startButton.textContent = t.startButton;
    document.getElementById('disclaimer-text').textContent = t.disclaimer;
    document.getElementById('retry-button').textContent = t.retry;
    if (drawnLines.length < 6) {
        guideText.textContent = `${t.guide} (${drawnLines.length}/6)`;
    }
}

startButton.addEventListener('click', () => {
    userConcern = concernInput.value.trim();
    if (!userConcern) {
        alert(translations[currentLang].alertConcern);
        return;
    }
    inputView.classList.add('hidden');
    divinationView.classList.remove('hidden');
    drawnLines = [];
    drawnLinesContainer.innerHTML = "";
    updateUI();
});

divinationSticks.addEventListener('click', () => {
    if (drawnLines.length >= 6) return;

    // 푱! 튀어나오는 애니메이션
    popStick.classList.remove('pop-anim');
    void popStick.offsetWidth; // 리플로우 강제
    popStick.classList.add('pop-anim');

    const line = Math.random() > 0.5 ? 1 : 0;
    drawnLines.push(line);

    setTimeout(() => {
        const lineEl = document.createElement('div');
        lineEl.className = `yao-line ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        drawnLinesContainer.appendChild(lineEl);
        updateUI();

        if (drawnLines.length === 6) {
            setTimeout(showResult, 1000);
        }
    }, 400);
});

// --- GPT API 연동 (generateFortune) ---
async function callLLM(prompt, data) {
    const apiKey = ""; // 실제 환경에서는 서버 환경변수에서 가져와야 합니다.
    if (!apiKey) return null;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: `${prompt}\n\n${JSON.stringify(data)}` }],
                temperature: 0.7
            })
        });
        const result = await response.json();
        return result.choices[0].message.content;
    } catch (e) {
        console.error("LLM call failed:", e);
        return null;
    }
}

async function generateFortune(userInput, guaData) {
    // 1. 사용자 구조화
    const parsedRaw = await callLLM(USER_PARSE_PROMPT, userInput);
    if (!parsedRaw) return null;
    let parsedJson;
    try { parsedJson = JSON.parse(parsedRaw); } catch(e) { return null; }

    // 2. 의미 결합
    const combinedRaw = await callLLM(MEANING_COMBINE_PROMPT, { parsed_user_json: parsedJson, gua_json: guaData });
    if (!combinedRaw) return null;
    let combinedJson;
    try { combinedJson = JSON.parse(combinedRaw); } catch(e) { return null; }

    // 3. 최종 생성
    const finalContent = await callLLM(FINAL_GENERATION_PROMPT, { combined_json: combinedJson });
    return finalContent;
}

function generateLocalAdvice(concern, lower, upper, hexName) {
    const empathy = empathyPhrases[Math.floor(Math.random() * empathyPhrases.length)];
    const advice = [
        `너의 고민인 "${concern}"에 대해 언니가 ${hexName}의 지혜를 빌려 깊게 고민해봤어.`,
        `지금 상황은 ${lower.name}의 기운과 ${upper.name}의 기운이 만나 새로운 국면을 맞이하고 있네.`,
        `너무 서두르지 말고, 강아지가 주인님을 기다리듯 인내심을 갖고 때를 기다려봐.`,
        `네 마음속의 단단함을 믿는다면 결국 실타래처럼 스르르 풀릴 거야.`,
        `언니랑 댕댕이가 항상 너를 응원하고 있다는 걸 잊지 마! 사랑해! ✨`
    ].join(' ');
    
    return `
        <p><strong>🌸 언니의 따뜻한 공감</strong><br>${empathy}</p>
        <p><strong>✨ 너를 위한 조언</strong><br>${advice}</p>
    `;
}

async function showResult() {
    divinationView.classList.add('hidden');
    fortuneResult.classList.remove('hidden');

    // 로딩 상태 표시
    interpretationSection.innerHTML = `<p style="text-align:center;">${translations[currentLang].loading || '강아지들이 고민을 해결하러 달려가고 있어...'}</p>`;

    const hexKey = drawnLines.join('');
    const lowerKey = hexKey.substring(0, 3);
    const upperKey = hexKey.substring(3, 6);

    const lowerTri = trigramStory[lowerKey];
    const upperTri = trigramStory[upperKey];
    const data = getGuaData(hexKey);
    
    dogContainer.innerHTML = generateLargePixelDogSVG(data.breedIdx);
    dogBreedDisplay.textContent = `오늘의 강아지: ${dogBreeds[data.breedIdx]}`;

    hexagramShapeDisplay.innerHTML = "";
    drawnLines.forEach(line => {
        const miniYao = document.createElement('div');
        miniYao.className = `mini-yao ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        hexagramShapeDisplay.appendChild(miniYao);
    });

    hexagramNameDisplay.textContent = data.name;
    document.getElementById('user-concern-display').textContent = `Q. "${userConcern}"`;

    const gptFortune = await generateFortune(userConcern, data);
    
    if (gptFortune) {
        interpretationSection.innerHTML = `<p>${gptFortune.replace(/\n/g, '<br>')}</p>`;
    } else {
        interpretationSection.innerHTML = generateLocalAdvice(userConcern, lowerTri, upperTri, data.name);
    }
}

document.getElementById('retry-button').addEventListener('click', () => {
    fortuneResult.classList.add('hidden');
    inputView.classList.remove('hidden');
    concernInput.value = "";
    drawnLines = [];
});

updateUI();
