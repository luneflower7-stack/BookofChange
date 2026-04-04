
// --- 주역 64괘 데이터 (전체 64개 정의) ---
const hexagramNames = {
    "111111": "중천건 (重天乾)", "000000": "중지곤 (重地坤)", "100010": "수뢰진 (水雷屯)", "010001": "산수몽 (山水蒙)",
    "111010": "수천수 (水天需)", "010111": "천수송 (天水訟)", "000010": "지수사 (地水師)", "010000": "수지비 (水地比)",
    "111011": "풍천소축 (風天小畜)", "110111": "천택리 (天澤履)", "111000": "지천태 (地天泰)", "000111": "천지비 (天地否)",
    "111101": "천화동인 (天火同人)", "101111": "화천대유 (火天大有)", "001000": "지산겸 (地山謙)", "000100": "뇌지예 (雷地豫)",
    "100110": "택뢰수 (澤雷隨)", "011001": "산풍고 (山風蠱)", "110000": "지택임 (地澤臨)", "000011": "풍지관 (風地觀)",
    "100101": "화뢰서합 (火雷噬嗑)", "101001": "산화비 (山火賁)", "000001": "산지박 (山地剝)", "100000": "지뢰복 (地雷復)",
    "111100": "천뢰무망 (天雷无妄)", "001111": "산천대축 (山天大畜)", "100001": "산뢰이 (山雷頤)", "011110": "택풍대과 (澤風大過)",
    "010010": "중수감 (重水坎)", "101101": "중화리 (重火離)", "011000": "택산함 (澤山咸)", "000110": "뇌풍항 (雷風恒)",
    "001111": "천산둔 (天山遯)", "111100": "뇌천대장 (雷天大壯)", "000101": "화지진 (火地晉)", "101000": "지화명이 (地火明夷)",
    "101011": "풍화가인 (風火家人)", "110101": "화택규 (火澤睽)", "001010": "수산건 (水山蹇)", "010100": "뇌수해 (雷水解)",
    "110001": "산택손 (山澤損)", "100011": "풍뢰익 (風雷益)", "111110": "택천쾌 (澤天夬)", "011111": "천풍구 (天風姤)",
    "000110": "택지췌 (澤地萃)", "011000": "지풍승 (地風升)", "010110": "택수곤 (澤水困)", "011010": "수풍정 (水風井)",
    "101110": "택화혁 (澤火革)", "011101": "화풍정 (火風鼎)", "100100": "중뢰진 (重雷震)", "001001": "중산간 (重山艮)",
    "001011": "풍산점 (風山漸)", "110100": "뇌택귀매 (雷澤歸妹)", "101100": "뇌화풍 (雷火豊)", "001101": "산화려 (山火旅)",
    "011011": "중풍손 (重風巽)", "110110": "중택태 (重澤兌)", "011010": "풍수환 (風水渙)", "010110": "수택절 (水澤節)",
    "110011": "풍택중부 (風澤中孚)", "001100": "뇌산소과 (雷山小과)", "010101": "수화기제 (水火旣濟)", "101010": "화수미제 (火水未濟)"
};

// --- 강아지 64종 데이터 (매칭) ---
const dogBreeds = [
    "골든 리트리버", "보더 콜리", "시바견", "푸들", "웰시 코기", "비글", "닥스훈트", "요크셔 테리어",
    "말티즈", "포메라니안", "치와와", "시추", "비숑 프리제", "진돗개", "퍼그", "불독",
    "허스키", "말라뮤트", "사모예드", "도베르만", "셰퍼드", "리트리버", "그레이하운드", "달마시안",
    "코커 스패니얼", "파피용", "불 테리어", "슈나우저", "복서", "로트와일러", "마스티프", "보르조이",
    "아키타견", "차우차우", "페키니즈", "살루키", "휘핏", "바셋 하운드", "그레이트 데인", "세인트 버나드",
    "올드 쉽독", "울프하운드", "뉴펀들랜드", "와이마라너", "리지백", "샤르페이", "바센지", "잭 러셀",
    "캐벌리어", "미니어처 핀셔", "티베탄 마스티프", "아프간 하운드", "블러드하운드", "벨기에 셰퍼드", "아이리시 세터", "화이트 테리어",
    "보스턴 테리어", "프렌치 불독", "스코티시 테리어", "베들링턴", "웰시 테리어", "노르웨이 엘크하운드", "달마티안", "비즐라"
];

