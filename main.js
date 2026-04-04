
const iChingData = [
    { symbol: "||||||", name: "건(乾)", interpretation: "창조적인 에너지와 힘이 넘치는 시기입니다. 적극적으로 행동하면 큰 성과를 얻을 수 있습니다." },
    { symbol: "¦¦¦¦¦¦", name: "곤(坤)", interpretation: "수용적인 자세와 인내가 필요한 시기입니다. 순리에 따르면 길합니다." },
    { symbol: "|¦¦|¦¦", name: "진(屯)", interpretation: "어려움 속에서 새로운 시작을 의미합니다. 신중하게 나아가야 합니다." },
    { symbol: "¦¦|¦¦|", name: "몽(蒙)", interpretation: "어리석음을 깨우쳐야 할 시기입니다. 스승이나 조언자의 도움이 필요합니다." },
    { symbol: "|¦¦|||", name: "수(需)", interpretation: "기다림의 지혜가 필요한 때입니다. 조급해하지 말고 때를 기다리세요." },
    { symbol: "|||¦¦|", name: "송(訟)", interpretation: "다툼과 갈등의 시기입니다. 소송이나 논쟁은 피하는 것이 좋습니다." },
    { symbol: "¦¦|¦¦¦", name: "사(師)", interpretation: "리더십과 조직력이 필요한 시기입니다. 많은 사람을 이끌게 될 수 있습니다." },
    { symbol: "¦¦¦|¦¦", name: "비(比)", interpretation: "친목과 협력이 중요한 시기입니다. 주변 사람들과 좋은 관계를 유지하세요." },
    { symbol: "|||¦||", name: "소축(小畜)", interpretation: "작은 결실을 맺는 시기입니다. 큰 욕심을 부리지 않는 것이 좋습니다." },
    { symbol: "||¦|||", name: "리(履)", interpretation: "예의와 조심성이 필요한 시기입니다. 윗사람을 공경하고 신중하게 행동하세요." },
    { symbol: "|||¦¦¦", name: "태(泰)", interpretation: "평화롭고 안정된 시기입니다. 모든 일이 순조롭게 풀립니다." },
    { symbol: "¦¦¦|||", name: "비(否)", interpretation: "불통과 막힘의 시기입니다. 어려움이 따르지만, 겸손하게 대처하면 극복할 수 있습니다." },
    { symbol: "|||¦|", name: "동인(同人)", interpretation: "마음이 맞는 사람들과 함께하면 좋은 결과를 얻습니다. 협력이 중요합니다." },
    { symbol: "|¦||||", name: "대유(大有)", interpretation: "크게 소유하고 풍요로운 시기입니다. 겸손함을 잃지 말아야 합니다." },
    { symbol: "¦¦|¦¦|", name: "겸(謙)", interpretation: "겸손이 미덕인 시기입니다. 자신을 낮추면 존경을 받게 됩니다." },
    { symbol: "|¦¦|¦¦", name: "예(豫)", interpretation: "미리 준비하고 대비하는 자세가 필요한 시기입니다." },
    { symbol: "¦¦||¦¦", name: "수(隨)", interpretation: "다른 사람을 따르는 것이 이로운 시기입니다. 순응의 자세가 필요합니다." },
    { symbol: "¦¦|¦¦|", name: "고(蠱)", interpretation: "썩고 병든 것을 개혁해야 할 시기입니다. 과감한 결단이 필요합니다." },
    { symbol: "¦¦¦|¦", name: "임(臨)", interpretation: "높은 위치에서 아래를 내려다보는 형상입니다. 리더십을 발휘할 때입니다." },
    { symbol: "|¦¦¦¦¦", name: "관(觀)", interpretation: "주변 상황을 잘 살피고 관찰해야 할 시기입니다. 신중한 태도가 중요합니다." },
    { symbol: "|¦¦||", name: "서합(噬嗑)", interpretation: "장애물을 깨물어 부수는 형상입니다. 결단력 있게 문제를 해결해야 합니다." },
    { symbol: "||¦¦|", name: "비(賁)", interpretation: "꾸미고 장식하는 것을 의미합니다. 외면보다는 내실을 다지는 것이 중요합니다." },
    { symbol: "¦¦¦¦¦|", name: "박(剝)", interpretation: "침상이 무너지는 형상으로, 현재의 기반이 흔들릴 수 있습니다. 조심해야 합니다." },
    { symbol: "|¦¦¦¦¦", name: "복(復)", interpretation: "새로운 시작, 회복을 의미합니다. 희망을 가져도 좋습니다." },
    { symbol: "|||¦¦¦", name: "무망(无妄)", interpretation: "망령된 행동을 하지 말아야 할 때입니다. 순수하고 진실된 마음을 유지하세요." },
    { symbol: "¦¦¦|||", name: "대축(大畜)", interpretation: "크게 쌓고 축적하는 시기입니다. 인내심을 갖고 노력하면 큰 성공을 거둡니다." },
    { symbol: "|¦¦¦¦|", name: "이(頤)", interpretation: "음식을 섭취하는 것처럼, 자신을 기르고 수양해야 할 때입니다." },
    { symbol: "¦||||¦", name: "대과(大過)", interpretation: "지나치게 과도한 상황입니다. 균형을 잡는 것이 중요합니다." },
    { symbol: "|¦|¦|¦", name: "감(坎)", interpretation: "험난한 물길이 겹쳐 있는 형상입니다. 어려움이 많지만, 지혜롭게 헤쳐나가야 합니다." },
    { symbol: "¦|¦|¦|", name: "리(離)", interpretation: "밝은 불이 타오르는 형상입니다. 명확하게 판단하고 행동해야 합니다." },
    { symbol: "¦¦¦|¦¦", name: "함(咸)", interpretation: "남녀가 서로 감응하는 형상입니다. 새로운 인연이나 사랑의 시작을 의미합니다." },
    { symbol: "|¦¦¦¦¦", name: "항(恒)", interpretation: "오래도록 변치 않는 것을 의미합니다. 꾸준함과 성실함이 중요합니다." },
    { symbol: "|||¦¦¦", name: "둔(遯)", interpretation: "물러나 피하는 것이 이로운 시기입니다. 잠시 숨을 고르는 지혜가 필요합니다." },
    { symbol: "¦¦¦|||", name: "대장(大壯)", interpretation: "힘이 크게 장성한 시기입니다. 힘을 남용하지 않도록 조심해야 합니다." },
    { symbol: "|¦¦¦¦", name: "진(晉)", interpretation: "밝은 곳으로 나아가는 형상입니다. 발전과 성장의 시기입니다." },
    { symbol: "¦¦¦¦|¦", name: "명이(明夷)", interpretation: "밝음이 땅속으로 들어간 형상입니다. 어려운 시기이지만, 희망을 잃지 말아야 합니다." },
    { symbol: "|¦|¦¦¦", name: "가인(家人)", interpretation: "가족의 화목이 중요한 시기입니다. 가정에 충실하세요." },
    { symbol: "¦¦¦|¦|", name: "규(睽)", interpretation: "서로 반목하고 등 돌리는 형상입니다. 갈등을 해결하려는 노력이 필요합니다." },
    { symbol: "¦¦|¦|¦", name: "건(蹇)", interpretation: "절뚝거리며 나아가기 어려운 형상입니다. 잠시 멈춰서 상황을 살펴보는 것이 좋습니다." },
    { symbol: "|¦|¦¦¦", name: "해(解)", interpretation: "어려움이 풀리는 시기입니다. 문제 해결의 실마리가 보입니다." },
    { symbol: "|||¦¦", name: "손(損)", interpretation: "덜어내는 것이 이로운 시기입니다. 욕심을 버리고 비우면 얻는 것이 있습니다." },
    { symbol: "¦¦|||", name: "익(益)", interpretation: "더하는 것이 이로운 시기입니다. 적극적으로 행동하면 이익을 얻습니다." },
    { symbol: "|||||¦", name: "쾌(夬)", interpretation: "결단력 있게 제거해야 할 것이 있습니다. 과감한 결정이 필요한 때입니다." },
    { symbol: "¦|||||", name: "구(姤)", interpretation: "우연한 만남을 의미합니다. 예상치 못한 인연이나 사건이 발생할 수 있습니다." },
    { symbol: "¦¦¦¦¦¦", name: "췌(萃)", interpretation: "사람들이 모여드는 형상입니다. 리더십을 발휘하여 사람들을 모으세요." },
    { symbol: "¦¦¦¦¦¦", name: "승(升)", interpretation: "위로 올라가는 형상입니다. 성장과 발전의 기회가 있습니다." },
    { symbol: "¦|¦¦¦¦", name: "곤(困)", interpretation: "어려움에 처해 곤란한 상황입니다. 인내심을 갖고 극복해야 합니다." },
    { symbol: "¦¦¦¦|¦", name: "정(井)", interpretation: "우물처럼 변함없이 사람들에게 도움을 주는 존재가 되세요." },
    { symbol: "¦|¦¦¦¦", name: "혁(革)", interpretation: "낡은 것을 개혁하고 새로워져야 할 때입니다. 변화를 두려워하지 마세요." },
    { symbol: "¦¦¦¦|¦", name: "정(鼎)", interpretation: "세 발 솥처럼 안정된 기반 위에서 새로운 것을 도모해야 합니다." },
    { symbol: "|¦¦|¦¦", name: "진(震)", interpretation: "우레가 치는 것처럼 놀라운 일이 일어날 수 있습니다. 침착하게 대응하세요." },
    { symbol: "¦¦|¦¦|", name: "간(艮)", interpretation: "산처럼 멈춰 서서 자신을 돌아볼 때입니다. 경거망동을 삼가세요." },
    { symbol: "¦¦||¦|", name: "점(漸)", interpretation: "차근차근 점진적으로 나아가는 것이 좋습니다. 서두르지 마세요." },
    { symbol: "|¦||¦¦", name: "귀매(歸妹)", interpretation: "시집가는 누이의 형상으로, 순리대로 따르는 것이 좋습니다." },
    { symbol: "¦¦|¦¦|", name: "풍(豊)", interpretation: "풍요롭고 성대한 시기입니다. 겸손함을 잃지 말고 주변에 베푸세요." },
    { symbol: "|¦¦|¦¦", name: "려(旅)", interpretation: "나그네처럼 외롭고 불안정한 상황입니다. 신중하게 행동해야 합니다." },
    { symbol: "|||¦¦", name: "손(巽)", interpretation: "바람처럼 부드럽고 겸손한 태도가 필요한 시기입니다." },
    { symbol: "¦¦|||", name: "태(兌)", interpretation: "기쁨과 즐거움이 가득한 시기입니다. 사람들과 함께 즐거움을 나누세요." },
    { symbol: "¦||¦¦¦", name: "환(渙)", interpretation: "흩어지고 흩어지는 형상입니다. 혼란을 수습하고 다시 모아야 합니다." },
    { symbol: "¦¦¦||¦", name: "절(節)", interpretation: "절제와 절약이 필요한 시기입니다. 낭비를 줄이고 계획적으로 생활하세요." },
    { symbol: "||¦¦|", name: "중부(中孚)", interpretation: "진실된 마음으로 신뢰를 쌓아야 할 때입니다. 정직함이 중요합니다." },
    { symbol: "¦¦||¦¦", name: "소과(小過)", interpretation: "작은 실수가 있을 수 있으니, 세심한 주의가 필요한 시기입니다." },
    { symbol: "|¦|¦¦¦", name: "기제(旣濟)", interpretation: "이미 모든 것이 이루어진 상태입니다. 현재의 성공에 안주하지 말고 다음을 준비하세요." },
    { symbol: "¦¦¦|¦|", name: "미제(未濟)", interpretation: "아직 완성되지 않은 상태입니다. 희망을 갖고 계속 나아가야 합니다." }
];

const fortuneButton = document.getElementById('fortune-button');
const fortuneResult = document.getElementById('fortune-result');
const hexagramSymbol = document.getElementById('hexagram-symbol');
const hexagramName = document.getElementById('hexagram-name');
const hexagramInterpretation = document.getElementById('hexagram-interpretation');

fortuneButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * iChingData.length);
    const randomHexagram = iChingData[randomIndex];

    hexagramSymbol.textContent = randomHexagram.symbol;
    hexagramName.textContent = randomHexagram.name;
    hexagramInterpretation.textContent = randomHexagram.interpretation;

    fortuneResult.classList.remove('hidden');
});
