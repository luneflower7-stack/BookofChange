
// --- (0) Internationalization Data ---
const i18n = {
    ko: {
        title: "🐶 주역천재 멍선생 🐶",
        subtitle: "당신의 고민을 사랑스러운 강아지와 함께 주역으로 풀어보세요.",
        labelConcern: "어떤 게 궁금해? 멍멍이 친구들이 알려줄게! ✨",
        placeholder: "여기에 고민을 구체적으로 적어주면 강아지 친구들이 도와줄 거야...",
        startButton: "🐾 운세 시작하기 🐾",
        divinationGuide: (count) => `나무통을 흔들어서 효(爻)를 하나씩 뽑아보자! (${count}/6)`,
        analyzing: "강아지가 우주의 기운을 모아 네 고민을 분석 중이야... 🐾",
        dogBreedLabel: "당신에게 운세를 전달해주는 강아지 : ",
        retryButton: "다시 해보기 🌸",
        disclaimer: "※ 주역 운세는 참고용일 뿐이야! 너무 맹신하지 말고 재미로만 봐줘~ 💖",
        alertEmptyConcern: "어떤 게 궁금해? 고민을 먼저 적어줘! ✨",
        qPrefix: "Q. ",
        empathy: "네 고민을 가만히 들여다보니 그동안 얼마나 마음을 썼을지 충분히 느껴져서 내 마음도 뭉클해지네. 혼자서 해결책을 찾으려 애썼을 네 예쁜 마음을 꼭 안아주고 싶어. 이제 주역의 지혜를 빌려 같이 길을 찾아보자.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `네가 뽑은 운세는 하괘 **${lower}**와 상괘 **${upper}**이 만난 조합이야. ${lowerDesc}의 기운 위에 ${upperDesc}의 흐름이 더해진 아주 특별한 상황이지.`,
        defaultHexName: "신비로운 괘",
        navHome: "홈",
        navAbout: "소개",
        navPrivacy: "개인정보처리방침",
        visitorLabel: "방문자",
        visitorLoading: "불러오는 중...",
        aboutTitle: "주역천재 멍선생 소개",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">서비스 안내</h3>
                        <p><strong>주역천재 멍선생</strong>은 사용자가 직접 입력한 고민을 바탕으로 주역의 상징과 흐름을 현대적인 언어로 풀어 설명하는 해석형 콘텐츠 서비스입니다. 단순히 결과만 보여주는 운세 버튼이 아니라, 질문을 정리하고 현재 상황을 돌아보며 스스로 판단의 실마리를 찾도록 돕는 것을 목표로 합니다.</p>
                        <p>이 사이트에서 제공하는 글과 해설은 직접 기획한 설명 문구, 서비스 소개, 이용 가이드, 주역 해석 방향을 바탕으로 구성되어 있습니다. 각 결과는 재미 요소를 포함하지만, 사용자가 자신의 상황을 천천히 성찰해 볼 수 있도록 문장 톤과 안내 방식을 세심하게 설계했습니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">주역천재 멍선생이 제공하는 것</h3>
                        <p>이 서비스는 고민을 짧게 던지고 끝나는 일회성 재미 요소에 머물지 않도록 설계되었습니다. 사용자는 자신의 상황을 구체적으로 적고, 점괘가 상징하는 흐름을 읽으며 현재의 감정, 관계, 일, 선택지에 대해 다시 생각해 볼 수 있습니다.</p>
                        <p>주역의 64괘는 각각 다른 상황의 변화, 균형, 충돌, 회복, 성장의 이미지를 담고 있습니다. 저희는 이 상징을 현대적인 고민 상황에 맞게 설명하여 누구나 어렵지 않게 읽을 수 있는 언어로 전달합니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">이용 방법</h3>
                        <ol class="feature-list">
                            <li>현재 가장 고민되는 상황을 구체적으로 적어 주세요. 막연한 질문보다 실제 맥락이 담긴 문장이 더 좋은 해석으로 이어집니다.</li>
                            <li>효를 하나씩 뽑으며 결과를 기다려 주세요. 이 과정은 단순한 장식이 아니라, 사용자가 질문에 집중하도록 돕는 연출입니다.</li>
                            <li>결과가 나오면 괘의 이름, 상징, 조언을 읽고 지금 내 상황과 어떤 연결이 있는지 차분히 비교해 보세요.</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">해석 원칙</h3>
                        <p>주역천재 멍선생은 자극적인 단정 대신 해석과 성찰 중심의 문장을 우선합니다. 건강, 법률, 투자처럼 신중한 판단이 필요한 영역에서 확정적 결론을 대신하지 않으며, 사용자가 자신의 현실 정보를 함께 고려하도록 안내합니다.</p>
                        <p>또한 사용자가 불안이나 기대에 지나치게 휩쓸리지 않도록 부드럽고 균형 잡힌 어조를 유지합니다. 이 점은 전통 점술을 현대 웹 서비스로 풀어낼 때 가장 중요하게 생각한 운영 기준입니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">서비스 소개</h3>
                        <p><strong>주역천재 멍선생</strong>은 고대 동양의 깊은 지혜인 주역(I Ching)을 현대적인 인공지능 기술과 친근한 강아지 캐릭터를 통해 재해석한 프리미엄 운세 서비스입니다.</p>
                        <p>저희 서비스는 사용자가 일상에서 마주하는 다양한 고민들을 다정하고 따뜻한 시선으로 바라보고자 합니다. 단순히 미래를 예견하는 것을 넘어, 주역의 64괘가 담고 있는 철학적인 통찰을 통해 사용자가 스스로 답을 찾아갈 수 있도록 영감을 주는 것을 목표로 합니다.</p>
                        <p><strong>제공 서비스의 특징:</strong></p>
                        <ul>
                            <li><strong>개인화된 점괘 분석:</strong> 사용자가 입력한 구체적인 고민 내용을 바탕으로, AI가 해당 시점의 우주적 기운(괘)을 분석하여 맞춤형 조언을 생성합니다.</li>
                            <li><strong>다양한 강아지 메신저:</strong> 64종의 귀여운 강아지 캐릭터들이 각기 다른 에너지를 담아 사용자에게 운세를 전달하며, 정서적인 위안과 즐거움을 함께 선사합니다.</li>
                            <li><strong>동양 철학의 대중화:</strong> 어렵게 느껴질 수 있는 주역의 원리를 직관적인 디자인과 쉬운 언어로 풀어내어 누구나 부담 없이 즐길 수 있습니다.</li>
                        </ul>
                        <p>주역천재 멍선생은 항상 여러분의 곁에서 다정한 친구처럼, 때로는 지혜로운 조언자처럼 함께하겠습니다. 여러분의 모든 고민이 희망적인 변화의 시작이 되기를 진심으로 기원합니다.</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">이 사이트가 제공하는 읽을거리</h2>
                        <p><strong>주역천재 멍선생</strong>은 단순히 버튼을 누르고 끝나는 운세 페이지가 아니라, 사용자가 자신의 고민을 문장으로 정리하고 주역 해석 콘텐츠를 읽으면서 현재 상황을 천천히 돌아볼 수 있도록 만든 해석형 콘텐츠 서비스입니다.</p>
                        <p>홈 화면에서 질문을 입력하면 결과 페이지에서는 괘의 이름, 상징, 해석 방향, 조언 문장을 함께 제공합니다. 서비스 소개와 개인정보처리방침 페이지에도 운영 원칙과 이용 목적을 자세히 안내하고 있습니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">콘텐츠 운영 원칙</h3>
                        <p>이 사이트의 게시자 콘텐츠는 자극적인 단정 대신 성찰과 해석 중심의 문장으로 구성됩니다. 건강, 법률, 투자처럼 신중함이 필요한 주제는 확정적으로 판단하지 않으며, 사용자가 현실의 정보와 함께 읽도록 안내합니다.</p>
                        <p>또한 주역의 상징을 현대적인 언어로 풀어, 방문자가 재미 요소를 넘어서 실제로 읽고 생각해 볼 수 있는 본문 경험을 만드는 것을 핵심 목표로 삼고 있습니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">이용 흐름 안내</h3>
                        <ol class="feature-list">
                            <li>현재 가장 고민되는 상황을 구체적으로 적습니다.</li>
                            <li>효를 하나씩 뽑으며 질문에 집중하는 시간을 가집니다.</li>
                            <li>완성된 괘와 해석 문장을 읽고 자신의 상황과 비교해 봅니다.</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "개인정보처리방침",
        privacyContent: `
                <p><strong>1. 개인정보의 수집 및 이용 목적</strong><br>
                본 서비스는 사용자가 입력하는 '고민 내용'을 수집합니다. 수집된 정보는 오직 AI를 통한 점괘 생성 및 결과 제공을 위한 목적으로만 이용되며, 그 외의 용도로는 사용되지 않습니다.</p>
                
                <p><strong>2. 수집하는 개인정보 항목</strong><br>
                - 필수 항목: 사용자가 직접 입력한 고민 텍스트<br>
                본 서비스는 이름, 이메일, 전화번호 등 개인을 식별할 수 있는 정보를 일절 요구하지 않습니다.</p>
                
                <p><strong>3. 개인정보의 보유 및 이용 기간</strong><br>
                입력된 고민 내용은 점괘 결과가 생성되어 사용자에게 표시되는 동안만 세션 상에서 일시적으로 유지되며, 서비스 이용 종료 시 즉시 파기됩니다. 서버에 영구적으로 저장되지 않습니다.</p>
                
                <p><strong>4. 개인정보의 제3자 제공 및 위탁</strong><br>
                본 서비스는 AI 답변 생성을 위해 사용자가 입력한 텍스트를 외부 API(OpenAI 등)로 전송할 수 있습니다. 이 과정에서 개인을 식별할 수 있는 정보는 포함되지 않으며, 해당 업체는 정보 보호를 위한 엄격한 기준을 준수합니다.</p>
                
                <p><strong>5. 쿠키(Cookie) 및 광고 운영</strong><br>
                본 서비스는 구글 애드센스(Google AdSense) 광고를 게재하며, 맞춤형 광고 제공을 위해 쿠키를 활용할 수 있습니다. 사용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있습니다.</p>
                
                <p><strong>6. 이용자의 권리</strong><br>
                이용자는 언제든지 본 서비스 이용을 중단함으로써 개인정보 제공에 대한 동의를 철회할 수 있습니다.</p>
        `,
        backHome: "🐾 홈으로 돌아가기 🐾",
        footerCopy: "&copy; 2026 주역천재 멍선생. All rights reserved.",
        footerNote: "이 사이트의 핵심 목적은 사용자가 주역 해석 콘텐츠를 읽고 자신의 고민을 정리해 보는 경험을 제공하는 것입니다.",
        trigrams: {
            "111": { name: "하늘(天)", desc: "강건하고 창조적인 에너지" },
            "000": { name: "땅(地)", desc: "포용하고 수용하는 안정감" },
            "100": { name: "우레(雷)", desc: "새로운 시작과 강력한 움직임" },
            "011": { name: "바람(風)", desc: "유연하고 스며드는 영향력" },
            "010": { name: "물(水)", desc: "험난함 속에서 흐르는 지혜" },
            "101": { name: "불(火)", desc: "명확한 판단과 화려한 결실" },
            "001": { name: "산(山)", desc: "멈추어 내실을 기하는 무게감" },
            "110": { name: "연못(澤)", desc: "기쁨과 소통의 화합" }
        }
    },
    en: {
        title: "🐶 Master Meng: I Ching Genius 🐶",
        subtitle: "Unlock your future with adorable dogs through ancient wisdom.",
        labelConcern: "What's on your mind? Doggy friends will help! ✨",
        placeholder: "Tell your concerns here, your dog friends will guide you...",
        startButton: "🐾 Start My Fortune 🐾",
        divinationGuide: (count) => `Shake the box and draw a line! (${count}/6)`,
        analyzing: "The dog is gathering cosmic energy to analyze your concern... 🐾",
        dogBreedLabel: "The dog delivering your fortune: ",
        retryButton: "Try Again 🌸",
        disclaimer: "※ For entertainment only! Use the wisdom as a friendly guide~ 💖",
        alertEmptyConcern: "What are you curious about? Share your concern first! ✨",
        qPrefix: "Q. ",
        empathy: "I can feel how much you've been thinking about this. Your beautiful heart deserves to be understood. Let's look for answers together using the I Ching.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Your fortune is a mix of **${lower}** below and **${upper}** above. It represents ${upperDesc} flowing over ${lowerDesc}.`,
        defaultHexName: "Mystical Hexagram",
        navHome: "Home",
        navAbout: "About",
        navPrivacy: "Privacy",
        visitorLabel: "Visitors",
        visitorLoading: "Loading...",
        aboutTitle: "About Master Meng: I Ching Genius",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">Service Guide</h3>
                        <p><strong>Master Meng: I Ching Genius</strong> is an interpretive content service that explains the symbols and flow of the I Ching in modern language based on the concern each visitor writes. It is not just a one-click fortune button. The goal is to help users organize a question, reflect on their current situation, and find a clue for their own judgment.</p>
                        <p>The texts and explanations on this site are built from original editorial copy, service introductions, usage guidance, and interpretation principles. The results include playful elements, but the tone is designed to help users read slowly and think carefully about their situation.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">What This Service Offers</h3>
                        <p>This service is designed to go beyond a one-time novelty. Users can describe their situation in detail, read the symbolic flow of the hexagram, and reflect again on emotions, relationships, work, and choices in front of them.</p>
                        <p>The 64 hexagrams represent different patterns of change, balance, conflict, recovery, and growth. We reinterpret those symbols in language that feels readable and relevant in modern daily life.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">How To Use It</h3>
                        <ol class="feature-list">
                            <li>Write the situation that weighs on your mind as specifically as possible. A concrete question leads to a more useful interpretation.</li>
                            <li>Draw each line and wait for the result. This sequence is part of the experience and helps you focus on the question.</li>
                            <li>When the reading appears, compare the hexagram name, symbols, and advice with your present circumstances.</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Interpretation Principles</h3>
                        <p>Master Meng favors reflective language over sensational certainty. For areas such as health, law, or investment, the service does not replace careful real-world judgment and encourages users to consider their own facts as well.</p>
                        <p>We also keep the tone balanced so that visitors are not pushed toward excessive anxiety or false confidence. That standard is central to how we present traditional divination in a modern web service.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">About the Service</h3>
                        <p><strong>Master Meng: I Ching Genius</strong> is a premium fortune-telling service that reinterprets I Ching, the deep ancient wisdom of the East, through modern AI technology and friendly dog characters.</p>
                        <p>Our service aims to look at various concerns users face in their daily lives with a kind and warm perspective. Beyond simply predicting the future, we aim to inspire users to find answers themselves through the philosophical insights contained in the 64 hexagrams of the I Ching.</p>
                        <p><strong>Features of Our Service:</strong></p>
                        <ul>
                            <li><strong>Personalized Fortune Analysis:</strong> Based on the specific concerns entered by the user, AI analyzes the cosmic energy at that point in time to generate tailored guidance.</li>
                            <li><strong>Various Dog Messengers:</strong> 64 types of cute dog characters deliver fortunes with different energies, providing emotional comfort and joy.</li>
                            <li><strong>Popularization of Eastern Philosophy:</strong> We explain the principles of the I Ching with intuitive design and accessible language.</li>
                        </ul>
                        <p>Master Meng: I Ching Genius will always be with you like a kind friend and sometimes a wise advisor. We sincerely hope all your concerns become the start of a hopeful change.</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Reading Materials Provided by This Site</h2>
                        <p><strong>Master Meng: I Ching Genius</strong> is not just a page where you press a button and leave. It is an interpretive content service designed to help visitors write down their concerns, read I Ching interpretations, and reflect on their present situation with more care.</p>
                        <p>When a visitor enters a question on the home screen, the result page provides the hexagram name, symbols, interpretation direction, and advisory text together. The About and Privacy pages also explain the operating principles and purpose of the service in detail.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Content Operation Principles</h3>
                        <p>The publisher content on this site favors reflection and interpretation over sensational certainty. In subjects that require caution, such as health, law, or investment, it does not offer definitive conclusions and instead encourages visitors to read alongside real-world facts.</p>
                        <p>We also aim to explain I Ching symbolism in modern language so that visitors have a genuine reading experience rather than only a brief interactive gimmick.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">User Flow Guide</h3>
                        <ol class="feature-list">
                            <li>Write the situation that concerns you as specifically as possible.</li>
                            <li>Draw each line one by one and take a moment to focus on the question.</li>
                            <li>Read the completed hexagram and compare its interpretation with your current circumstances.</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "Privacy Policy",
        privacyContent: `
                <p><strong>1. Purpose of Collection and Use of Personal Information</strong><br>
                This service collects the 'concern content' entered by the user. The collected information is used only for the purpose of generating and providing fortune results through AI and is not used for any other purpose.</p>
                
                <p><strong>2. Items of Personal Information Collected</strong><br>
                - Required: Concern text directly entered by the user<br>
                This service does not require any personally identifiable information such as name, email, or phone number.</p>
                
                <p><strong>3. Retention and Use Period of Personal Information</strong><br>
                The entered concern content is temporarily maintained in the session only while the fortune result is being generated and displayed to the user, and is immediately destroyed upon termination of service use. It is not permanently stored on the server.</p>
                
                <p><strong>4. Third-Party Provision and Entrustment of Personal Information</strong><br>
                This service may transmit the text entered by the user to an external API (OpenAI, etc.) to generate AI answers. In this process, no personally identifiable information is included, and the company complies with strict standards for information protection.</p>
                
                <p><strong>5. Cookies and Advertising Operations</strong><br>
                This service displays Google AdSense advertisements and may utilize cookies to provide tailored advertisements. Users can refuse the collection of cookies through browser settings.</p>
                
                <p><strong>6. Rights of the User</strong><br>
                Users can withdraw their consent to the provision of personal information at any time by stopping the use of this service.</p>
        `,
        backHome: "🐾 Back to Home 🐾",
        footerCopy: "&copy; 2026 Master Meng: I Ching Genius. All rights reserved.",
        footerNote: "The main purpose of this site is to help visitors read I Ching interpretations and organize their thoughts with care.",
        trigrams: {
            "111": { name: "Heaven", desc: "strong and creative energy" },
            "000": { name: "Earth", desc: "stability that accepts everything" },
            "100": { name: "Thunder", desc: "new beginnings and movement" },
            "011": { name: "Wind", desc: "flexible and soft influence" },
            "010": { name: "Water", desc: "wisdom flowing through hardship" },
            "101": { name: "Fire", desc: "clear judgment and bright results" },
            "001": { name: "Mountain", desc: "inner strength and stillness" },
            "110": { name: "Lake", desc: "harmony of joy and communication" }
        }
    },
    ja: {
        title: "🐶 周易の天才 メン先生 🐶",
        subtitle: "あなたの悩みを可愛いわんちゃんと一緒に周易で解決しましょう。",
        labelConcern: "悩みごとは何？わんちゃんたちが教えてあげる！ ✨",
        placeholder: "ここに悩みを具体的に書くと、わんちゃんたちが助けてくれるよ...",
        startButton: "🐾 占いを開始する 🐾",
        divinationGuide: (count) => `木箱を振って、爻（こう）を一つずつ引いてみよう！ (${count}/6)`,
        analyzing: "わんちゃんが宇宙の気運を集めて、あなたの悩みを分析中だよ... 🐾",
        dogBreedLabel: "あなたに運勢を届けてくれるわんちゃん：",
        retryButton: "もう一度やる 🌸",
        disclaimer: "※ 周易占いは参考用です。あまり盲信せず、楽しんで見てね〜 💖",
        alertEmptyConcern: "悩みごとは何？まずは悩みを書いてね！ ✨",
        navHome: "ホーム",
        navAbout: "紹介",
        navPrivacy: "プライバシー",
        visitorLabel: "訪問者",
        visitorLoading: "読み込み中...",
        aboutTitle: "周易の天才 メン先生について",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">サービス案内</h3>
                        <p><strong>周易の天才 メン先生</strong>は、利用者が入力した悩みをもとに、周易の象徴と流れを現代的な言葉で解きほぐして伝える解釈型コンテンツサービスです。結果だけを見せる占いボタンではなく、問いを整理し、今の状況を見つめ直し、自分で判断の糸口を見つける手助けを目指しています。</p>
                        <p>このサイトの文章や解説は、独自に企画した紹介文、利用ガイド、解釈方針をもとに構成されています。遊び心はありつつも、利用者が落ち着いて読み、考えられるように語り口を整えています。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">このサービスが提供するもの</h3>
                        <p>このサービスは、一度きりの軽い遊びで終わらないように設計されています。利用者は自分の状況を具体的に書き、卦が示す流れを読みながら、感情、人間関係、仕事、選択肢を改めて見つめ直すことができます。</p>
                        <p>周易の64卦には、変化、均衡、衝突、回復、成長といったさまざまな場面のイメージが含まれています。私たちはその象徴を現代の日常に結びつく言葉で届けています。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">利用方法</h3>
                        <ol class="feature-list">
                            <li>今いちばん気になっている状況を、できるだけ具体的に書いてください。具体的な問いほど、解釈も実感に近づきます。</li>
                            <li>爻を一つずつ引きながら結果を待ってください。この流れ自体が問いに集中する時間になります。</li>
                            <li>結果が表示されたら、卦の名前、象徴、助言を今の自分の状況と静かに照らし合わせてみてください。</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">解釈の原則</h3>
                        <p>メン先生は、刺激的な断言よりも、内省を促す穏やかな表現を優先します。健康、法律、投資のように慎重な判断が必要な領域では、現実の情報とあわせて考えることを勧めています。</p>
                        <p>また、不安や過度な期待をあおらないよう、全体の語り口をできるだけ均衡の取れたものにしています。これは伝統的な占いを現代のウェブサービスとして扱ううえでの重要な方針です。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">サービス紹介</h3>
                        <p><strong>周易の天才 メン先生</strong>は、古代東洋の深い知恵である周易を、現代的なAI技術と親しみやすいわんちゃんキャラクターを通じて再解釈したプレミアム占いサービスです。</p>
                        <p>私たちのサービスは、日常生活で直面するさまざまな悩みを、優しく温かい視点で見守ることを目指しています。単に未来を予言するだけでなく、64卦が持つ哲学的な洞察を通して、利用者が自分で答えを見つけるきっかけを届けたいと考えています。</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">このサイトが提供する読み物</h2>
                        <p><strong>周易の天才 メン先生</strong>は、ボタンを押して終わるだけの占いページではありません。利用者が悩みを言葉にし、周易の解釈コンテンツを読みながら、今の状況を静かに見つめ直せるように設計された解釈型コンテンツサービスです。</p>
                        <p>ホーム画面で質問を入力すると、結果画面では卦の名前、象徴、解釈の方向性、助言の文章を一緒に案内します。紹介ページとプライバシーページでも、運営方針とサービスの目的を詳しく説明しています。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">コンテンツ運営原則</h3>
                        <p>このサイトの掲載コンテンツは、刺激的な断言よりも、内省と解釈を重視した文章で構成されています。健康、法律、投資のように慎重さが必要なテーマでは、断定的な結論を出さず、現実の情報とあわせて読むよう案内します。</p>
                        <p>また、周易の象徴を現代の言葉でわかりやすく伝え、短い仕掛けで終わらない読みごたえのある本文体験を作ることを大切にしています。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">利用フローのご案内</h3>
                        <ol class="feature-list">
                            <li>今いちばん気になっている状況を、できるだけ具体的に書きます。</li>
                            <li>爻を一つずつ引きながら、質問に意識を向ける時間を持ちます。</li>
                            <li>完成した卦と解釈文を読み、今の状況と照らし合わせます。</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "プライバシーポリシー",
        privacyContent: `
                <p><strong>1. 個人情報の収集および利用目的</strong><br>
                本サービスは、ユーザーが入力する「悩み内容」を収集します。収集された情報は、AIを通じた占断の生成および結果の提供のみを目的として利用され、それ以外の用途には使用されません。</p>
                
                <p><strong>2. 収集する個人情報の項目</strong><br>
                - 必須項目：ユーザーが直接入力した悩みのテキスト<br>
                本サービスは、氏名、メールアドレス、電話番号などの個人を特定できる情報を一切要求しません。</p>
                
                <p><strong>3. 個人情報の保有および利用期間</strong><br>
                入力された悩み内容は、占断結果が生成されユーザーに表示されている間のみセッション上で一時的に保持され、サービス利用終了時に直ちに破棄されます。サーバーに永久に保存されることはありません。</p>
                
                <p><strong>4. 個人情報の third-party 提供および委託</strong><br>
                本サービスは、AI回答生成のためにユーザーが入力したテキストを外部API（OpenAIなど）に送信することがあります。この過程で個人を特定できる情報は含まれず、当該業者は情報保護のための厳格な基準を遵守しています。</p>
                
                <p><strong>5. クッキー（Cookie）および広告の運用</strong><br>
                本サービスは、Googleアドセンス（Google AdSense）広告を掲載しており、パーソナライズ広告の提供のためにクッキーを活用することがあります。ユーザーはブラウザの設定を通じてクッキーの収集を拒否することができます。</p>
                
                <p><strong>6. 利用者の権利</strong><br>
                利用者は、いつでも本サービスの利用を中断することにより、個人情報の提供に関する同意を撤回することができます。</p>
        `,
        backHome: "🐾 ホームへ戻る 🐾",
        footerCopy: "&copy; 2026 周易の天才 メン先生. All rights reserved.",
        footerNote: "このサイトの主な目的は、周易の解釈を読みながら自分の考えを整理する体験を提供することです。",
        qPrefix: "Q. ",
        empathy: "あなたの悩みをじっと見つめていると、これまでどれほど心を砕いてきたかが伝わってきて、私も胸が熱くなります。さあ、周易の知恵を借りて、一緒に道を探してみましょう。",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `あなたが引いた運勢は、下卦の**${lower}**と上卦の**${upper}**が合わさった組み合わせだよ。`,
        defaultHexName: "神秘的な卦",
        trigrams: {
            "111": { name: "天", desc: "剛健で創造的なエネルギー" },
            "000": { name: "地", desc: "包容し受容する安定感" },
            "100": { name: "雷", desc: "新しい始まりと強力な動き" },
            "011": { name: "風", desc: "柔軟で浸透する影響力" },
            "010": { name: "水", desc: "困難の中で流れる知恵" },
            "101": { name: "火", desc: "明快な判断と華やかな結実" },
            "001": { name: "山", desc: "止まって内実を期する重厚感" },
            "110": { name: "沢", desc: "喜びと疎通の和合" }
        }
    },
    zh: {
        title: "🐶 孟老师，周易奇才 🐶",
        subtitle: "让可爱的狗狗陪你一起用周易化解烦恼。",
        labelConcern: "有什么烦恼吗？狗狗朋友们来告诉你！ ✨",
        placeholder: "在这里具体写下你的烦恼，狗狗朋友们会帮你的...",
        startButton: "🐾 开始占卜 🐾",
        divinationGuide: (count) => `晃动木桶，逐一抽取爻位吧！ (${count}/6)`,
        analyzing: "狗狗正在聚集宇宙的灵气，为你分析烦恼... 🐾",
        dogBreedLabel: "为你传递运势的狗狗：",
        retryButton: "再试一次 🌸",
        disclaimer: "※ 周易占卜仅供参考！请不要过度迷信，仅供娱乐哦~ 💖",
        alertEmptyConcern: "有什么好奇的吗？先写下你的烦恼吧！ ✨",
        navHome: "首页",
        navAbout: "关于",
        navPrivacy: "隐私",
        visitorLabel: "访客",
        visitorLoading: "加载中...",
        aboutTitle: "关于孟老师，周易奇才",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">服务说明</h3>
                        <p><strong>孟老师，周易奇才</strong>是一项解读型内容服务，会根据访客亲自输入的烦恼，用现代语言解释周易中的象征与变化脉络。它不只是一个显示结果的占卜按钮，而是希望帮助用户整理问题、回看现状，并找到属于自己的判断线索。</p>
                        <p>网站中的介绍文字、使用说明和解读原则都由站点主动策划整理。结果保留轻松感，但整体语气以便于认真阅读和思考为目标。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">本服务提供什么</h3>
                        <p>这项服务并不是一次性的新奇体验。用户可以更具体地描述自己的处境，再通过卦象的变化重新思考情绪、关系、工作与选择。</p>
                        <p>周易六十四卦包含变化、平衡、冲突、恢复与成长等不同情境。我们将这些象征转化成更适合现代日常阅读的表达。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">使用方法</h3>
                        <ol class="feature-list">
                            <li>请尽量具体地写下你当前最在意的问题。问题越具体，解读通常越有帮助。</li>
                            <li>逐条抽取爻线并等待结果.这个过程本身就是帮助你集中注意力的一部分。</li>
                            <li>结果出现后，请把卦名、象征和建议与自己眼前的现实情况慢慢对照。</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">解读原则</h3>
                        <p>孟老师更重视反思性的表达，而不是刺激性的绝对断言。对于健康、法律、投资等需要谨慎判断的领域，本服务不会替代现实中的专业判断。</p>
                        <p>同时，我们也尽量避免放大焦虑或制造过度期待。这是我们将传统占卜放入现代网站时坚持的基本原则。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">服务介绍</h3>
                        <p><strong>孟老师，周易奇才</strong>是一款高端占卜服务，通过现代人工智能技术和亲切的狗狗形象，重新诠释古代东方的深邃智慧周易。</p>
                        <p>我们的服务希望以温暖亲切的视角，陪伴用户面对日常生活中的各种烦恼。除了预知意味之外，我们更重视借由六十四卦的哲学洞察，启发用户自己找到答案。</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">本网站提供的阅读内容</h2>
                        <p><strong>孟老师，周易奇才</strong>并不是一个点一下按钮就结束的占卜页面，而是一项解读型内容服务，帮助访客把烦恼写成文字，阅读周易解读内容，并认真回看自己当下的处境。</p>
                        <p>访客在首页输入问题后，结果页面会同时提供卦名、象征、解读方向和建议文字。关于页面与隐私页面也会详细说明网站的运营原则和服务目的。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">内容运营原则</h3>
                        <p>本网站的发布内容更重视反思与解读，而不是刺激性的绝对断言。对于健康、法律、投资等需要谨慎判断的话题，网站不会给出武断结论，而是提醒访客结合现实信息一起阅读。</p>
                        <p>我们也希望用现代语言解释周易象征，让访客获得真正可阅读的正文体验，而不只是一个短暂的互动小功能。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">使用流程说明</h3>
                        <ol class="feature-list">
                            <li>尽量具体地写下你当前最在意的情况。</li>
                            <li>逐条抽取爻线，并把注意力集中在问题本身。</li>
                            <li>阅读完整卦象与解读文字，再与自己的现实情况慢慢对照。</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "隐私政策",
        privacyContent: `
                <p><strong>1. 个人信息收集及利用目的</strong><br>
                本服务收集用户输入的“烦恼内容”。收集的信息仅用于通过 AI 生成占卜结果并提供给用户，不用于任何其他目的。</p>
                
                <p><strong>2. 收集的个人信息项目</strong><br>
                - 必填项目：用户直接输入的烦恼文本<br>
                本服务不要求姓名、电子邮件、电话号码等任何个人身份识别信息。</p>
                
                <p><strong>3. 个人信息的保留及利用期限</strong><br>
                输入的烦恼内容仅在占卜结果生成并显示给用户期间暂时保留在会话中，服务使用结束时立即销毁。不会永久存储在服务器上。</p>
                
                <p><strong>4. 个人信息的第三方提供及委托</strong><br>
                本服务可能会将用户输入的文本发送到外部 API（OpenAI 等）以生成 AI 回答。在此过程中不包含任何个人身份识别信息，且相关公司遵守严格的信息保护标准。</p>
                
                <p><strong>5. Cookie 及广告运营</strong><br>
                本服务展示 Google AdSense 广告，并可能利用 Cookie 提供个性化广告。用户可以通过浏览器设置拒绝收集 Cookie。</p>
                
                <p><strong>6. 用户权利</strong><br>
                用户可以随时通过停止使用本服务来撤销对提供个人信息的同意。</p>
        `,
        backHome: "🐾 返回首页 🐾",
        footerCopy: "&copy; 2026 孟老师，周易奇才. All rights reserved.",
        footerNote: "本网站的主要目的，是帮助访客阅读周易解读内容并认真整理自己的想法。",
        qPrefix: "问. ",
        empathy: "静静地看着你的烦恼，我能感受到你这段时间付出了多少心血。现在，让我们借助周易的智慧，一起寻找出路吧。",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `你抽到的运势是下卦 **${lower}** 和上卦 **${upper}** 的组合。`,
        defaultHexName: "神秘的卦象",
        trigrams: {
            "111": { name: "天", desc: "刚健且富有创造力的能量" },
            "000": { name: "地", desc: "包容与接纳的稳定感" },
            "100": { name: "雷", desc: "新的开始和强有力的行动" },
            "011": { name: "风", desc: "柔和且具有渗透力的影响力" },
            "010": { name: "水", desc: "在艰难险阻中流动的智慧" },
            "101": { name: "火", desc: "明确的判断和灿烂的成果" },
            "001": { name: "山", desc: "静止以充实内力的沉稳感" },
            "110": { name: "泽", desc: "喜悦与沟通的和谐" }
        }
    },
    fr: {
        title: "🐶 Maître Meng, prodige du Yi Jing 🐶",
        subtitle: "Éclaire tes préoccupations avec l'aide de chiens adorables et de la sagesse du Yi Jing.",
        labelConcern: "Qu'est-ce qui t'inquiète ? Les toutous vont t'aider ! ✨",
        placeholder: "Écris ici ta préoccupation en détail, tes compagnons canins vont te guider...",
        startButton: "🐾 Commencer la divination 🐾",
        divinationGuide: (count) => `Secoue la boîte et tire une ligne ! (${count}/6)`,
        analyzing: "Le chien rassemble l'énergie de l'univers pour analyser ta préoccupation... 🐾",
        dogBreedLabel: "Le chien qui t'apporte ce message : ",
        retryButton: "Réessayer 🌸",
        disclaimer: "※ Lecture à titre récréatif uniquement. Prends cette sagesse comme un guide bienveillant~ 💖",
        alertEmptyConcern: "Qu'est-ce qui te préoccupe ? Écris d'abord ton souci ! ✨",
        qPrefix: "Q. ",
        empathy: "En regardant ton inquiétude, je sens combien tu y as pensé avec sincérité. Ton cœur mérite d'être compris avec douceur. Appuyons-nous sur la sagesse du Yi Jing pour chercher une voie ensemble.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Le tirage unit le trigramme inférieur **${lower}** et le trigramme supérieur **${upper}**. Il montre ${upperDesc} qui se déploie au-dessus de ${lowerDesc}.`,
        defaultHexName: "Hexagramme mystérieux",
        fallbackAdvice: "Prends encore un peu ton temps et laisse le bon moment se présenter.",
        navHome: "Accueil",
        navAbout: "À propos",
        navPrivacy: "Confidentialité",
        visitorLabel: "Visiteurs",
        visitorLoading: "Chargement...",
        aboutTitle: "À propos de Maître Meng, prodige du Yi Jing",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">Présentation du service</h3>
                        <p><strong>Maître Meng, prodige du Yi Jing</strong> est un service éditorial d'interprétation qui explique les symboles et les mouvements du Yi Jing dans un langage actuel à partir de la préoccupation écrite par l'utilisateur. Ce n'est pas seulement un bouton de divination, mais un espace pour clarifier une question et réfléchir à sa situation.</p>
                        <p>Les textes du site, les explications et les principes d'interprétation sont rédigés pour offrir une lecture claire, douce et utile. Le ton reste léger, mais il est conçu pour favoriser une réflexion attentive.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Ce que le service apporte</h3>
                        <p>Le site ne cherche pas à proposer une simple curiosité de passage. Il invite l'utilisateur à décrire sa situation, à lire la dynamique de l'hexagramme et à reconsidérer ses émotions, ses relations, son travail et ses choix.</p>
                        <p>Les 64 hexagrammes portent chacun des images de changement, d'équilibre, de conflit, de reprise et de croissance. Nous les reformulons dans un langage plus proche de la vie quotidienne actuelle.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Mode d'emploi</h3>
                        <ol class="feature-list">
                            <li>Décris aussi précisément que possible la situation qui t'occupe. Une question concrète mène souvent à une lecture plus parlante.</li>
                            <li>Tire les lignes une par une et attends le résultat. Ce rythme fait partie de l'expérience et aide à se concentrer.</li>
                            <li>Quand la lecture apparaît, compare le nom de l'hexagramme, ses symboles et le conseil avec ta situation actuelle.</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Principes d'interprétation</h3>
                        <p>Le service privilégie une lecture réfléchie plutôt que des affirmations excessives. Dans des domaines comme la santé, le droit ou l'investissement, il ne remplace pas un jugement prudent fondé sur la réalité.</p>
                        <p>Nous veillons aussi à ne pas amplifier inutilement l'anxiété ou les attentes. Cet équilibre fait partie de notre manière de présenter une tradition ancienne sur le web moderne.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">À propos du service</h3>
                        <p><strong>Maître Meng, prodige du Yi Jing</strong> est un service de divination premium qui réinterprète le Yi Jing grâce à l'IA moderne et à des chiens attachants.</p>
                        <p>Notre service accompagne les préoccupations du quotidien avec un regard chaleureux et attentionné. Au-delà d'une simple prédiction, nous voulons offrir une inspiration concrète pour aider chacun à trouver ses propres réponses.</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Contenus de lecture proposés par ce site</h2>
                        <p><strong>Maître Meng, prodige du Yi Jing</strong> n'est pas seulement une page où l'on clique sur un bouton avant de repartir. C'est un service éditorial d'interprétation conçu pour aider les visiteurs à formuler leur préoccupation, lire un contenu inspiré du Yi Jing et réfléchir plus calmement à leur situation.</p>
                        <p>Quand une question est saisie sur la page d'accueil, la page de resultats présente ensemble le nom de l'hexagramme, ses symboles, l'orientation de lecture et le texte de conseil. Les pages de présentation et de confidentialité détaillent aussi les principes du service.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Principes de gestion des contenus</h3>
                        <p>Le contenu publié sur ce site privilégie la réflexion et l'interprétation plutôt que les certitudes sensationnalistes. Pour des sujets qui demandent de la prudence, comme la santé, le droit ou l'investissement, le site n'avance pas de conclusion définitive et invite à lire avec les faits concrets.</p>
                        <p>Nous cherchons aussi à expliquer les symboles du Yi Jing dans une langue actuelle, afin d'offrir une vraie expérience de lecture et non un simple effet interactif de quelques secondes.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Guide du flux d'utilisation</h3>
                        <ol class="feature-list">
                            <li>Décris aussi précisément que possible la situation qui t'occupe.</li>
                            <li>Tire les lignes une par une en gardant ton attention sur la question.</li>
                            <li>Lis l'hexagramme complet et compare son interprétation avec ta situation actuelle.</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "Politique de confidentialité",
        privacyContent: `
                <p><strong>1. Finalité de la collecte et de l'utilisation</strong><br>
                Ce service recueille le contenu des préoccupations saisi par l'utilisateur. Ces informations servent uniquement à générer et afficher le résultat de la divination via l'IA.</p>
                
                <p><strong>2. Données collectées</strong><br>
                - Élément requis : le texte de la préoccupation saisi directement par l'utilisateur<br>
                Le service ne demande aucune donnée d'identification personnelle telle que le nom, l'adresse e-mail ou le numéro de téléphone.</p>
                
                <p><strong>3. Durée de conservation</strong><br>
                Le contenu saisi est conservé temporairement seulement pendant la génération et l'affichage du résultat, puis supprimé dès la fin de l'utilisation. Il n'est pas stocké durablement sur le serveur.</p>
                
                <p><strong>4. Transmission à des tiers</strong><br>
                Pour générer la réponse, le texte saisi peut être transmis à une API externe telle qu'OpenAI. Aucune donnée d'identification personnelle n'est incluse, et les prestataires concernés appliquent des standards stricts de protection.</p>
                
                <p><strong>5. Cookies et publicité</strong><br>
                Ce service peut afficher des annonces Google AdSense et utiliser des cookies pour proposer des publicités personnalisées. Tu peux refuser les cookies dans les paramètres du navigateur.</p>
                
                <p><strong>6. Droits de l'utilisateur</strong><br>
                Tu peux retirer ton consentement à tout moment en cessant d'utiliser ce service.</p>
        `,
        backHome: "🐾 Retour à l'accueil 🐾",
        footerCopy: "&copy; 2026 Maître Meng, prodige du Yi Jing. All rights reserved.",
        footerNote: "L'objectif principal de ce site est d'aider les visiteurs à lire des interprétations du Yi Jing et à mettre leurs pensées en ordre.",
        trigrams: {
            "111": { name: "Ciel", desc: "une énergie forte et créatrice" },
            "000": { name: "Terre", desc: "une stabilité accueillante et réceptive" },
            "100": { name: "Tonnerre", desc: "un nouvel élan et un mouvement puissant" },
            "011": { name: "Vent", desc: "une influence souple qui s'infiltre partout" },
            "010": { name: "Eau", desc: "une sagesse qui continue de couler dans l'épreuve" },
            "101": { name: "Feu", desc: "une lucidité nette et un rayonnement visible" },
            "001": { name: "Montagne", desc: "une force intérieure calme et concentrée" },
            "110": { name: "Lac", desc: "une harmonie faite de joie et d'échange" }
        }
    },
    de: {
        title: "🐶 Meister Meng, das Genie des I Ging 🐶",
        subtitle: "Lass deine Sorgen mit niedlichen Hunden und der Weisheit des I Ging deuten.",
        labelConcern: "Was beschäftigt dich? Die Hunde helfen dir weiter! ✨",
        placeholder: "Schreib hier dein Anliegen möglichst genau auf, deine Hundefreunde begleiten dich...",
        startButton: "🐾 Deutung starten 🐾",
        divinationGuide: (count) => `Schüttle die Box und ziehe eine Linie! (${count}/6)`,
        analyzing: "Der Hund sammelt kosmische Energie und deutet gerade dein Anliegen... 🐾",
        dogBreedLabel: "Der Hund, der dir die Botschaft bringt: ",
        retryButton: "Noch einmal 🌸",
        disclaimer: "※ Nur zur Unterhaltung gedacht. Nimm die Weisheit als sanfte Orientierung~ 💖",
        alertEmptyConcern: "Was möchtest du wissen? Schreib zuerst dein Anliegen auf! ✨",
        qPrefix: "F. ",
        empathy: "Ich spüre, wie intensiv du dich mit diesem Thema beschäftigt hast. Dein aufrichtiges Herz verdient eine ruhige und freundliche Antwort. Schauen wir gemeinsam mit der Weisheit des I Ging auf deinen Weg.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Dein Zeichen verbindet das untere Trigramm **${lower}** mit dem oberen Trigramm **${upper}**. Es zeigt ${upperDesc}, das sich über ${lowerDesc} entfaltet.`,
        defaultHexName: "Geheimnisvolles Hexagramm",
        fallbackAdvice: "Hab noch etwas Geduld und warte auf den richtigen Moment.",
        navHome: "Start",
        navAbout: "Über uns",
        navPrivacy: "Datenschutz",
        visitorLabel: "Besucher",
        visitorLoading: "Laden...",
        aboutTitle: "Über Meister Meng, das Genie des I Ging",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">Serviceübersicht</h3>
                        <p><strong>Meister Meng, das Genie des I Ging</strong> ist ein interpretierender Inhaltsdienst, der die Symbole und Bewegungen des I Ging in heutiger Sprache erklärt. Ausgangspunkt ist jeweils das Anliegen, das der Nutzer selbst eingibt. Ziel ist nicht nur ein Ergebnis anzuzeigen, sondern beim Ordnen der Frage und der eigenen Situation zu helfen.</p>
                        <p>Die Texte, Hinweise und Deutungsgrundsätze auf dieser Seite sind redaktionell aufgebaut. Der Ton bleibt freundlich und leicht, ist aber auf ruhiges Lesen und Nachdenken ausgerichtet.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Was der Dienst bietet</h3>
                        <p>Der Dienst ist nicht nur als kurzer Unterhaltungsmoment gedacht. Nutzer können ihre Lage genauer beschreiben, den Verlauf des Hexagramms lesen und Gefühle, Beziehungen, Arbeit und Entscheidungen neu betrachten.</p>
                        <p>Die 64 Hexagramme stehen für Veränderungen, Gleichgewicht, Konflikt, Erholung und Wachstum. Wir übertragen diese Bilder in eine Sprache, die im heutigen Alltag leichter zugänglich ist.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">So wird es genutzt</h3>
                        <ol class="feature-list">
                            <li>Beschreibe möglichst konkret, was dich beschäftigt. Je klarer die Frage, desto hilfreicher ist meist die Deutung.</li>
                            <li>Ziehe die Linien nacheinander und warte auf das Ergebnis. Dieser Ablauf hilft, sich auf das Anliegen zu konzentrieren.</li>
                            <li>Vergleiche anschließend Name, Symbole und Hinweise des Hexagramms mit deiner aktuellen Situation.</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Deutungsprinzipien</h3>
                        <p>Der Dienst setzt auf nachdenkliche Formulierungen statt auf überzogene Gewissheit. In Bereichen wie Gesundheit, Recht oder Finanzen ersetzt er keine sorgfältige reale Entscheidung.</p>
                        <p>Außerdem vermeiden wir unnötige Angstmache oder falsche Sicherheit. Dieses Gleichgewicht ist ein zentraler Teil unseres Ansatzes.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Über den Dienst</h3>
                        <p><strong>Meister Meng, das Genie des I Ging</strong> ist ein hochwertiger Orakelservice, der die tiefe Weisheit des I Ging mit moderner KI und freundlichen Hundebegleitern neu interpretiert.</p>
                        <p>Unser Ziel ist es, alltägliche Sorgen mit einem warmen und aufmerksamen Blick zu betrachten und über die 64 Hexagramme Inspiration für eigene Antworten zu geben.</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Von dieser Seite bereitgestellte Lesematerialien</h2>
                        <p><strong>Meister Meng, das Genie des I Ging</strong> ist nicht nur eine Seite, auf der man kurz einen Knopf drückt. Es ist ein interpretierender Inhaltsdienst, der Besuchern helfen soll, ihr Anliegen in Worte zu fassen, I-Ging-Deutungen zu lesen und die eigene Situation ruhiger zu betrachten.</p>
                        <p>Wenn auf der Startseite eine Frage eingegeben wird, zeigt die Ergebnisansicht den Namen des Hexagramms, seine Symbole, die Deutungsrichtung und die Hinweise gemeinsam an. Auch die Seiten über den Dienst und zum Datenschutz erläutern die Grundsätze und den Zweck des Angebots.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Grundsätze des Inhaltsbetriebs</h3>
                        <p>Die veröffentlichten Inhalte setzen auf Reflexion und Deutung statt auf sensationelle Gewissheit. Bei Themen wie Gesundheit, Recht oder Investitionen, die Vorsicht verlangen, gibt die Seite keine endgültigen Urteile vor, sondern verweist auf die reale Sachlage.</p>
                        <p>Außerdem erklären wir die Symbole des I Ging in moderner Sprache, damit Besucher echten Lesestoff erhalten und nicht nur einen kurzen interaktiven Effekt.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Leitfaden zum Nutzungsablauf</h3>
                        <ol class="feature-list">
                            <li>Schreibe möglichst konkret auf, was dich im Moment beschäftigt.</li>
                            <li>Ziehe die Linien nacheinander und richte deine Aufmerksamkeit auf die Frage.</li>
                            <li>Lies das vollständige Hexagramm und vergleiche die Deutung mit deiner aktuellen Lage.</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "Datenschutzerklärung",
        privacyContent: `
                <p><strong>1. Zweck der Datenerhebung und Nutzung</strong><br>
                Dieser Dienst erfasst den vom Nutzer eingegebenen Inhalt des Anliegens. Die Informationen werden ausschließlich dafür verwendet, per KI ein Deutungsergebnis zu erzeugen und anzuzeigen.</p>
                
                <p><strong>2. Erhobene Daten</strong><br>
                - Pflichtangabe: der vom Nutzer direkt eingegebene Text des Anliegens<br>
                Der Dienst verlangt keine personenbezogenen Daten wie Name, E-Mail-Adresse oder Telefonnummer.</p>
                
                <p><strong>3. Speicher- und Nutzungsdauer</strong><br>
                Der eingegebene Inhalt wird nur vorübergehend während der Erzeugung und Anzeige des Ergebnisses gehalten und nach Ende der Nutzung sofort gelöscht. Er wird nicht dauerhaft auf dem Server gespeichert.</p>
                
                <p><strong>4. Weitergabe an Dritte</strong><br>
                Zur Erstellung der KI-Antwort kann der eingegebene Text an externe APIs wie OpenAI übertragen werden. Personenbezogene Daten sind darin nicht enthalten, und die beteiligten Anbieter erfüllen strenge Datenschutzstandards.</p>
                
                <p><strong>5. Cookies und Werbung</strong><br>
                Dieser Dienst kann Google AdSense anzeigen und Cookies für personalisierte Werbung nutzen. Du kannst die Verwendung von Cookies in deinen Browsereinstellungen ablehnen.</p>
                
                <p><strong>6. Rechte der Nutzer</strong><br>
                Du kannst deine Einwilligung jederzeit widerrufen, indem du die Nutzung des Dienstes beendest.</p>
        `,
        backHome: "🐾 Zurück zur Startseite 🐾",
        footerCopy: "&copy; 2026 Meister Meng, das Genie des I Ging. All rights reserved.",
        footerNote: "Der Hauptzweck dieser Seite ist es, Besuchern beim Lesen von I-Ging-Deutungen und beim Ordnen ihrer Gedanken zu helfen.",
        trigrams: {
            "111": { name: "Himmel", desc: "eine starke und schöpferische Energie" },
            "000": { name: "Erde", desc: "eine aufnehmende und tragende Stabilität" },
            "100": { name: "Donner", desc: "ein neuer Anfang und kraftvolle movement" },
            "011": { name: "Wind", desc: "ein sanfter Einfluss, der sich ausbreitet" },
            "010": { name: "Wasser", desc: "Weisheit, die selbst durch Schwierigkeiten weiterfließt" },
            "101": { name: "Feuer", desc: "klare Einsicht und leuchtende Ergebnisse" },
            "001": { name: "Berg", desc: "innere Ruhe und gefestigte Kraft" },
            "110": { name: "See", desc: "freudige Harmonie und lebendige Verbindung" }
        }
    },
    es: {
        title: "🐶 Maestro Meng: genio del I Ching 🐶",
        subtitle: "Explora tus inquietudes con perritos adorables y la sabiduría ancestral del I Ching.",
        labelConcern: "¿Qué te preocupa? ¡Los perritos te van a orientar! ✨",
        placeholder: "Escribe aquí tu preocupación con detalle y tus amigos perrunos te acompañarán...",
        startButton: "🐾 Empezar la lectura 🐾",
        divinationGuide: (count) => `Sacude la caja y saca una línea. (${count}/6)`,
        analyzing: "El perrito está reuniendo energía cósmica para analizar tu preocupación... 🐾",
        dogBreedLabel: "El perro que te trae este mensaje: ",
        retryButton: "Intentarlo de nuevo 🌸",
        disclaimer: "※ Solo para disfrutarlo como orientación amable. No lo tomes como algo absoluto~ 💖",
        alertEmptyConcern: "¿Qué te inquieta? Primero escribe tu preocupación. ✨",
        qPrefix: "P. ",
        empathy: "Puedo sentir cuánto has pensado en este tema y cuánta sinceridad hay en tu corazón. Mereces una respuesta cálida y clara. Vamos a mirar tu camino junto a la sabiduría del I Ching.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Tu lectura une el trigrama inferior **${lower}** con el trigrama superior **${upper}**. Muestra ${upperDesc} desplegándose sobre ${lowerDesc}.`,
        defaultHexName: "Hexagramma misterioso",
        fallbackAdvice: "Ten un poco más de paciencia y espera el momento adecuado.",
        navHome: "Inicio",
        navAbout: "Información",
        navPrivacy: "Privacidad",
        visitorLabel: "Visitantes",
        visitorLoading: "Cargando...",
        aboutTitle: "Sobre Maestro Meng: genio del I Ching",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">Guía del servicio</h3>
                        <p><strong>Maestro Meng: genio del I Ching</strong> es un servicio de contenido interpretativo que explica los símbolos y el movimiento del I Ching con lenguaje actual a partir de la inquietud escrita por cada visitante. No busca solo mostrar un resultado, sino ayudar a ordenar la pregunta y mirar la situación con más claridad.</p>
                        <p>Los textos, las explicaciones y los criterios de interpretación del sitio están preparados como contenido editorial propio. El tono mantiene ligereza, pero prioriza una lectura tranquila y reflexiva.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Qué ofrece este servicio</h3>
                        <p>El servicio no está pensado como una curiosidad momentánea. Permite describir mejor la situación, leer el sentido del hexagrama y volver a pensar en emociones, relaciones, trabajo y decisiones.</p>
                        <p>Los 64 hexagramas representan cambios, equilibrio, conflicto, recuperación y crecimiento. Nosotros traducimos esos símbolos a un lenguaje más cercano a la vida diaria actual.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Cómo usarlo</h3>
                        <ol class="feature-list">
                            <li>Escribe con la mayor precisión posible la situación que te preocupa. Una pregunta concreta suele dar una lectura más útil.</li>
                            <li>Saca las líneas una por una y espera el resultado. Ese ritmo también forma parte de la experiencia.</li>
                            <li>Cuando aparezca la lectura, compara el nombre del hexagrama, sus símbolos y el consejo con tu situación actual.</li>
                        </ol>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Principios de interpretación</h3>
                        <p>El servicio prefiere un lenguaje reflexivo antes que afirmaciones exageradas. En temas como salud, derecho o inversión, no sustituye una decisión prudente basada en la realidad.</p>
                        <p>También evitamos aumentar la ansiedad o crear expectativas falsas. Ese equilibrio es parte esencial de nuestra forma de presentar esta tradición en la web.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Sobre el servicio</h3>
                        <p><strong>Maestro Meng: genio del I Ching</strong> es un servicio premium que reinterpreta el I Ching con tecnología de IA moderna y entrañables perros mensajeros.</p>
                        <p>Queremos mirar las preocupaciones cotidianas con una perspectiva cálida y cercana, e inspirar a cada persona para que encuentre sus propias respuestas a través de los hexagramas.</p>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Materiales de lectura proporcionados por este sitio</h2>
                        <p><strong>Maestro Meng: genio del I Ching</strong> no es solo una página donde se pulsa un botón y termina todo. Es un servicio de contenido interpretativo pensado para que cada visitante escriba su inquietud, lea interpretaciones del I Ching y observe su situación con más calma.</p>
                        <p>Cuando una persona introduce una pregunta en la pantalla principal, la página de resultado muestra el nombre del hexagrama, sus símbolos, la dirección de la interpretación y el texto de consejo. Las páginas de información y privacidad también explican con detalle los principios y el propósito del servicio.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Principios de operación de contenidos</h3>
                        <p>El contenido publicado en este sitio prioriza la reflexión y la interpretación por encima de las afirmaciones sensacionalistas. En temas como salud, derecho o inversión, que requieren cautela, no ofrece conclusiones definitivas y anima a leer junto con los hechos reales.</p>
                        <p>También buscamos explicar los símbolos del I Ching con lenguaje actual para que la experiencia sea una lectura real y no solo un efecto interactivo pasajero.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Guía de flujo de uso</h3>
                        <ol class="feature-list">
                            <li>Escribe con el mayor detalle posible la situación que más te preocupa.</li>
                            <li>Saca las líneas una por una y mantén la atención puesta en la pregunta.</li>
                            <li>Lee el hexagrama completo y compara la interpretación con tu situación actual.</li>
                        </ol>
                    </article>
                </div>
        `,
        privacyTitle: "Política de privacidad",
        privacyContent: `
                <p><strong>1. Finalidad de la recogida y uso</strong><br>
                Este servicio recoge el contenido de la preocupación introducida por el usuario. La información se utiliza únicamente para generar y mostrar el resultado mediante IA.</p>
                
                <p><strong>2. Datos personales recogidos</strong><br>
                - Dato obligatorio: el texto de la preocupación escrito directamente por el usuario<br>
                Este servicio no solicita datos identificativos personales como nombre, correo electrónico o número de teléfono.</p>
                
                <p><strong>3. Conservación y uso</strong><br>
                El contenido introducido se mantiene solo temporalmente mientras se genera y se muestra el resultado, y se elimina inmediatamente al terminar el uso del servicio. No se almacena de forma permanente en el servidor.</p>
                
                <p><strong>4. Cesión a terceros y encargados</strong><br>
                Para generar la respuesta de IA, el texto introducido puede enviarse a APIs externas como OpenAI. No se incluyen datos que identifiquen personalmente al usuario, y los proveedores aplican estándares estrictos de protección.</p>
                
                <p><strong>5. Cookies y publicidad</strong><br>
                Este servicio puede mostrar anuncios de Google AdSense y utilizar cookies para ofrecer publicidad personalizada. Puedes rechazar las cookies desde la configuración del navegador.</p>
                
                <p><strong>6. Derechos del usuario</strong><br>
                Puedes retirar tu consentimiento en cualquier momento dejando de utilizar este servicio.</p>
        `,
        backHome: "🐾 Volver al inicio 🐾",
        footerCopy: "&copy; 2026 Maestro Meng: genio del I Ching. All rights reserved.",
        footerNote: "La finalidad principal de este sitio es ayudar a los visitantes a leer interpretaciones del I Ching y ordenar sus pensamientos con calma.",
        trigrams: {
            "111": { name: "Cielo", desc: "una energía fuerte y creadora" },
            "000": { name: "Tierra", desc: "una estabilidad receptiva que acoge" },
            "100": { name: "Trueno", desc: "un nuevo comienzo y un movimiento poderoso" },
            "011": { name: "Viento", desc: "una influencia flexible que se extiende con suavidad" },
            "010": { name: "Agua", desc: "sabiduría que sigue fluyendo incluso en la dificultad" },
            "101": { name: "Fuego", desc: "claridad de juicio y resultados luminosos" },
            "001": { name: "Montaña", desc: "quietud con fuerza interior" },
            "110": { name: "Lago", desc: "armonía nacida de la alegría y la comunicación" }
        }
    }
};

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

const dogBreedsEn = [
    "Golden Retriever", "Border Collie", "Shiba Inu", "Poodle", "Welsh Corgi", "Beagle", "Dachshund", "Yorkshire Terrier",
    "Maltese", "Pomeranian", "Chihuahua", "Shih Tzu", "Bichon Frise", "Jindo Dog", "Pug", "Bulldog",
    "Husky", "Alaskan Malamute", "Samoyed", "Doberman", "German Shepherd", "Labrador Retriever", "Greyhound", "Dalmatian",
    "Cocker Spaniel", "Papillon", "Bull Terrier", "Schnauzer", "Boxer", "Rottweiler", "Mastiff", "Borzoi",
    "Akita", "Chow Chow", "Pekingese", "Saluki", "Whippet", "Basset Hound", "Great Dane", "St. Bernard",
    "Old English Sheepdog", "Irish Wolfhound", "Newfoundland", "Weimaraner", "Rhodesian Ridgeback", "Shar Pei", "Basenji", "Jack Russell Terrier",
    "Cavalier King Charles Spaniel", "Miniature Pinscher", "Tibetan Mastiff", "Afghan Hound", "Bloodhound", "Belgian Shepherd", "Irish Setter", "West Highland White Terrier",
    "Boston Terrier", "French Bulldog", "Scottish Terrier", "Bedlington Terrier", "Welsh Terrier", "Norwegian Elkhound", "English Setter", "Vizsla"
];

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

const hexagramNamesEn = {
    "111111": "The Creative", "000000": "The Receptive", "100010": "Difficulty at the Beginning", "010001": "Youthful Folly",
    "111010": "Waiting", "010111": "Conflict", "000010": "The Army", "010000": "Holding Together",
    "111011": "Small Taming", "110111": "Treading", "111000": "Peace", "000111": "Standstill",
    "111101": "Fellowship", "101111": "Great Possession", "001000": "Modesty", "000100": "Enthusiasm",
    "100110": "Following", "011001": "Work on the Decayed", "110000": "Approach", "000011": "Contemplation",
    "100101": "Biting Through", "101001": "Grace", "000001": "Splitting Apart", "100000": "Return",
    "111100": "Innocence", "001111": "Great Taming", "100001": "Providing Nourishment", "011110": "Preponderance of the Great",
    "010010": "The Abysmal", "101101": "The Clinging", "011000": "Influence", "000110": "Duration",
    "001111": "Retreat", "111100": "Power of the Great", "000101": "Progress", "101000": "Darkening of the Light",
    "101011": "The Family", "110101": "Opposition", "001010": "Obstruction", "010100": "Deliverance",
    "110001": "Decrease", "100011": "Increase", "111110": "Breakthrough", "011111": "Coming to Meet",
    "000110": "Gathering Together", "011000": "Pushing Upward", "010110": "Oppression", "011010": "The Well",
    "101110": "Revolution", "011101": "The Cauldron", "100100": "The Arousing", "001001": "Keeping Still",
    "001011": "Development", "110100": "The Marrying Maiden", "101100": "Abundance", "001101": "The Wanderer",
    "011011": "The Gentle", "110110": "The Joyous", "011010": "Dispersion", "010110": "Limitation",
    "110011": "Inner Truth", "001100": "Preponderance of the Small", "010101": "After Completion", "101010": "Before Completion"
};

// --- (1) State & UI Logic ---
let currentLang = 'ko';
let drawnLines = [];
let userConcern = "";
let visitorCount = null;
let visitorCountState = 'loading';

const VISITOR_COUNTER_STORAGE_KEY = 'paw-iching-visitor-counted-v1';
const VISITOR_COUNTER_URL = 'https://us-central1-bookofchange-71fed.cloudfunctions.net/getVisitorCount';
const ADSENSE_CLIENT_ID = 'ca-pub-3074209859520017';

// Select elements
let titleEl, subtitleEl, labelConcernEl, concernInputEl, startButtonEl, retryButtonEl, disclaimerTextEl, footerCopyEl;
let footerNoteEl;
let navHomeEl, navAboutEl, navPrivacyEl, aboutTitleEl, privacyTitleEl, aboutContentEl, privacyContentEl, publisherContentEl;
let visitorCounterEl, visitorCounterLabelEl, visitorCounterValueEl;
let backHomeButtons;

function hasPublisherContent() {
    const mainContainer = document.getElementById('main-container');
    const homeView = document.getElementById('home-view');
    if (!mainContainer || !homeView) return false;

    const combinedText = (mainContainer.innerText || '').replace(/\s+/g, ' ').trim();
    return combinedText.length >= 300 && homeView.querySelector('#publisher-content');
}

function loadAdSenseScriptIfEligible() {
    if (!hasPublisherContent()) {
        console.warn('AdSense deferred because publisher content was not detected.');
        return;
    }

    if (document.querySelector('script[data-adsense-loader="true"]')) return;

    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.crossOrigin = 'anonymous';
    adScript.dataset.adsenseLoader = 'true';
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    document.head.appendChild(adScript);
}

function updateUI() {
    console.log("Updating UI for:", currentLang);
    const t = i18n[currentLang];
    if (!t) return;

    document.documentElement.lang = currentLang;
    document.title = t.title;

    if (titleEl) titleEl.textContent = t.title;
    if (subtitleEl) subtitleEl.textContent = t.subtitle;
    if (labelConcernEl) labelConcernEl.textContent = t.labelConcern;
    if (concernInputEl) concernInputEl.placeholder = t.placeholder;
    if (startButtonEl) startButtonEl.textContent = t.startButton;
    if (retryButtonEl) retryButtonEl.textContent = t.retryButton;
    if (disclaimerTextEl) disclaimerTextEl.textContent = t.disclaimer;
    if (footerCopyEl) footerCopyEl.innerHTML = t.footerCopy;
    if (footerNoteEl && t.footerNote) footerNoteEl.textContent = t.footerNote;

    if (navHomeEl) navHomeEl.textContent = t.navHome;
    if (navAboutEl) navAboutEl.textContent = t.navAbout;
    if (navPrivacyEl) navPrivacyEl.textContent = t.navPrivacy;
    if (aboutTitleEl) aboutTitleEl.textContent = t.aboutTitle;
    if (privacyTitleEl) privacyTitleEl.textContent = t.privacyTitle;
    if (aboutContentEl) aboutContentEl.innerHTML = t.aboutContent;
    if (publisherContentEl && t.publisherContent) publisherContentEl.innerHTML = t.publisherContent;
    if (privacyContentEl) privacyContentEl.innerHTML = t.privacyContent;

    updateVisitorCounterUI();
    backHomeButtons.forEach(btn => btn.textContent = t.backHome);

    const divinationView = document.getElementById('divination-view');
    if (divinationView && !divinationView.classList.contains('hidden')) {
        const countDisplay = document.getElementById('divination-guide');
        if (countDisplay) countDisplay.textContent = t.divinationGuide(drawnLines.length);
    }
}

function showView(viewId) {
    console.log("Showing view:", viewId);
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}
function formatVisitorCount(value) {
    if (!Number.isFinite(value)) return '--';
    return new Intl.NumberFormat(currentLang).format(value);
}

function updateVisitorCounterUI() {
    const t = i18n[currentLang];
    if (!t || !visitorCounterLabelEl || !visitorCounterValueEl || !visitorCounterEl) return;

    visitorCounterLabelEl.textContent = t.visitorLabel;
    visitorCounterValueEl.textContent = visitorCountState === 'ready'
        ? formatVisitorCount(visitorCount)
        : visitorCountState === 'loading'
            ? t.visitorLoading
            : '--';
    visitorCounterEl.setAttribute('aria-label', t.visitorLabel + ' ' + visitorCounterValueEl.textContent);
}

async function syncVisitorCount() {
    let shouldIncrement = false;

    try {
        shouldIncrement = localStorage.getItem(VISITOR_COUNTER_STORAGE_KEY) !== '1';
    } catch (error) {
        console.warn('localStorage unavailable for visitor counter:', error);
        shouldIncrement = true;
    }

    try {
        const requestUrl = new URL(VISITOR_COUNTER_URL);
        if (shouldIncrement) requestUrl.searchParams.set('increment', '1');

        const res = await fetch(requestUrl.toString(), { method: 'GET' });

        if (!res.ok) throw new Error('Visitor counter request failed with ' + res.status);

        const data = await res.json();
        const nextCount = Number(data.count);
        if (!Number.isFinite(nextCount)) {
            throw new Error('Visitor counter returned an invalid count');
        }

        visitorCount = nextCount;
        visitorCountState = 'ready';
        updateVisitorCounterUI();

        if (shouldIncrement) {
            try {
                localStorage.setItem(VISITOR_COUNTER_STORAGE_KEY, '1');
            } catch (error) {
                console.warn('Unable to persist visitor counter state:', error);
            }
        }
    } catch (error) {
        console.error('Visitor counter error:', error);
        visitorCount = null;
        visitorCountState = 'error';
        updateVisitorCounterUI();
    }
}

// Initial setup after DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Initializing...");

    // Map elements
    titleEl = document.getElementById('title');
    subtitleEl = document.getElementById('subtitle');
    labelConcernEl = document.getElementById('label-concern');
    concernInputEl = document.getElementById('concern-input');
    startButtonEl = document.getElementById('start-button');
    retryButtonEl = document.getElementById('retry-button');
    disclaimerTextEl = document.getElementById('disclaimer-text');
    footerCopyEl = document.getElementById('footer-copy');
    footerNoteEl = document.getElementById('footer-note');

    navHomeEl = document.getElementById('nav-home');
    navAboutEl = document.getElementById('nav-about');
    navPrivacyEl = document.getElementById('nav-privacy');
    aboutTitleEl = document.getElementById('about-title');
    privacyTitleEl = document.getElementById('privacy-title');
    aboutContentEl = document.getElementById('about-content');
    publisherContentEl = document.getElementById('publisher-content');
    privacyContentEl = document.getElementById('privacy-content');
    visitorCounterEl = document.getElementById('visitor-counter');
    visitorCounterLabelEl = document.getElementById('visitor-counter-label');
    visitorCounterValueEl = document.getElementById('visitor-counter-value');
    backHomeButtons = document.querySelectorAll('.back-home-button');

    updateVisitorCounterUI();

    // Language Switcher
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            console.log("Language changed to:", currentLang);
            updateUI();
        });
    } else {
        console.error("lang-select not found!");
    }

    // Navigation
    if (navHomeEl) navHomeEl.addEventListener('click', (e) => { e.preventDefault(); showView('home-view'); });
    if (navAboutEl) navAboutEl.addEventListener('click', (e) => { e.preventDefault(); showView('about-view'); });
    if (navPrivacyEl) navPrivacyEl.addEventListener('click', (e) => { e.preventDefault(); showView('privacy-view'); });
    backHomeButtons.forEach(btn => btn.addEventListener('click', () => showView('home-view')));

    // Fortune Logic
    if (startButtonEl) {
        startButtonEl.addEventListener('click', () => {
            userConcern = concernInputEl.value.trim();
            if (!userConcern) { alert(i18n[currentLang].alertEmptyConcern); return; }
            document.getElementById('input-view').classList.add('hidden');
            document.getElementById('divination-view').classList.remove('hidden');
            drawnLines = [];
            document.getElementById('drawn-lines-container').innerHTML = "";
            document.getElementById('divination-guide').textContent = i18n[currentLang].divinationGuide(0);
        });
    }

    const divBox = document.getElementById('divination-sticks-container');
    if (divBox) {
        divBox.addEventListener('click', () => {
            if (drawnLines.length >= 6) return;
            const popStick = document.querySelector('.popping-stick');
            popStick.classList.remove('pop-anim'); void popStick.offsetWidth; popStick.classList.add('pop-anim');
            
            const line = Math.random() > 0.5 ? 1 : 0;
            drawnLines.push(line);
            
            setTimeout(() => {
                const lineEl = document.createElement('div');
                lineEl.className = `yao-line ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
                document.getElementById('drawn-lines-container').appendChild(lineEl);
                document.getElementById('divination-guide').textContent = i18n[currentLang].divinationGuide(drawnLines.length);
                if (drawnLines.length === 6) setTimeout(showResult, 1000);
            }, 400);
        });
    }

    if (retryButtonEl) {
        retryButtonEl.addEventListener('click', () => {
            document.getElementById('fortune-result').classList.add('hidden');
            document.getElementById('input-view').classList.remove('hidden');
            concernInputEl.value = "";
        });
    }

    updateUI();
    syncVisitorCount();
    window.requestAnimationFrame(loadAdSenseScriptIfEligible);
});