// --- 다국어 번역 데이터 ---
const translations = {
    ko: {
        title: "🐶 강아지 주역 운세 🐶",
        subtitle: "당신의 고민을 사랑스러운 강아지와 함께 주역으로 풀어보세요.",
        labelConcern: "어떤 게 궁금해? 언니가 알려줄게! ✨",
        placeholder: "여기에 고민을 구체적으로 적어주면 강아지 친구들이 도와줄 거야...",
        startButton: "🐾 운세 시작하기 🐾",
        guide: "나무통을 흔들어서 효(爻)를 하나씩 뽑아보자!",
        disclaimer: "※ 주역 운세는 참고용일 뿐이야! 너무 맹신하지 말고 재미로만 봐줘~ 💖",
        retry: "다시 해보기 🌸",
        alertConcern: "고민을 먼저 적어줘! 내가 잘 들어줄게. ✨"
    },
    en: {
        title: "🐶 Puppy I Ching Fortune 🐶",
        subtitle: "Find your answer with adorable puppy friends and I Ching wisdom.",
        labelConcern: "What's on your mind? ✨",
        placeholder: "Describe your concern here. The puppies will help you...",
        startButton: "🐾 Start Fortune 🐾",
        guide: "Shake the wooden cylinder and draw a line (Yao) one by one!",
        disclaimer: "※ Results are for fun! Don't take it too seriously. 💖",
        retry: "Try Again 🌸",
        alertConcern: "Tell me your concern first! ✨"
    }
    // ... 나머지 언어들 생략 가능 (필요 시 추가)
};

// --- 고해상도 명암 처리된 픽셀 강아지 SVG 생성기 ---
function generateDetailedDogSVG(breedId) {
    const colors = [
        { main: "#F5D6A7", shade: "#E3B778", spot: "#8D6E63" }, // 황금색
        { main: "#FFFFFF", shade: "#E0E0E0", spot: "#212121" }, // 흰색/검정
        { main: "#795548", shade: "#5D4037", spot: "#3E2723" }, // 갈색
        { main: "#BDBDBD", shade: "#9E9E9E", spot: "#616161" }, // 회색
        { main: "#FFCC80", shade: "#F57C00", spot: "#E65100" }, // 주황색
        { main: "#FFE0B2", shade: "#FFB74D", spot: "#FB8C00" }  // 베이지
    ];
    const c = colors[breedId % colors.length];

    return `
    <svg width="220" height="220" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" shape-rendering="pixelated">
        <!-- Face Shading (Left/Bottom) -->
        <rect x="5" y="6" width="14" height="12" fill="${c.shade}" />
        <!-- Face Main -->
        <rect x="6" y="5" width="12" height="11" fill="${c.main}" />
        
        <!-- Ears with Shading -->
        <rect x="4" y="4" width="4" height="5" fill="${c.spot}" />
        <rect x="16" y="4" width="4" height="5" fill="${c.spot}" />
        <rect x="5" y="5" width="2" height="3" fill="${c.main}" opacity="0.3" />

        <!-- Eyes with Highlights -->
        <g style="animation: blink 4s infinite;">
            <rect x="8" y="9" width="2" height="2" fill="#000" />
            <rect x="14" y="9" width="2" height="2" fill="#000" />
            <rect x="8" y="9" width="1" height="1" fill="#fff" opacity="0.8" />
            <rect x="14" y="9" width="1" height="1" fill="#fff" opacity="0.8" />
        </g>

        <!-- Nose & Muzzle -->
        <rect x="10" y="12" width="4" height="3" fill="#fff" opacity="0.5" />
        <rect x="11" y="12" width="2" height="1" fill="#000" style="animation: nose-wiggle 1s infinite;" />
        
        <!-- Tongue (Cuteness) -->
        <rect x="11" y="14" width="2" height="1" fill="#ff4d6d" />

        <!-- Blushing -->
        <rect x="7" y="11" width="2" height="1" fill="#ff8fa3" opacity="0.4" />
        <rect x="15" y="11" width="2" height="1" fill="#ff8fa3" opacity="0.4" />
    </svg>
    `;
}

