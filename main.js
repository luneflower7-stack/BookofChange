
// --- 다국어 데이터 ---
const translations = {
    ko: {
        title: "🐶 강아지 주역 운세 🐶",
        subtitle: "당신의 고민을 사랑스러운 강아지와 함께 주역으로 풀어보세요.",
        labelConcern: "어떤 게 궁금해? 언니가 알려줄게! ✨",
        placeholder: "여기에 고민을 구체적으로 적어주면 강아지 친구들이 도와줄 거야...",
        startButton: "🐾 운세 시작하기 🐾",
        guide: "상자를 흔들어서 효(爻)를 하나씩 뽑아보자!",
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
        guide: "Shake the box and draw a line (Yao) one by one!",
        disclaimer: "※ Results are for fun! Don't take it too seriously. 💖",
        retry: "Try Again 🌸",
        alertConcern: "Tell me your concern first! ✨"
    },
    ja: {
        title: "🐶 ワンちゃん周易占い 🐶",
        subtitle: "可愛いワンちゃんと一緒に周易で悩みを解決しましょう。",
        labelConcern: "悩みは何かな？お姉さんが教えてあげる！ ✨",
        placeholder: "ここに悩みを具体的に書いてね。ワンちゃんたちが助けてくれるよ...",
        startButton: "🐾 占いを始める 🐾",
        guide: "箱を振って、卦を一つずつ引いてみてね！",
        disclaimer: "※ 占いは参考程度にしてね。楽しんでね！ 💖",
        retry: "もう一度 🌸",
        alertConcern: "まず悩みを教えてね！ ✨"
    },
    zh: {
        title: "🐶 狗狗周易占卜 🐶",
        subtitle: "与可爱的狗狗一起，通过周易解开您的烦恼。",
        labelConcern: "有什么心 이事吗？大姐姐来告诉你！ ✨",
        placeholder: "请在这里写下你的烦恼。狗狗们会帮助你的...",
        startButton: "🐾 开始占卜 🐾",
        guide: "摇一摇箱子，逐一抽取爻吧！",
        disclaimer: "※ 结果仅供参考！请保持轻松的心情。 💖",
        retry: "重试 🌸",
        alertConcern: "请先写下你的烦恼！ ✨"
    },
    fr: {
        title: "🐶 Horoscope I Ching des Chiots 🐶",
        subtitle: "Trouvez votre réponse avec d'adorables amis chiots.",
        labelConcern: "Qu'est-ce qui vous tracasse ? ✨",
        placeholder: "Décrivez votre souci ici. Les chiots vont vous aider...",
        startButton: "🐾 Commencer 🐾",
        guide: "Secouez la boîte et tirez une ligne (Yao) une par une !",
        disclaimer: "※ Résultats pour le plaisir ! Ne le prenez pas trop au sérieux. 💖",
        retry: "Réessayer 🌸",
        alertConcern: "Dites-moi d'abord votre souci ! ✨"
    },
    de: {
        title: "🐶 Welpen-I-Ging-Horoskop 🐶",
        subtitle: "Finden Sie Ihre Antwort mit entzückenden Welpenfreunden.",
        labelConcern: "Was beschäftigt dich? ✨",
        placeholder: "Beschreibe dein Anliegen hier. Die Welpen werden dir helfen...",
        startButton: "🐾 Starten 🐾",
        guide: "Schüttle die Box und ziehe nacheinander eine Linie (Yao)!",
        disclaimer: "※ Ergebnisse nur zum Spaß! Nicht zu ernst nehmen. 💖",
        retry: "Nochmal 🌸",
        alertConcern: "Erzähl mir zuerst dein Anliegen! ✨"
    },
    es: {
        title: "🐶 Horóscopo I Ching de Cachorros 🐶",
        subtitle: "Encuentra tu respuesta con adorables amigos cachorros.",
        labelConcern: "¿Qué tienes en mente? ✨",
        placeholder: "Describe tu preocupación aquí. Los cachorros te ayudarán...",
        startButton: "🐾 Empezar 🐾",
        guide: "¡Sacude la caja y saca una línea (Yao) una por una!",
        disclaimer: "※ ¡Resultados solo por diversión! No te lo tomes muy en serio. 💖",
        retry: "Reintentar 🌸",
        alertConcern: "¡Cuéntame primero tu preocupación! ✨"
    }
};

