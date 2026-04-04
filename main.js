
const iChingData = [
    { symbol: "||||||", name: "건(乾)", breed: "골든 리트리버", interpretation: "창조적인 에너지와 힘이 넘치는 시기입니다. 당신의 고민에 대해 리트리버처럼 밝고 긍정적인 에너지를 발휘하면 큰 성과를 얻을 수 있습니다." },
    { symbol: "¦¦¦¦¦¦", name: "곤(坤)", breed: "바셋 하운드", interpretation: "수용적인 자세와 인내가 필요한 시기입니다. 고민을 서두르기보다 바셋 하운드처럼 느긋하고 차분하게 순리에 따르면 길합니다." },
    { symbol: "|¦¦|¦¦", name: "진(屯)", breed: "잭 러셀 테리어", interpretation: "어려움 속에서 새로운 시작을 의미합니다. 잭 러셀 테리어처럼 활기차게 도전하되, 신중하게 나아가야 합니다." },
    { symbol: "¦¦|¦¦|", name: "몽(蒙)", breed: "퍼그", interpretation: "어리석음을 깨우쳐야 할 시기입니다. 퍼그처럼 순수한 마음으로 스승이나 조언자의 도움을 구해보세요." },
    { symbol: "|¦¦|||", name: "수(需)", breed: "시바견", interpretation: "기다림의 지혜가 필요한 때입니다. 시바견처럼 인내심을 갖고 조급해하지 말고 때를 기다리세요." },
    { symbol: "|||¦¦|", name: "송(訟)", breed: "도베르만", interpretation: "다툼과 갈등의 시기입니다. 도베르만처럼 경계심은 갖되, 불필요한 논쟁은 피하는 것이 좋습니다." },
    { symbol: "¦¦|¦¦¦", name: "사(師)", breed: "저먼 셰퍼드", interpretation: "리더십과 조직력이 필요한 시기입니다. 셰퍼드처럼 든든한 리더가 되어 고민을 해결할 팀을 이끌어보세요." },
    { symbol: "¦¦¦|¦¦", name: "비(比)", breed: "비숑 프리제", interpretation: "친목과 협력이 중요한 시기입니다. 비숑처럼 다정하게 주변 사람들과 좋은 관계를 유지하면 고민이 해결됩니다." },
    { symbol: "|||¦||", name: "소축(小畜)", breed: "치와와", interpretation: "작은 결실을 맺는 시기입니다. 치와와처럼 작지만 당차게, 큰 욕심을 부리지 않는 것이 좋습니다." },
    { symbol: "||¦|||", name: "리(履)", breed: "보더 콜리", interpretation: "예의와 조심성이 필요한 시기입니다. 영리한 보더 콜리처럼 상황을 잘 판단하고 신중하게 행동하세요." },
    { symbol: "|||¦¦¦", name: "태(泰)", breed: "사모예드", interpretation: "평화롭고 안정된 시기입니다. 사모예드의 미소처럼 모든 일이 순조롭고 행복하게 풀릴 것입니다." },
    { symbol: "¦¦¦|||", name: "비(否)", breed: "잉글리시 불독", interpretation: "불통과 막힘의 시기입니다. 불독처럼 묵묵히 견디며 겸손하게 대처하면 어려움을 극복할 수 있습니다." },
    { symbol: "|||¦|", name: "동인(同人)", breed: "래브라도 리트리버", interpretation: "마음이 맞는 사람들과 함께하면 좋은 결과를 얻습니다. 래브라도처럼 사교성을 발휘해 협력하세요." },
    { symbol: "|¦||||", name: "대유(大有)", breed: "그레이트 데인", interpretation: "크게 소유하고 풍요로운 시기입니다. 그레이트 데인처럼 당당하되 겸손함을 잃지 말아야 합니다." },
    { symbol: "¦¦|¦¦|", name: "겸(謙)", breed: "뉴펀들랜드", interpretation: "겸손이 미덕인 시기입니다. 뉴펀들랜드처럼 젠틀하게 자신을 낮추면 주변의 존경과 도움을 받게 됩니다." },
    { symbol: "|¦¦|¦¦", name: "웰시 코기", breed: "웰시 코기", interpretation: "미리 준비하고 대비하는 자세가 필요한 시기입니다. 코기처럼 짧은 다리로도 부지런히 움직여 대비하세요." },
    { symbol: "¦¦||¦¦", name: "수(隨)", breed: "닥스훈트", interpretation: "다른 사람을 따르는 것이 이로운 시기입니다. 닥스훈트처럼 유연하게 순응하는 자세가 필요합니다." },
    { symbol: "¦¦|¦¦|", name: "고(蠱)", breed: "스코티시 테리어", interpretation: "개혁이 필요한 시기입니다. 스코티시 테리어처럼 단호하게 잘못된 점을 고쳐나가야 합니다." },
    { symbol: "¦¦¦|¦", name: "임(臨)", breed: "세인트 버나드", interpretation: "높은 위치에서 리더십을 발휘할 때입니다. 세인트 버나드처럼 듬직하게 고민을 마주하세요." },
    { symbol: "|¦¦¦¦¦", name: "관(觀)", breed: "아프간 하운드", interpretation: "상황을 잘 관찰해야 할 시기입니다. 아프간 하운드처럼 우아하고 신중하게 태도를 유지하세요." },
    { symbol: "|¦¦||", name: "서합(噬嗑)", breed: "복서", interpretation: "장애물을 부수는 형상입니다. 복서처럼 파이팅 넘치게 문제를 해결해야 합니다." },
    { symbol: "||¦¦|", name: "비(賁)", breed: "푸들", interpretation: "내실을 다지는 것이 중요합니다. 푸들처럼 외면의 화려함보다 내면의 지혜를 가꾸세요." },
    { symbol: "¦¦¦¦¦|", name: "박(剝)", breed: "말티즈", interpretation: "기반이 흔들릴 수 있으니 조심해야 합니다. 말티즈처럼 예민하고 신중하게 주변을 살피세요." },
    { symbol: "|¦¦¦¦¦", name: "복(復)", breed: "요크셔 테리어", interpretation: "새로운 시작과 회복을 의미합니다. 요크셔 테리어처럼 활기찬 희망을 가져도 좋습니다." },
    { symbol: "|||¦¦¦", name: "무망(无妄)", breed: "진돗개", interpretation: "망령된 행동을 하지 말아야 할 때입니다. 진돗개처럼 충직하고 진실된 마음을 유지하세요." },
    { symbol: "¦¦¦|||", name: "대축(大축)", breed: "알래스칸 말라뮤트", interpretation: "크게 쌓고 축적하는 시기입니다. 말라뮤트처럼 인내심을 갖고 노력하면 큰 성공을 거듭니다." },
    { symbol: "|¦¦¦¦|", name: "이(頤)", breed: "시추", interpretation: "자신을 기르고 수양해야 할 때입니다. 시추처럼 평온하게 내면을 채우는 데 집중하세요." },
    { symbol: "¦||||¦", name: "대과(大過)", breed: "로트와일러", interpretation: "지나치게 과도한 상황입니다. 로트와일러처럼 강력한 자제력으로 균형을 잡는 것이 중요합니다." },
    { symbol: "|¦|¦|¦", name: "감(坎)", breed: "아이리시 세터", interpretation: "험난한 물길이 겹쳐 있습니다. 아이리시 세터처럼 지치지 않는 열정으로 지혜롭게 헤쳐나가야 합니다." },
    { symbol: "¦|¦|¦|", name: "리(離)", breed: "파피용", interpretation: "밝은 불이 타오르는 형상입니다. 파피용처럼 명민하게 판단하고 행동해야 합니다." },
    { symbol: "¦¦¦|¦¦", name: "함(咸)", breed: "달마시안", interpretation: "서로 감응하는 형상입니다. 달마시안처럼 매력적인 모습으로 새로운 인연을 맞이하세요." },
    { symbol: "|¦¦¦¦¦", name: "항(恒)", breed: "그레이하운드", interpretation: "변치 않는 꾸준함이 중요합니다. 그레이하운드처럼 목표를 향해 멈추지 말고 나아가세요." },
    { symbol: "|||¦¦¦", name: "둔(遯)", breed: "휘핏", interpretation: "물러나 피하는 것이 이로운 시기입니다. 휘핏처럼 빠르게 상황을 판단하고 잠시 숨을 고르세요." },
    { symbol: "¦¦¦|||", name: "대장(大壯)", breed: "마스티프", interpretation: "힘이 크게 장성한 시기입니다. 마스티프처럼 힘을 가졌을 때 더욱 조심하고 자제해야 합니다." },
    { symbol: "|¦¦¦¦", name: "진(晉)", breed: "파슨 러셀 테리어", interpretation: "발전과 성장의 시기입니다. 테리어처럼 활발하게 밝은 곳으로 나아가세요." },
    { symbol: "¦¦¦¦|¦", name: "명이(明夷)", breed: "차우차우", interpretation: "어려운 시기이지만 희망을 잃지 마세요. 차우차우처럼 묵묵히 견디며 때를 기다리세요." },
    { symbol: "|¦|¦¦¦", name: "가인(家人)", breed: "비글", interpretation: "가족의 화목이 중요합니다. 비글처럼 명랑하게 가정의 분위기를 이끌어보세요." },
    { symbol: "¦¦¦|¦|", name: "규(睽)", breed: "불 테리어", interpretation: "반목과 갈등이 있는 형상입니다. 불 테리어처럼 개성 넘치게 갈등을 해결하려 노력하세요." },
    { symbol: "¦¦|¦|¦", name: "건(蹇)", breed: "페키니즈", interpretation: "나아가기 어려운 형상입니다. 페키니즈처럼 자존감을 지키며 잠시 멈춰 상황을 살피세요." },
    { symbol: "|¦|¦¦¦", name: "해(解)", breed: "포메라니안", interpretation: "어려움이 풀리는 시기입니다. 포메라니안처럼 가뿐한 마음으로 문제 해결의 실마리를 찾으세요." },
    { symbol: "|||¦¦", name: "손(損)", breed: "이탈리안 그레이하운드", interpretation: "덜어내는 것이 이로운 시기입니다. 가벼운 몸짓처럼 욕심을 비우면 얻는 것이 있습니다." },
    { symbol: "¦¦|||", name: "익(益)", breed: "벨기에 셰퍼드", interpretation: "적극적으로 행동하면 이익을 얻습니다. 당신의 고민에 대해 벨기에 셰퍼드처럼 기민하게 노력을 더해보세요." },
    { symbol: "|||||¦", name: "쾌(夬)", breed: "와이마라너", interpretation: "결단력이 필요한 때입니다. 와이마라너처럼 예리하게 상황을 파악하고 과감히 결정하세요." },
    { symbol: "¦|||||", name: "구(姤)", breed: "살루키", interpretation: "우연한 만남을 의미합니다. 살루키처럼 신비로운 우연이 당신의 고민에 답을 줄 수 있습니다." },
    { symbol: "¦¦¦¦¦¦", name: "췌(萃)", breed: "올드 잉글리시 쉽독", interpretation: "사람들이 모여드는 형상입니다. 쉽독처럼 포근하게 사람들을 모으고 이끄세요." },
    { symbol: "¦¦¦¦¦¦", name: "승(升)", breed: "아이리시 울프하운드", interpretation: "위로 올라가는 성장과 발전의 기회입니다. 울프하운드처럼 당당하게 나아가세요." },
    { symbol: "¦|¦¦¦¦", name: "곤(困)", breed: "보르조이", interpretation: "곤란한 상황입니다. 보르조이처럼 고고하게 인내심을 갖고 이겨내야 합니다." },
    { symbol: "¦¦¦¦|¦", name: "정(井)", breed: "블러드하운드", interpretation: "변함없이 도움을 주는 존재가 되세요. 블러드하운드처럼 끈기 있게 근원을 찾으세요." },
    { symbol: "¦|¦¦¦¦", name: "혁(革)", breed: "로드리시안 리지백", interpretation: "변화를 두려워하지 말고 개혁하세요. 리지백처럼 용감하게 새로운 길을 여세요." },
    { symbol: "¦¦¦¦|¦", name: "정(鼎)", breed: "아키타견", interpretation: "안정된 기반 위에서 새로운 것을 도모하세요. 아키타처럼 충직하게 자리를 지키세요." },
    { symbol: "|¦¦|¦¦", name: "진(震)", breed: "시베리안 허스키", interpretation: "놀라운 일이 일어날 수 있습니다. 허스키처럼 활기차게, 하지만 침착하게 대응하세요." },
    { symbol: "¦¦|¦¦|", name: "간(艮)", breed: "샤르페이", interpretation: "산처럼 멈춰 서서 자신을 돌아보세요. 샤르페이처럼 신중하게 자리를 지키세요." },
    { symbol: "¦¦||¦|", name: "점(漸)", breed: "코커 스패니얼", interpretation: "차근차근 점진적으로 나아가는 것이 좋습니다. 스패니얼처럼 다정하고 꾸준하게 움직이세요." },
    { symbol: "|¦||¦¦", name: "귀매(歸妹)", breed: "캐벌리어 킹 찰스 스패니얼", interpretation: "순리대로 따르는 것이 좋습니다. 우아하게 상황에 순응하며 길을 찾으세요." },
    { symbol: "¦¦|¦¦|", name: "풍(豊)", breed: "티베탄 마스티프", interpretation: "풍요롭고 성대한 시기입니다. 마스티프처럼 묵직하게 풍요를 나누고 지키세요." },
    { symbol: "|¦¦|¦¦", name: "려(旅)", breed: "바센지", interpretation: "불안정한 상황입니다. 바센지처럼 예민하게 주변을 살피고 신중히 행동하세요." },
    { symbol: "|||¦¦", name: "손(巽)", breed: "휘핏", interpretation: "바람처럼 부드럽고 겸손한 태도가 필요한 시기입니다." },
    { symbol: "¦¦|||", name: "태(兌)", breed: "아메리칸 에스키모 독", interpretation: "기쁨과 즐거움이 가득한 시기입니다. 에스키모 독처럼 밝게 웃으며 즐거움을 나누세요." },
    { symbol: "¦||¦¦¦", name: "환(渙)", breed: "사모예드", interpretation: "혼란을 수습하고 다시 모아야 합니다. 사모예드처럼 따뜻하게 사람들의 마음을 녹이세요." },
    { symbol: "¦¦¦||¦", name: "절(節)", breed: "미니어처 슈나우저", interpretation: "절제와 절약이 필요한 시기입니다. 슈나우저처럼 똑똑하게 계획적으로 생활하세요." },
    { symbol: "||¦¦|", name: "중부(中孚)", breed: "러프 콜리", interpretation: "진실된 마음으로 신뢰를 쌓아야 할 때입니다. 콜리처럼 영리하고 정직하게 대처하세요." },
    { symbol: "¦¦||¦¦", name: "소과(小過)", breed: "닥스훈트", interpretation: "세심한 주의가 필요한 시기입니다. 닥스훈트처럼 낮은 자세로 꼼꼼히 살피세요." },
    { symbol: "|¦|¦¦¦", name: "기제(旣濟)", breed: "시바견", interpretation: "이미 성취한 상태입니다. 안주하지 말고 다음을 준비하는 영리함을 보여주세요." },
    { symbol: "¦¦¦|¦|", name: "미제(未濟)", breed: "보더 콜리", interpretation: "아직 완성되지 않았습니다. 콜리처럼 열정적으로 끝까지 최선을 다하세요." }
];