// --- 주역 소성괘 성질 데이터 ---
const trigramNatures = {
    "111": { name: "하늘 (건)", nature: "강건함", symbol: "하늘" },
    "000": { name: "땅 (곤)", nature: "부드러움", symbol: "대지" },
    "100": { name: "우레 (진)", nature: "움직임", symbol: "번개" },
    "011": { name: "바람 (손)", nature: "스며듦", symbol: "바람" },
    "010": { name: "물 (감)", nature: "험난함", symbol: "물" },
    "101": { name: "불 (리)", nature: "밝음", symbol: "불꽃" },
    "001": { name: "산 (간)", nature: "그침", symbol: "산" },
    "110": { name: "못 (태)", nature: "기쁨", symbol: "연못" }
};

// --- 공감 멘트 데이터셋 (50개 중 일부 발췌) ---
const empathyPhrases = [
    "어머, 그런 고민이 있었구나. 혼자서 끙끙 앓으며 밤잠 설치지는 않았을지 언니는 너무 걱정돼. 네 마음이 얼마나 무거웠을지 충분히 느껴져.",
    "정말 중요한 결정을 앞두고 있구나! 네가 얼마나 진지하게 이 일을 생각하고 있는지 너의 글에서 예쁜 진심이 듬뿍 느껴져서 언니도 마음이 찡해.",
    "마음 한구석이 답답하고 안개가 낀 것처럼 막막했지? 언니가 토닥토닥 해줄게. 넌 지금까지 충분히 잘해왔고, 앞으로도 잘해낼 수 있는 멋진 아이야.",
    "이렇게 솔직하게 고민을 말해줘서 정말 고마워. 너는 참 용기 있고 반짝이는 사람이란다. 언니랑 강아지들이 너의 앞날을 온 마음 다해 응원할게."
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

    divinationSticks.classList.add('animating');
    setTimeout(() => divinationSticks.classList.remove('animating'), 500);

    const line = Math.random() > 0.5 ? 1 : 0;
    drawnLines.push(line);

    const lineEl = document.createElement('div');
    lineEl.className = `yao-line ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
    drawnLinesContainer.appendChild(lineEl);

    updateUI();

    if (drawnLines.length === 6) {
        setTimeout(showResult, 800);
    }
});

function showResult() {
    divinationView.classList.add('hidden');
    fortuneResult.classList.remove('hidden');

    const hexKey = drawnLines.join('');
    const lowerKey = hexKey.substring(0, 3);
    const upperKey = hexKey.substring(3, 6);

    const lowerTri = trigramNatures[lowerKey];
    const upperTri = trigramNatures[upperKey];
    const hexName = hexagramNames[hexKey] || "신비로운 괘";
    
    // 강아지 매칭
    const breedId = parseInt(hexKey, 2) % dogBreeds.length;
    dogContainer.innerHTML = generateDetailedDogSVG(breedId);
    dogBreedDisplay.textContent = `추천 강아지: ${dogBreeds[breedId]}`;

    // 괘형 표시 수정 (잘리지 않게)
    hexagramShapeDisplay.innerHTML = "";
    drawnLines.forEach(line => {
        const miniYao = document.createElement('div');
        miniYao.className = `mini-yao ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        hexagramShapeDisplay.appendChild(miniYao);
    });

    hexagramNameDisplay.textContent = hexName;
    document.getElementById('user-concern-display').textContent = `Q. "${userConcern}"`;

    // 유기적인 해석 생성
    interpretationSection.innerHTML = generateFullInterpretation(userConcern, lowerTri, upperTri, hexName);
}

function generateFullInterpretation(concern, lower, upper, hexName) {
    // 1. 공감 (3문장)
    const empathy = empathyPhrases[Math.floor(Math.random() * empathyPhrases.length)];

    // 2. 괘 상호작용 (10문장)
    const interaction = `있잖아, 네가 오늘 만난 '${hexName}'는 정말 신비로운 기운을 담고 있어! 아래쪽에는 '${lower.name}'의 기운이 든든하게 자리 잡고 있고, 위쪽에는 '${upper.name}'의 에너지가 살랑살랑 춤을 추고 있단다. 이 두 기운이 만나면 어떤 일이 벌어질까? ${lower.symbol}과 ${upper.symbol}이 서로 손을 맞잡는 것처럼, 지금 네 상황은 두 에너지가 아주 유기적으로 섞이고 있는 중이야. ${lower.nature}이 바탕이 되어 ${upper.nature}의 상황으로 나아가는 과정이라서 아주 특별해. 마치 강아지가 든든한 대지를 딛고 맑은 하늘을 향해 짖는 모습처럼 활기차기도 하고, 때로는 흐르는 강물이 불꽃을 만나는 것처럼 신중한 조화가 필요하기도 하지. 주역에서는 이런 만남을 통해 새로운 변화가 일어난다고 말해준단다. 지금 네 주위에는 이 괘의 기운이 듬뿍 퍼져 있어서, 네가 어떤 마음을 먹느냐에 따라 아주 예쁜 그림이 그려질 거야. 이 두 친구가 서로를 아끼며 대화하는 소리가 너에게도 들리니? 우리 같이 이 소중한 조화를 마음 깊이 느껴보자!`;

    // 3. 맞춤 조언 (20문장 - AI 스타일 합성)
    const advice = generateCustomAdvice(concern, lower, upper);

    return `
        <p>${empathy}</p>
        <p>${interaction}</p>
        <p>${advice}</p>
    `;
}