// --- 공감 멘트 50개 (다정한 언니 말투) ---
const empathyPhrases = [
    "어머, 그런 일이 있었구나. 혼자서 얼마나 마음이 무거웠을지 상상도 못 하겠어. 🥺",
    "그 고민 때문에 예쁜 얼굴이 살짝 어두워진 건 아니지? 걱정 마, 언니랑 강아지들이 있잖아! ✨",
    "정말 중요한 문제구나! 네가 얼마나 진지하게 생각하고 있는지 언니는 다 느껴져. 💖",
    "마음 한구석이 간질간질하면서도 답답했지? 언니가 토닥토닥 해줄게. 🌸",
    "이렇게 솔직하게 말해줘서 고마워. 너는 참 용기 있는 아이야! 👍",
    "고민이 많다는 건 그만큼 네가 꿈이 많고 멋진 사람이라는 증거야. 🌈",
    "가끔은 길이 안 보일 때도 있지. 하지만 안개 너머엔 항상 예쁜 무지개가 있단다. 🌤️",
    "우리 댕댕이들도 네 고민을 듣고 귀를 쫑긋 세우고 있어. 같이 들어보자! 🐶",
    "세상에서 네가 제일 소중하다는 걸 잊으면 안 돼. 알았지? 약속! 🤙",
    "그 일 때문에 속상했겠구나. 언니가 따뜻한 코코아 같은 말을 전해줄게. ☕",
    "누구에게나 처음은 어렵고 고민되는 법이야. 넌 혼자가 아니야! 🤝",
    "네 예쁜 마음이 다치지 않았으면 좋겠어. 강아지들의 응원을 듬뿍 받아봐! 🎀",
    "생각이 너무 많을 땐 잠시 멈춰도 괜찮아. 언니가 옆에 앉아줄게. 🛋️",
    "네가 하는 모든 고민은 나중에 너를 반짝반짝 빛나게 해줄 보석이 될 거야. 💎",
    "어려운 숙제를 만난 기분이겠지만, 주역 친구들이 힌트를 줄 거야! 📚",
    "그 고민, 우리 강아지 친구들이 꼬리를 살랑살랑 흔들며 같이 해결해주고 싶대! 🐾",
    "네가 적어준 글에서 너의 착하고 예쁜 마음이 듬뿍 묻어나는 것 같아. 🌷",
    "걱정 인형 대신 우리 강아지 친구들을 믿어봐. 훨씬 귀엽고 영리하거든! 🐶",
    "지금은 조금 힘들 수 있어도, 조금만 지나면 다 웃으며 이야기할 날이 올 거야. 😊",
    "언니는 언제나 네 편이야! 이 점괘가 너에게 포근한 위로가 되었으면 좋겠어. 🍭",
    // ... 50개 이상 패턴 생략 (실제 구현 시 풍부하게 포함)
    "마음속의 구름을 걷어내고 밝은 해님을 찾아보자! 언니가 도와줄게. ☀️",
    "네 고민이 눈 녹듯 사라지길 바라는 마음으로 정성껏 괘를 뽑았어. ❄️",
    "너의 간절한 마음이 하늘에 닿았을 거야. 분명 좋은 일이 생길 거야! 🎈",
    "고민을 적는 모습조차 너무 사랑스러운 너, 행운이 널 찾아올 거야. ✨",
    "작은 위로가 너에게 큰 힘이 되었으면 좋겠어. 자, 강아지 조언 들어볼래? 🐾"
];

// --- 주역 소성괘 데이터 ---
const trigrams = {
    "111": { name: "하늘(乾)", interaction: "높고 넓은 마음을 가진 대장님 같아요. 기운이 아주 씩씩하답니다!" },
    "000": { name: "땅(坤)", interaction: "포근하고 부드러운 엄마 품 같아요. 모든 걸 안아주는 힘이 있어요." },
    "100": { name: "우레(震)", interaction: "우르르 쾅쾅! 깜짝 놀랄 만큼 신나고 에너지가 넘치는 친구예요." },
    "011": { name: "바람(巽)", interaction: "살랑살랑 부드럽게 다가와서 마음을 움직이는 요정 같아요." },
    "010": { name: "물(坎)", interaction: "졸졸 흐르는 시냇물처럼 끈기 있게 어려움을 이겨내는 친구랍니다." },
    "101": { name: "불(離)", interaction: "활활 타오르는 촛불처럼 세상을 밝고 예쁘게 비추는 지혜를 가졌어요." },
    "001": { name: "산(艮)", interaction: "듬직한 산처럼 엉덩이를 무겁게 하고 차분하게 기다리는 친구예요." },
    "110": { name: "못(兌)", interaction: "반짝반짝 웃음소리가 들리는 연못처럼 즐거운 친구랍니다." }
};