async function generateFortune(userConcern, guaInfo) {
    const functionUrl = "https://generatefortune-zx5bjhhklq-uc.a.run.app";
    try {
        const res = await fetch(functionUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userConcern, guaInfo, lang: currentLang })
        });
        const data = await res.json();
        return data.result;
    } catch (e) {
        console.error("🔥 Error:", e);
        return null;
    }
}

async function showResult() {
    const t = i18n[currentLang];
    document.getElementById('divination-view').classList.add('hidden');
    document.getElementById('fortune-result').classList.remove('hidden');
    const interpretationEl = document.getElementById('hexagram-interpretation');
    interpretationEl.innerHTML = `<p style="text-align:center;">${t.analyzing}</p>`;

    const hexKey = drawnLines.join('');
    const lowerKey = hexKey.substring(0, 3);
    const upperKey = hexKey.substring(3, 6);
    
    let hexName = hexagramNames[hexKey] || t.defaultHexName;
    if (currentLang !== 'ko') { hexName = hexagramNamesEn[hexKey] || hexName; }

    const breedIdx = parseInt(hexKey, 2) % 64;
    let breedName = dogBreeds[breedIdx];
    if (currentLang !== 'ko') { breedName = dogBreedsEn[breedIdx] || breedName; }

    document.getElementById('dog-pixel-art-container').innerHTML = generateAnimatedDogSVG(breedIdx);
    document.getElementById('dog-breed-name').textContent = `${t.dogBreedLabel}${breedName}`;
    document.getElementById('hexagram-name').textContent = hexName;
    document.getElementById('user-concern-display').textContent = `${t.qPrefix}"${userConcern}"`;

    const miniYaoContainer = document.getElementById('hexagram-shape-display');
    miniYaoContainer.innerHTML = "";
    drawnLines.forEach(line => {
        const miniYao = document.createElement('div');
        miniYao.className = `mini-yao ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        miniYaoContainer.appendChild(miniYao);
    });

    const finalAdvice = await generateFortune(userConcern, { name: hexName });
    
    const trigrams = t.trigrams;
    const interaction = t.interactionTemplate(trigrams[lowerKey].name, trigrams[upperKey].name, trigrams[lowerKey].desc, trigrams[upperKey].desc);

    interpretationEl.innerHTML = `
        <p>${t.empathy}</p>
        <hr style="border: 0; border-top: 1px solid #ffe5ec; margin: 20px 0;">
        <p>${interaction}</p>
        <p>${(finalAdvice || t.fallbackAdvice || (currentLang === 'ko' ? "조금만 더 인내심을 갖고 때를 기다려봐." : "Be patient.")).replace(/\n/g, '<br>')}</p>
    `;
}

function generateAnimatedDogSVG(idx) {
    const palette = [
        { main: "#F5D6A7", shadow: "#D7B891", light: "#FFF0D1" },
        { main: "#E67E22", shadow: "#D35400", light: "#EB984E" },
        { main: "#D2B48C", shadow: "#A68D60", light: "#E5D3B3" },
        { main: "#795548", shadow: "#5D4037", light: "#8D6E63" },
        { main: "#555555", shadow: "#333333", light: "#777777" },
        { main: "#FFFFFF", shadow: "#E0E0E0", light: "#FFFFFF" }
    ];
    const c = palette[idx % palette.length];
    const tailWag = (0.3 + (idx % 4) * 0.15) + "s";

    return `<svg width="256" height="256" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" shape-rendering="pixelated">
        <style>
            @keyframes wag { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(15deg); } }
            @keyframes breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.03); } }
            @keyframes blink { 0%, 90%, 100% { opacity: 1; } 95% { opacity: 0; } }
            .dog-body { transform-origin: bottom; animation: breathe 2.5s infinite ease-in-out; }
            .dog-tail { transform-origin: 18px 18px; animation: wag ${tailWag} infinite ease-in-out; }
            .dog-eyes { animation: blink 4s infinite; }
        </style>
        <g class="dog-body">
            <rect x="18" y="15" width="3" height="3" fill="${c.shadow}" class="dog-tail" />
            <rect x="6" y="12" width="12" height="8" fill="${c.main}" />
            <rect x="6" y="18" width="12" height="2" fill="${c.shadow}" />
            <rect x="7" y="12" width="8" height="1" fill="${c.light}" />
            <rect x="5" y="5" width="10" height="8" fill="${c.main}" />
            <rect x="13" y="5" width="2" height="8" fill="${c.shadow}" />
            <rect x="6" y="5" width="7" height="1" fill="${c.light}" />
            <rect x="4" y="4" width="3" height="4" fill="${c.shadow}" />
            <rect x="13" y="4" width="3" height="4" fill="${c.shadow}" />
            <g class="dog-eyes"><rect x="7" y="8" width="1" height="1" fill="#000" /><rect x="11" y="8" width="1" height="1" fill="#000" /></g>
            <rect x="9" y="10" width="2" height="1" fill="#000" />
            <rect x="6" y="10" width="1" height="1" fill="#FFB6C1" opacity="0.6" /><rect x="13" y="10" width="1" height="1" fill="#FFB6C1" opacity="0.6" />
            <rect x="7" y="20" width="2" height="2" fill="${c.shadow}" /><rect x="15" y="20" width="2" height="2" fill="${c.shadow}" />
        </g>
    </svg>`;
}