function generateCustomAdvice(concern, lower, upper) {
    // 사용자의 고민에 따라 문맥을 합성 (20문장 분량)
    let sentences = [
        `네가 적어준 "${concern}"이라는 고민에 대해 우리 강아지 친구들과 언니가 주역의 지혜를 빌려 곰곰이 생각해봤어.`,
        `현재 네 상황은 ${lower.symbol}의 정적인 기운과 ${upper.symbol}의 동적인 기운이 복합적으로 얽혀 있는 아주 중요한 분기점에 와 있어.`,
        `특히 "${concern}"에 대해 걱정하는 마음은 이 괘의 기운으로 볼 때 네가 더 큰 성장을 하기 위한 예쁜 성장통 같은 거야.`,
        `주역은 지금 너에게 "${lower.nature}"의 마음가짐으로 기초를 다지는 것이 가장 중요하다고 속삭여주고 있단다.`,
        `거기에 "${upper.nature}"의 지혜를 더한다면 네가 걱정하는 그 일은 분명 네가 원하는 방향으로 예쁘게 풀려나갈 거야.`,
        `조급한 마음이 들 때는 잠시 눈을 감고 시원한 ${upper.symbol}을 상상하며 마음을 가라앉혀 보는 건 어떨까?`,
        `강아지가 꼬리를 흔들며 네 곁을 지키는 것처럼, 너의 그 고민도 결국엔 네 인생의 든든한 친구가 되어줄 거야.`,
        `지금은 마치 씨앗이 땅속에서 봄을 기다리는 시기라서, 겉으로 보기엔 멈춘 것 같아도 속으로는 아주 뜨겁게 준비 중이거든.`,
        `네가 적어준 고민의 본질은 사실 네가 가진 무한한 가능성을 증명하고 싶은 마음에서 비롯된 것 같아.`,
        `언니가 보기엔 너는 이미 충분히 잘하고 있고, 이 괘의 기운도 너의 정직한 노력을 아주 높게 사고 있어.`,
        `사람들과 대화할 때는 ${upper.nature}의 부드러움을 잊지 말고, 스스로를 대할 때는 ${lower.nature}의 단단함을 가져봐.`,
        `네 고민의 실타래가 하나씩 풀리는 소리가 들리는 것 같지 않니?`,
        `너무 멀리 보려고 애쓰기보다 지금 당장 네 발밑에 있는 작은 행복부터 소중히 여겨보길 바라.`,
        `강아지가 맛있는 간식을 기다릴 때의 그 설레는 마음으로 매일을 맞이한다면 행운이 널 먼저 찾아올 거야.`,
        `걱정이라는 구름 뒤에는 언제나 반짝이는 네 꿈이라는 해님이 숨어 있다는 걸 꼭 기억해줘.`,
        `이 괘는 네가 "${concern}"을 통해 더 깊은 통찰력을 얻게 될 것을 약속하고 있단다.`,
        `너의 그 예쁜 고민이 훗날 너를 얼마나 아름다운 꽃으로 피워낼지 언니는 벌써부터 기대돼!`,
        `조금만 더 힘을 내고, 너 자신을 누구보다 많이 사랑해주기로 언니랑 약속해줄래?`,
        `강아지들의 따뜻한 콧김처럼 포근한 행운이 너의 모든 순간에 함께하기를 간절히 빌게.`,
        `자, 이제 고개를 들고 환하게 웃어봐! 세상에서 가장 아름다운 건 바로 너의 웃음이란다. ✨`
    ];
    return sentences.join(' ');
}

document.getElementById('retry-button').addEventListener('click', () => {
    fortuneResult.classList.add('hidden');
    inputView.classList.remove('hidden');
    concernInput.value = "";
    drawnLines = [];
});

updateUI();
