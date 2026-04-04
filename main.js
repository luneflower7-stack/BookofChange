
// 주역 64괘 데이터와 강아지 품종 매칭
const iChingData = [
    { symbol: "||||||", name: "건(乾) - 중천건", breed: "golden-retriever", breedName: "골든 리트리버", explanation: "하늘이 겹쳐 있는 형상으로, 순수하고 강력한 창조적 에너지를 의미합니다." },
    { symbol: "¦¦¦¦¦¦", name: "곤(坤) - 중지곤", breed: "basset-hound", breedName: "바셋 하운드", explanation: "땅이 겹쳐 있는 형상으로, 수용적이고 헌신적인 대지의 포용력을 의미합니다." },
    { symbol: "|¦¦|¦¦", name: "진(屯) - 수뢰진", breed: "jack-russell-terrier", breedName: "잭 러셀 테리어", explanation: "어려움 속에서 새싹이 돋아나는 형상으로, 시작의 고통과 희망을 의미합니다." },
    { symbol: "¦¦|¦¦|", name: "몽(蒙) - 산수몽", breed: "pug", breedName: "퍼그", explanation: "안개 속에 가려진 어린 새싹의 형상으로, 배움과 깨달음이 필요한 시기를 의미합니다." },
    { symbol: "|¦¦|||", name: "수(需) - 수천수", breed: "shiba-inu", breedName: "시바견", explanation: "구름이 하늘 위에 가득하나 비가 내리지 않는 형상으로, 인내하며 기다리는 지혜를 의미합니다." },
    { symbol: "|||¦¦|", name: "송(訟) - 천수송", breed: "doberman-pinscher", breedName: "도베르만", explanation: "하늘과 물이 서로 어긋나 다투는 형상으로, 갈등과 소송을 조심해야 함을 의미합니다." },
    { symbol: "¦¦|¦¦¦", name: "사(師) - 지수사", breed: "german-shepherd", breedName: "저먼 셰퍼드", explanation: "땅속에 물이 고여 있는 형상으로, 규율과 리더십이 필요한 군대의 지혜를 의미합니다." },
    { symbol: "¦¦¦|¦¦", name: "비(比) - 수지비", breed: "bichon-frise", breedName: "비숑 프리제", explanation: "땅 위에 물이 흐르며 스며드는 형상으로, 사람들과의 화합과 친밀함을 의미합니다." },
    { symbol: "|||¦||", name: "소축(小畜) - 풍천소축", breed: "chihuahua", breedName: "치와와", explanation: "바람이 하늘 위를 부드럽게 지나는 형상으로, 작은 성취와 내실을 다지는 시기를 의미합니다." },
    { symbol: "||¦|||", name: "리(履) - 천택리", breed: "border-collie", breedName: "보더 콜리", explanation: "호랑이 꼬리를 밟는 듯한 아슬아슬한 형상으로, 예의와 신중함이 필요한 시기를 의미합니다." },
    { symbol: "|||¦¦¦", name: "태(泰) - 지천태", breed: "samoyed", breedName: "사모예드", explanation: "하늘과 땅이 조화를 이루어 만물이 소통하는 형상으로, 평화와 번영을 의미합니다." },
    { symbol: "¦¦¦|||", name: "비(否) - 천지비", breed: "bulldog", breedName: "불독", explanation: "하늘과 땅이 서로 등지고 소통이 막힌 형상으로, 정체와 불통의 시기를 의미합니다." },
    { symbol: "|||¦|", name: "동인(同人) - 천화동인", breed: "labrador-retriever", breedName: "래브라도 리트리버", explanation: "하늘 아래 불이 밝게 비추는 형상으로, 공통의 목표를 가진 사람들의 화합을 의미합니다." },
    { symbol: "|¦||||", name: "대유(大有) - 화천대유", breed: "great-dane", breedName: "그레이트 데인", explanation: "하늘 위에 해가 높이 떠 있는 형상으로, 큰 성취와 풍요로움을 의미합니다." },
    { symbol: "¦¦|¦¦|", name: "겸(謙) - 지산겸", breed: "newfoundland", breedName: "뉴펀들랜드", explanation: "높은 산이 땅 아래로 몸을 낮춘 형상으로, 겸손함이 가져오는 길함을 의미합니다." },
    { symbol: "|¦¦|¦¦", name: "예(豫) - 뇌지예", breed: "welsh-corgi", breedName: "웰시 코기", explanation: "땅 위에 천둥이 울려 퍼지는 형상으로, 즐거움과 미리 준비하는 지혜를 의미합니다." },
    { symbol: "¦¦||¦¦", name: "수(隨) - 택뢰수", breed: "dachshund", breedName: "닥스훈트", explanation: "연못 속에 천둥이 잠긴 형상으로, 순리대로 따르며 기쁨을 찾는 시기를 의미합니다." },
    { symbol: "¦¦|¦¦|", name: "고(蠱) - 산풍고", breed: "scottish-terrier", breedName: "스코티시 테리어", explanation: "산 아래 바람이 멈춰 썩어가는 형상으로, 낡은 것을 고치고 혁신해야 함을 의미합니다." },
    { symbol: "¦¦¦|¦", name: "임(臨) - 지택임", breed: "saint-bernard", breedName: "세인트 버나드", explanation: "땅이 연못을 내려다보는 형상으로, 큰 기운이 다가와 상황을 주도하게 됨을 의미합니다." },
    { symbol: "|¦¦¦¦¦", name: "관(觀) - 풍지관", breed: "afghan-hound", breedName: "아프간 하운드", explanation: "바람이 땅 위를 부드럽게 스치는 형상으로, 상황을 넓게 살피고 통찰하는 지혜를 의미합니다." },
    { symbol: "|¦¦||", name: "서합(噬嗑) - 화뢰서합", breed: "boxer", breedName: "복서", explanation: "입안의 장애물을 씹어 부수는 형상으로, 단호한 결단으로 방해를 제거해야 함을 의미합니다." },
    { symbol: "||¦¦|", name: "비(賁) - 산화비", breed: "poodle", breedName: "푸들", explanation: "산 아래 불이 밝게 비추는 형상으로, 외면의 아름다움과 내면의 조화를 의미합니다." },
    { symbol: "¦¦¦¦¦|", name: "박(剝) - 산지박", breed: "maltese", breedName: "말티즈", explanation: "산이 깎여나가 기반이 위태로운 형상으로, 잠시 멈추고 자신을 지켜야 할 시기를 의미합니다." },
    { symbol: "|¦¦¦¦¦", name: "복(復) - 지뢰복", breed: "yorkshire-terrier", breedName: "요크셔 테리어", explanation: "땅속에서 천둥 소리가 다시 들리는 형상으로, 회복과 새로운 시작의 기운을 의미합니다." },
    { symbol: "|||¦¦¦", name: "무망(无妄) - 천뢰무망", breed: "jindo-dog", breedName: "진돗개", explanation: "하늘 아래 천둥이 치는 자연스러운 형상으로, 꾸밈없는 진실함과 순리를 따름을 의미합니다." },
    { symbol: "¦¦¦|||", name: "대축(大畜) - 산천대축", breed: "alaskan-malamute", breedName: "알래스칸 말라뮤트", explanation: "산속에 하늘의 기운이 담긴 형상으로, 큰 힘을 기르고 지혜를 축적함을 의미합니다." },
    { symbol: "|¦¦¦¦|", name: "이(頤) - 산뢰이", breed: "shih-tzu", breedName: "시추", explanation: "턱의 형상을 닮아 음식을 섭취하는 모습으로, 올바른 양육과 수양의 중요성을 의미합니다." },
    { symbol: "¦||||¦", name: "대과(大過) - 택풍대과", breed: "rottweiler", breedName: "로트와일러", explanation: "연못물이 나무를 덮어 과도한 형상으로, 비상한 각오로 위기를 돌파해야 함을 의미합니다." },
    { symbol: "|¦|¦|¦", name: "감(坎) - 중수감", breed: "irish-setter", breedName: "아이리시 세터", explanation: "험난한 물길이 겹쳐 있는 형상으로, 정직한 마음으로 어려움을 헤쳐나가야 함을 의미합니다." },
    { symbol: "¦|¦|¦|", name: "리(離) - 중화리", breed: "papillon", breedName: "파피용", explanation: "불길이 서로 이어져 타오르는 형상으로, 밝은 지혜와 올바른 집착의 대상을 찾음을 의미합니다." },
    { symbol: "¦¦¦|¦¦", name: "함(咸) - 택산함", breed: "dalmatian", breedName: "달마시안", explanation: "연못이 산 위에 있는 형상으로, 진심 어린 마음이 서로 통하고 감응함을 의미합니다." },
    { symbol: "|¦¦¦¦¦", name: "항(恒) - 뇌풍항", breed: "greyhound", breedName: "그레이하운드", explanation: "천둥과 바람이 조화를 이루는 형상으로, 변치 않는 꾸준함과 성실함을 의미합니다." },
    { symbol: "|||¦¦¦", name: "둔(遯) - 천산둔", breed: "whippet", breedName: "휘핏", explanation: "하늘 아래 산이 멀어지는 형상으로, 물러나서 지혜롭게 자신을 지키는 시기를 의미합니다." },
    { symbol: "¦¦¦|||", name: "대장(大壯) - 뇌천대장", breed: "mastiff", breedName: "마스티프", explanation: "하늘 위에 천둥이 크게 울리는 형상으로, 왕성한 기운을 올바르게 절제해야 함을 의미합니다." },
    { symbol: "|¦¦¦¦", name: "진(晉) - 화지진", breed: "parson-russell-terrier", breedName: "파슨 러셀 테리어", explanation: "땅 위에 해가 솟아오르는 형상으로, 밝은 곳으로 나아가 발전하는 시기를 의미합니다." },
    { symbol: "¦¦¦¦|¦", name: "명이(明夷) - 지화명이", breed: "chow-chow", breedName: "차우차우", explanation: "해가 땅속으로 들어간 형상으로, 어려운 시기에 자신의 빛을 감추고 견디는 지혜를 의미합니다." },
    { symbol: "|¦|¦¦¦", name: "가인(家人) - 풍화가인", breed: "beagle", breedName: "비글", explanation: "바람이 불 위에서 일어나는 형상으로, 가정의 화목과 내부의 질서가 중요함을 의미합니다." },
    { symbol: "¦¦¦|¦|", name: "규(睽) - 화택규", breed: "bull-terrier", breedName: "불 테리어", explanation: "불은 위로, 연못물은 아래로 흐르는 어긋난 형상으로, 다름을 인정하는 지혜를 의미합니다." },
    { symbol: "¦¦|¦|¦", name: "건(蹇) - 수산건", breed: "pekingese", breedName: "페키니즈", explanation: "산 위에 험난한 물이 가로막은 형상으로, 나아가기 어려울 때 잠시 멈추는 지혜를 의미합니다." },
    { symbol: "|¦|¦¦¦", name: "해(解) - 뇌수해", breed: "pomeranian", breedName: "포메라니안", explanation: "겨울의 얼음이 풀리고 비가 내리는 형상으로, 억눌렸던 어려움이 해소됨을 의미합니다." },
    { symbol: "|||¦¦", name: "손(損) - 산택손", breed: "italian-greyhound", breedName: "이탈리안 그레이하운드", explanation: "산 아래 연못이 깊어지는 형상으로, 비우고 덜어냄으로써 더 큰 것을 얻는 지혜를 의미합니다." },
    { symbol: "¦¦|||", name: "익(益) - 풍뢰익", breed: "belgian-shepherd", breedName: "벨기에 셰퍼드", explanation: "바람과 천둥이 서로 도와 기세를 올리는 형상으로, 적극적인 실천으로 이익을 얻음을 의미합니다." },
    { symbol: "|||||¦", name: "쾌(夬) - 택천쾌", breed: "weimaraner", breedName: "와이마라너", explanation: "연못물이 하늘로 솟구치는 형상으로, 결단력 있게 문제를 해결해야 하는 시기를 의미합니다." },
    { symbol: "¦|||||", name: "구(姤) - 천풍구", breed: "saluki", breedName: "살루키", explanation: "하늘 아래 바람이 부는 형상으로, 우연한 만남과 예상치 못한 변화에 대처함을 의미합니다." },
    { symbol: "¦¦¦¦¦¦", name: "췌(萃) - 택지췌", breed: "old-english-sheepdog", breedName: "올드 잉글리시 쉽독", explanation: "땅 위에 연못물이 모여드는 형상으로, 사람과 재물이 모여드는 화합의 시기를 의미합니다." },
    { symbol: "¦¦¦¦¦¦", name: "승(升) - 지풍승", breed: "irish-wolfhound", breedName: "아이리시 울프하운드", explanation: "땅속의 나무가 자라 위로 솟는 형상으로, 순조로운 성장과 수직적인 발전을 의미합니다." },
    { symbol: "¦|¦¦¦¦", name: "곤(困) - 택수곤", breed: "borzoi", breedName: "보르조이", explanation: "연못에 물이 없어 나무가 시드는 형상으로, 어려움 속에서도 신념을 지켜야 함을 의미합니다." },
    { symbol: "¦¦¦¦|¦", name: "정(井) - 수풍정", breed: "bloodhound", breedName: "블러드하운드", explanation: "마르지 않는 우물물의 형상으로, 변치 않는 노력으로 사람들에게 도움을 주는 지혜를 의미합니다." },
    { symbol: "¦|¦¦¦¦", name: "혁(革) - 택화혁", breed: "rhodesian-ridgeback", breedName: "로드리시안 리지백", explanation: "연못 속에 불이 있는 형상으로, 낡은 것을 과감히 버리고 새로워지는 혁명을 의미합니다." },
    { symbol: "¦¦¦¦|¦", name: "정(鼎) - 화풍정", breed: "akita", breedName: "아키타견", explanation: "세 발 솥에서 음식을 익히는 형상으로, 새로운 협력을 통해 안정을 이루는 시기를 의미합니다." },
    { symbol: "|¦¦|¦¦", name: "진(震) - 중뢰진", breed: "siberian-husky", breedName: "시베리안 허스키", explanation: "천둥이 겹쳐서 크게 울리는 형상으로, 갑작스러운 변화에도 침착하게 대처함을 의미합니다." },
    { symbol: "¦¦|¦¦|", name: "간(艮) - 중산간", breed: "shar-pei", breedName: "샤르페이", explanation: "산이 겹쳐 있는 형상으로, 경거망동하지 않고 멈춰 서서 자신을 살피는 지혜를 의미합니다." },
    { symbol: "¦¦||¦|", name: "점(漸) - 풍산점", breed: "cocker-spaniel", breedName: "코커 스패니얼", explanation: "산 위에 나무가 점진적으로 자라는 형상으로, 서두르지 않는 꾸준한 발전을 의미합니다." },
    { symbol: "|¦||¦¦", name: "귀매(歸妹) - 뇌택귀매", breed: "cavalier-king-charles-spaniel", breedName: "캐벌리어 킹 찰스 스패니얼", explanation: "연못 위에 천둥이 치는 형상으로, 순리에 어긋나는 성급한 행동을 조심해야 함을 의미합니다." },
    { symbol: "¦¦|¦¦|", name: "풍(豊) - 뇌화풍", breed: "tibetan-mastiff", breedName: "티베탄 마스티프", explanation: "천둥과 번개가 함께하는 풍성한 형상으로, 가득 찬 풍요로움을 지키는 지혜를 의미합니다." },
    { symbol: "|¦¦|¦¦", name: "려(旅) - 산화려", breed: "basenji", breedName: "바센지", explanation: "산 위에 불이 번져 나가는 형상으로, 나그네처럼 낯선 환경에서의 신중한 태도를 의미합니다." },
    { symbol: "|||¦¦", name: "손(巽) - 중풍손", breed: "whippet", breedName: "휘핏", explanation: "바람이 겹쳐서 부는 형상으로, 부드럽고 유연하게 상황에 순응하는 지혜를 의미합니다." },
    { symbol: "¦¦|||", name: "태(兌) - 중택태", breed: "american-eskimo-dog", breedName: "아메리칸 에스키모 독", explanation: "연못이 겹쳐 있는 형상으로, 기쁨을 나누고 소통하는 즐거움을 의미합니다." },
    { symbol: "¦||¦¦¦", name: "환(渙) - 풍수환", breed: "samoyed", breedName: "사모예드", explanation: "물 위에 바람이 불어 파도가 퍼지는 형상으로, 흩어진 마음을 모으고 갈등을 해소함을 의미합니다." },
    { symbol: "¦¦¦||¦", name: "절(節) - 수택절", breed: "miniature-schnauzer", breedName: "미니어처 슈나우저", explanation: "연못 위에 물이 넘치지 않게 마디가 있는 형상으로, 알맞은 절제와 규칙의 지혜를 의미합니다." },
    { symbol: "||¦¦|", name: "중부(中孚) - 풍택중부", breed: "rough-collie", breedName: "러프 콜리", explanation: "연못 위에 바람이 불어 물결이 화답하는 형상으로, 진실된 마음과 두터운 신뢰를 의미합니다." },
    { symbol: "¦¦||¦¦", name: "소과(小過) - 뇌산소과", breed: "dachshund", breedName: "닥스훈트", explanation: "산 위에 천둥 소리가 낮게 깔리는 형상으로, 작은 일에 정성을 다하며 자중하는 태도를 의미합니다." },
    { symbol: "|¦|¦¦¦", name: "기제(旣濟) - 수화기제", breed: "shiba-inu", breedName: "시바견", explanation: "불 위에 물이 있어 조화를 이룬 완성의 형상으로, 성취 이후의 방심을 경계해야 함을 의미합니다." },
    { symbol: "¦¦¦|¦|", name: "미제(未濟) - 화수미제", breed: "border-collie", breedName: "보더 콜리", explanation: "물 위에 불이 있어 아직 섞이지 않은 형상으로, 새로운 시작을 위한 준비와 희망을 의미합니다." }
];