const fortuneButton = document.getElementById('fortune-button');
const fortuneResult = document.getElementById('fortune-result');
const hexagramSymbol = document.getElementById('hexagram-symbol');
const hexagramName = document.getElementById('hexagram-name');
const hexagramInterpretation = document.getElementById('hexagram-interpretation');
const concernInput = document.getElementById('concern-input');
const dogImage = document.getElementById('dog-image');
const userConcernDisplay = document.getElementById('user-concern-display');

fortuneButton.addEventListener('click', () => {
    const concern = concernInput.value.trim();
    if (!concern) {
        alert('먼저 고민을 적어주세요! 강아지가 답변해줄게요.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * iChingData.length);
    const randomHexagram = iChingData[randomIndex];

    hexagramSymbol.textContent = randomHexagram.symbol;
    hexagramName.textContent = randomHexagram.name + " (" + randomHexagram.breed + ")";
    
    // 고민을 결과에 반영
    userConcernDisplay.textContent = `"${concern}"에 대한 답변:`;
    hexagramInterpretation.textContent = randomHexagram.interpretation;

    // 픽셀 아트 스타일을 위해 robohash 사용 (set4: 고양이/작은동물 세트가 픽셀 느낌에 가까움)
    dogImage.src = `https://robohash.org/${randomHexagram.breed}?set=set4&size=150x150`;
    dogImage.alt = randomHexagram.breed;

    fortuneResult.classList.remove('hidden');
    fortuneResult.scrollIntoView({ behavior: 'smooth' });
});