// --- 움직이는 정면 픽셀 강아지 생성기 (SVG) ---
function generateAnimatedDogSVG(breedId) {
    const colors = ["#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff", "#ffedcf", "#f1c0e8"];
    const mainColor = colors[breedId % colors.length];
    
    return `
    <svg width="180" height="180" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" shape-rendering="pixelated">
        <!-- Face Outline -->
        <rect x="5" y="5" width="10" height="9" fill="${mainColor}" />
        <rect x="4" y="7" width="1" height="5" fill="${mainColor}" />
        <rect x="15" y="7" width="1" height="5" fill="${mainColor}" />
        
        <!-- Ears -->
        <rect x="4" y="4" width="3" height="3" fill="${mainColor}" />
        <rect x="13" y="4" width="3" height="3" fill="${mainColor}" />
        
        <!-- Blushing -->
        <rect x="6" y="10" width="2" height="1" fill="#ff8fa3" opacity="0.6" />
        <rect x="12" y="10" width="2" height="1" fill="#ff8fa3" opacity="0.6" />

        <!-- Eyes (Animated) -->
        <g style="animation: blink 4s infinite;">
            <rect x="7" y="8" width="1" height="1" fill="#000" />
            <rect x="12" y="8" width="1" height="1" fill="#000" />
        </g>

        <!-- Nose & Mouth -->
        <rect x="9" y="10" width="2" height="1" fill="#000" />
        <rect x="10" y="11" width="1" height="1" fill="#ff4d6d" />

        <!-- Tail (Animated) -->
        <rect x="16" y="11" width="2" height="1" fill="${mainColor}" style="transform-origin: 16px 11px; animation: wag 0.5s infinite;" />
    </svg>
    `;
}

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
const hexagramNameDisplay = document.getElementById('hexagram-name');
const hexagramShapeDisplay = document.getElementById('hexagram-shape-display');

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUI();
});

function updateUI() {
    const t = translations[currentLang];
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

    const lowerTri = trigrams[lowerKey];
    const upperTri = trigrams[upperKey];
    
    dogContainer.innerHTML = generateAnimatedDogSVG(parseInt(hexKey, 2));

    // 괘형 표시
    hexagramShapeDisplay.innerHTML = "";
    drawnLines.forEach(line => {
        const miniYao = document.createElement('div');
        miniYao.className = `mini-yao ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        hexagramShapeDisplay.appendChild(miniYao);
    });

    const empathy = empathyPhrases[Math.floor(Math.random() * empathyPhrases.length)];
    const bPart = generateBPart(lowerTri, upperTri);
    
    // C단계 시뮬레이션 (AI가 답변하는 것처럼 구성)
    const cPart = `우리 댕댕이 친구들과 언니가 고민해봤어! "${userConcern}"에 대해 ${upperTri.name}의 지혜와 ${lowerTri.name}의 정성을 합쳐보니, 지금은 마치 작은 씨앗이 땅속에서 봄을 기다리는 것 같아. 너무 서두르지 말고 네 마음속의 목소리를 따라가 봐. 분명 강아지들이 꼬리를 살랑살랑 흔들며 반겨줄 기쁜 소식이 올 거야! ✨`;

    hexagramNameDisplay.textContent = `${upperTri.name}${lowerTri.name} 괘`;
    document.getElementById('user-concern-display').textContent = `Q. "${userConcern}"`;
    
    interpretationSection.innerHTML = `
        <p><strong>🌸 언니의 따뜻한 공감</strong><br>${empathy}</p>
        <p><strong>📚 강아지가 읽어주는 주역 이야기</strong><br>${bPart}</p>
        <p><strong>✨ 너를 위한 맞춤 조언</strong><br>${cPart}</p>
    `;

    // 결과 페이지 자동 번역 (간단 구현)
    if (currentLang !== 'ko') translateResult();
}

function generateBPart(lower, upper) {
    return `있잖아, 네가 뽑은 괘는 아래쪽엔 '${lower.name}'가 있고 위쪽엔 '${upper.name}'가 있는 아주 특별한 모양이야! ${lower.interaction} 그런데 그 위에 ${upper.interaction} 이렇게 두 친구가 만나면 어떤 일이 벌어질까? 마치 포근한 땅 위에 시원한 바람이 부는 것처럼, 지금 네 상황은 서로 돕고 아껴줘야 하는 예쁜 화합의 시기라고 주역이 속삭여주고 있어. 상냥하게 다가가면 모든 게 잘 풀릴 거야!`;
}

function translateResult() {
    // 실제 운영 시에는 여기서 API를 호출하거나 미리 정의된 번역셋을 사용합니다.
    const t = translations[currentLang];
    interpretationSection.querySelectorAll('strong').forEach((el, idx) => {
        if (idx === 0) el.textContent = currentLang === 'en' ? '🌸 My Warm Thoughts' : '🌸';
        if (idx === 1) el.textContent = currentLang === 'en' ? '📚 Puppy I Ching Tale' : '📚';
        if (idx === 2) el.textContent = currentLang === 'en' ? '✨ Special Advice for You' : '✨';
    });
}

document.getElementById('retry-button').addEventListener('click', () => {
    fortuneResult.classList.add('hidden');
    inputView.classList.remove('hidden');
    concernInput.value = "";
});

updateUI();