const fortuneButton = document.getElementById('fortune-button');
const fortuneResult = document.getElementById('fortune-result');
const hexagramSymbol = document.getElementById('hexagram-symbol');
const hexagramName = document.getElementById('hexagram-name');
const hexagramInterpretation = document.getElementById('hexagram-interpretation');
const concernInput = document.getElementById('concern-input');
const dogImage = document.getElementById('dog-image');
const userConcernDisplay = document.getElementById('user-concern-display');

// 해석 생성 엔진 (A, B, C, D 구조)
function generateInterpretation(concern, hexagram) {
    const empathy = [
        `적어주신 "${concern}"에 대한 고민, 혼자서 얼마나 많이 생각하셨을지 그 마음이 깊게 느껴지네요.`,
        `"${concern}" 때문에 마음 한구석이 무거우셨죠? 당신에게 정말 중요한 일이라는 게 글에서도 전해집니다.`,
        `적어주신 고민을 보니 지금 당신이 처한 상황이 얼마나 신중하고 진지한 것인지 충분히 공감이 갑니다.`
    ];

    const actionAdvise = [
        "지금은 서두르기보다 마음의 여유를 가져보시는 건 어떨까요?",
        "당신의 진심을 믿고 조금 더 용기를 내어 한 걸음 내디뎌 보시길 권해드려요.",
        "가끔은 주변의 조언에 귀를 기울이며 천천히 나아가는 것도 좋은 방법이 될 거예요.",
        "지금의 상황을 긍정적으로 받아들이고 본인의 직관을 믿어보세요."
    ];

    const randomEmpathy = empathy[Math.floor(Math.random() * empathy.length)];
    const randomAction = actionAdvise[Math.floor(Math.random() * actionAdvise.length)];

    return `
        <p><strong>A. 공감의 한마디</strong><br>${randomEmpathy}</p>
        <p><strong>B. 추출된 괘의 의미</strong><br>${hexagram.name}는 ${hexagram.explanation}</p>
        <p><strong>C. 고민과 괘의 연결</strong><br>현재 당신의 "${concern}"에 대한 상황은 이 괘의 기운과 맞닿아 있습니다. 괘의 흐름을 보건대, 지금은 ${hexagram.explanation.split('의미합니다')[0]}의 지혜를 발휘하여 이 문제를 바라보는 것이 필요해 보입니다.</p>
        <p><strong>D. 강아지의 조언</strong><br>${hexagram.breedName}처럼 ${randomAction} 주역의 기운이 당신의 길을 밝혀줄 거예요.</p>
    `;
}

fortuneButton.addEventListener('click', () => {
    const concern = concernInput.value.trim();
    if (!concern) {
        alert('먼저 고민을 적어주세요! 당신의 마음을 읽어드릴게요.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * iChingData.length);
    const randomHexagram = iChingData[randomIndex];

    hexagramSymbol.textContent = randomHexagram.symbol;
    hexagramName.textContent = randomHexagram.name;
    
    userConcernDisplay.textContent = `Q. "${concern}"`;
    hexagramInterpretation.innerHTML = generateInterpretation(concern, randomHexagram);

    // 고품질 강아지 이미지 (Dog CEO API 사용 - 실제 견종 이미지)
    // 품종 이름을 API 규격에 맞게 변환 (일부 수정 필요할 수 있음)
    const breedPath = randomHexagram.breed.replace('-', '/');
    fetch(`https://dog.ceo/api/breed/${breedPath}/images/random`)
        .then(res => res.json())
        .then(data => {
            dogImage.src = data.message;
            dogImage.alt = randomHexagram.breedName;
        })
        .catch(() => {
            // 실패 시 대체 이미지
            dogImage.src = `https://placedog.net/500/500?id=${randomIndex}`;
        });

    fortuneResult.classList.remove('hidden');
    fortuneResult.scrollIntoView({ behavior: 'smooth' });
});
