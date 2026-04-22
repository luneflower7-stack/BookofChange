const GUIDE_LOCALES = {
  ko: {
    eyebrow: "I Ching Library",
    title: "주역 64괘 현대어 해설",
    intro:
      "각 괘를 오늘의 생활 언어로 다시 풀었습니다. 괘 이름만 보여 주는 대신, 지금 어떤 국면인지와 어떤 태도가 필요한지를 한 문단씩 정리해 두었습니다.",
    note:
      "이 해설은 단정적인 예언이 아니라 읽고 생각하기 위한 안내문입니다. 건강, 법률, 투자처럼 신중함이 필요한 문제는 현실 정보와 함께 판단하세요.",
    alternateNameLabel: "영문 이름",
    themeLabel: "핵심 분위기",
    readingLabel: "현대어 해석",
    adviceLabel: "이렇게 읽어보세요",
    modernReading: (essence, scenario) =>
      `이 괘는 ${essence}을(를) 보여 줍니다. 특히 ${scenario}에 놓였을 때 의미가 또렷해집니다.`,
    advice: (action) => `지금은 ${action} 쪽이 더 잘 맞습니다.`,
    essence: {
      initiative: "강하게 밀고 나가는 추진력",
      receptivity: "받아들이고 품어 주는 수용력",
      uncertainStart: "시작은 했지만 아직 형태가 잡히지 않은 단계",
      learning: "모른다는 사실을 인정하며 배우는 태도",
      patience: "서두르지 않고 때를 보는 인내",
      discipline: "원칙과 역할을 세우는 질서",
      cooperation: "사람과 흐름을 연결하는 협력",
      restraint: "과열을 줄이고 범위를 조절하는 절제",
      balance: "상반된 힘을 조화시키는 균형",
      clarity: "핵심을 드러내는 명료함",
      humility: "자신을 낮추며 실속을 쌓는 겸손",
      renewal: "낡은 흐름을 바꾸는 전환",
      steadiness: "오래 이어 가는 꾸준함"
    },
    scenario: {
      buildingBase: "겉으로 드러나는 성과보다 바닥을 다지는 일이 먼저일 때",
      facingConflict: "의견 충돌과 이해관계가 복잡하게 얽혀 있을 때",
      waitingWindow: "속도보다 타이밍이 더 중요할 때",
      teamEffort: "여러 사람이 같은 방향을 맞춰야 할 때",
      relationshipShift: "관계나 파트너십의 분위기가 바뀌고 있을 때",
      innerReflection: "답을 바깥보다 안쪽에서 먼저 찾아야 할 때",
      externalPressure: "바깥 압박 때문에 성급히 반응하고 싶을 때",
      risingOpportunity: "새 기회가 떠오르지만 아직 모양이 덜 잡혔을 때",
      endingCycle: "한 국면이 끝나고 다음 단계가 정착되지 않았을 때",
      resourceManagement: "시간, 돈, 체력을 아껴 써야 할 때",
      emotionalOverload: "감정이 판단보다 앞서 달리고 있을 때",
      decisionPoint: "중요한 선택을 더는 미루기 어려울 때"
    },
    action: {
      startSmall: "작아도 확실한 한 걸음부터 시작하는 것",
      listenDeeply: "결론보다 경청을 조금 더 늘리는 것",
      holdCenter: "중심을 지키며 과잉 반응을 줄이는 것",
      prepareQuietly: "밀어붙이기 전에 실력과 구조를 다지는 것",
      trimExcess: "군더더기를 덜어 핵심을 살리는 것",
      seekAllies: "혼자 버티기보다 맞는 사람과 연결되는 것",
      protectEnergy: "정말 중요한 곳에 쓸 힘을 남겨 두는 것",
      speakPlainly: "핵심을 차분하고 분명하게 말하는 것",
      moveGradually: "단계를 나눠 천천히 전진하는 것",
      changeCourse: "자존심 비용이 커지기 전에 방향을 조정하는 것",
      finishWell: "지금 장면을 깔끔하게 마무리하는 것",
      trustTiming: "억지 답을 내기보다 시기가 익기를 기다리는 것",
      leadClearly: "방향을 분명히 세우고 흔들림 없이 이끄는 것",
      stayModest: "성과가 보여도 태도는 낮게 유지하는 것",
      repairFirst: "더 키우기 전에 약한 고리를 먼저 고치는 것"
    }
  },
  en: {
    eyebrow: "I Ching Library",
    title: "64 Hexagrams in Plain Language",
    intro:
      "Each hexagram is rewritten in practical modern language. Instead of showing only a traditional title, this guide explains what kind of moment you may be in and what attitude fits that moment.",
    note:
      "These notes are for reflection, not absolute prediction. For health, legal, or financial matters, weigh them against real-world facts and expert advice.",
    alternateNameLabel: "Korean name",
    themeLabel: "Core mood",
    readingLabel: "Modern reading",
    adviceLabel: "How to use it",
    modernReading: (essence, scenario) =>
      `This hexagram points to ${essence}. Its meaning becomes clearer when ${scenario}.`,
    advice: (action) => `For now, it is wiser to ${action}.`,
    essence: {
      initiative: "forward-driving initiative",
      receptivity: "receptive support and patience",
      uncertainStart: "a beginning that still feels unstable",
      learning: "the humility to learn before acting",
      patience: "patience that waits for the right moment",
      discipline: "order built through roles and rules",
      cooperation: "connection and cooperation with others",
      restraint: "restraint that prevents excess",
      balance: "balance between opposing forces",
      clarity: "clarity that reveals what matters",
      humility: "humility that builds substance quietly",
      renewal: "renewal that changes an old pattern",
      steadiness: "steady commitment that lasts"
    },
    scenario: {
      buildingBase: "you are laying the groundwork before visible results",
      facingConflict: "opinions are colliding and priorities are tangled",
      waitingWindow: "timing matters more than speed",
      teamEffort: "people need to align around a shared direction",
      relationshipShift: "the tone of a relationship or partnership is changing",
      innerReflection: "the answer becomes clearer when you slow down and look inward",
      externalPressure: "outside pressure is pushing you to react too quickly",
      risingOpportunity: "a new opening is appearing but still needs shape",
      endingCycle: "one phase is ending and the next has not settled yet",
      resourceManagement: "energy, money, or attention must be managed carefully",
      emotionalOverload: "emotion is running ahead of judgment",
      decisionPoint: "a meaningful choice can no longer be delayed much longer"
    },
    action: {
      startSmall: "begin with a small reliable step",
      listenDeeply: "listen longer before deciding",
      holdCenter: "protect your center and avoid overreaction",
      prepareQuietly: "build skill and structure before pushing forward",
      trimExcess: "cut what is unnecessary so the core can work",
      seekAllies: "ask for support and coordinate with the right people",
      protectEnergy: "save energy for the part that truly matters",
      speakPlainly: "say the key point plainly and calmly",
      moveGradually: "advance in measured stages",
      changeCourse: "adjust course before the cost of pride grows",
      finishWell: "close the current chapter cleanly",
      trustTiming: "let timing mature instead of forcing an answer",
      leadClearly: "state your direction clearly and lead with consistency",
      stayModest: "keep your ego low while your work grows",
      repairFirst: "fix the weak link before trying to expand"
    }
  },
  ja: {
    eyebrow: "I Ching Library",
    title: "周易64卦を現代語で読む",
    intro:
      "各卦をいまの生活感覚に合わせて説明した読み物です。古典的な名前だけで終わらせず、どんな局面なのか、どんな姿勢が合うのかを短く整理しています。",
    note:
      "ここでの解説は断定的な予言ではなく、考えるための手引きです。健康、法律、投資のような分野では現実の情報も必ず確認してください。",
    alternateNameLabel: "英語名",
    themeLabel: "中心となる空気",
    readingLabel: "現代語の解釈",
    adviceLabel: "読み方のヒント",
    modernReading: (essence, scenario) =>
      `この卦は${essence}を示します。とくに${scenario}ときに意味がはっきりします。`,
    advice: (action) => `今は、${action}ほうが合っています。`,
    essence: {
      initiative: "前へ押し出す推進力",
      receptivity: "受け止めて支える受容力",
      uncertainStart: "始まったものの形がまだ不安定な段階",
      learning: "まず学ぶことを認める謙虚さ",
      patience: "適切な時を待つ忍耐",
      discipline: "役割とルールで整える秩序",
      cooperation: "人と流れをつなぐ協力",
      restraint: "行き過ぎを防ぐ節度",
      balance: "反対の力を調和させる均衡",
      clarity: "大事な点を照らし出す明瞭さ",
      humility: "静かに実力を積む謙虚さ",
      renewal: "古い流れを変える転換",
      steadiness: "長く続ける着実さ"
    },
    scenario: {
      buildingBase: "目に見える成果より土台づくりが先になる",
      facingConflict: "意見の衝突と利害のもつれが起きている",
      waitingWindow: "速さよりタイミングが重要になる",
      teamEffort: "複数の人が同じ方向を合わせる必要がある",
      relationshipShift: "関係やパートナーシップの空気が変わっている",
      innerReflection: "外より先に内面を見たほうが答えに近づく",
      externalPressure: "外からの圧力で急いで反応したくなる",
      risingOpportunity: "新しい機会が見え始めたが、まだ形が固まっていない",
      endingCycle: "一つの段階が終わり、次がまだ落ち着いていない",
      resourceManagement: "時間、お金、体力を慎重に配分すべき",
      emotionalOverload: "感情が判断より先に走っている",
      decisionPoint: "大事な選択をあまり先延ばしにできない"
    },
    action: {
      startSmall: "小さくても確かな一歩から始める",
      listenDeeply: "結論より先にもう少し深く聞く",
      holdCenter: "中心を守り、過剰反応を減らす",
      prepareQuietly: "押し出す前に実力と構造を整える",
      trimExcess: "余分を削って核心を残す",
      seekAllies: "一人で抱えず、合う人と組む",
      protectEnergy: "本当に大事な所に使う力を残す",
      speakPlainly: "要点を落ち着いて率直に伝える",
      moveGradually: "段階を分けて少しずつ進む",
      changeCourse: "意地のコストが増える前に方向を修正する",
      finishWell: "今の章をきれいに閉じる",
      trustTiming: "無理に答えを出さず時機が熟すのを待つ",
      leadClearly: "方向を明確にしてぶれずに導く",
      stayModest: "成果が見えても態度は低く保つ",
      repairFirst: "広げる前に弱い部分を先に直す"
    }
  },
  zh: {
    eyebrow: "I Ching Library",
    title: "用现代语言读懂周易64卦",
    intro:
      "这里把每一卦改写成更接近日常生活的说明，不只给出卦名，还会说明你可能正处在哪一种局面，以及更适合采取什么态度。",
    note:
      "这些内容更适合用来整理思路，不应视为绝对预言。遇到健康、法律、投资等问题时，请同时参考现实信息与专业意见。",
    alternateNameLabel: "英文名",
    themeLabel: "核心气氛",
    readingLabel: "现代解读",
    adviceLabel: "阅读提示",
    modernReading: (essence, scenario) =>
      `这一卦强调${essence}。尤其当${scenario}时，它的含义会更清楚。`,
    advice: (action) => `现阶段，更适合${action}。`,
    essence: {
      initiative: "向前推进的主动性",
      receptivity: "接住局势的包容与耐心",
      uncertainStart: "已经开始但形状仍不稳定的阶段",
      learning: "先承认自己需要学习的谦逊",
      patience: "等待正确时机的耐心",
      discipline: "依靠角色和规则建立的秩序",
      cooperation: "把人与局势连接起来的协作",
      restraint: "防止过度扩张的克制",
      balance: "让相反力量保持协调的平衡",
      clarity: "照亮重点的清晰感",
      humility: "低姿态积累实力的谦和",
      renewal: "改变旧有模式的转向",
      steadiness: "能够长期持续的稳定性"
    },
    scenario: {
      buildingBase: "比起表面的成果，更需要先打基础",
      facingConflict: "意见冲撞、优先顺序纠结在一起",
      waitingWindow: "时机比速度更重要",
      teamEffort: "需要多人朝同一方向对齐",
      relationshipShift: "关系或合作气氛正在变化",
      innerReflection: "比起外部答案，更该先向内看",
      externalPressure: "外部压力让你很想立刻反应",
      risingOpportunity: "新机会正在出现，但还没有完全成形",
      endingCycle: "一个阶段结束了，下一个阶段还没稳定",
      resourceManagement: "时间、金钱或精力需要更谨慎地分配",
      emotionalOverload: "情绪跑在判断前面",
      decisionPoint: "重要选择已经很难再拖下去"
    },
    action: {
      startSmall: "先从小而确定的一步开始",
      listenDeeply: "在下决定前先多听一点",
      holdCenter: "守住中心，避免反应过度",
      prepareQuietly: "先补强能力和结构，再往前推",
      trimExcess: "删掉多余部分，让核心真正运作",
      seekAllies: "不要硬撑，主动连接合适的人",
      protectEnergy: "把力量留给真正重要的部分",
      speakPlainly: "把关键点平静而明确地说出来",
      moveGradually: "分阶段、慢慢推进",
      changeCourse: "别让面子成本变高，及早调整方向",
      finishWell: "把当前这一章收好收稳",
      trustTiming: "不要硬逼答案，等时机成熟",
      leadClearly: "明确方向，并稳定地带头前进",
      stayModest: "即使有成绩，也保持低姿态",
      repairFirst: "扩张前先修好最弱的一环"
    }
  },
  fr: {
    eyebrow: "I Ching Library",
    title: "Les 64 hexagrammes en langage clair",
    intro:
      "Chaque hexagramme est reformulé dans une langue plus proche de la vie quotidienne. Au lieu d'afficher seulement un nom ancien, cette page explique le type de moment traversé et l'attitude la plus utile.",
    note:
      "Ces textes servent surtout à réfléchir. Ils ne remplacent pas des faits vérifiés ni un avis professionnel pour la santé, le droit ou la finance.",
    alternateNameLabel: "Nom anglais",
    themeLabel: "Climat central",
    readingLabel: "Lecture moderne",
    adviceLabel: "Piste de lecture",
    modernReading: (essence, scenario) =>
      `Cet hexagramme montre ${essence}. Son sens devient plus net lorsque ${scenario}.`,
    advice: (action) => `Pour l'instant, il vaut mieux ${action}.`,
    essence: {
      initiative: "un élan qui pousse vers l'avant",
      receptivity: "une capacité d'accueil et de soutien",
      uncertainStart: "un début déjà lancé mais encore instable",
      learning: "l'humilité d'apprendre avant d'agir",
      patience: "la patience qui attend le bon moment",
      discipline: "un ordre construit par les rôles et les règles",
      cooperation: "la coopération qui relie les personnes",
      restraint: "la retenue qui évite l'excès",
      balance: "l'équilibre entre des forces opposées",
      clarity: "la clarté qui révèle l'essentiel",
      humility: "une modestie qui construit en profondeur",
      renewal: "un renouvellement qui change un vieux schéma",
      steadiness: "une constance capable de durer"
    },
    scenario: {
      buildingBase: "le travail de fond passe avant les résultats visibles",
      facingConflict: "les avis s'entrechoquent et les priorités se brouillent",
      waitingWindow: "le timing compte plus que la vitesse",
      teamEffort: "plusieurs personnes doivent s'aligner sur une même direction",
      relationshipShift: "le ton d'une relation ou d'un partenariat change",
      innerReflection: "la réponse devient plus claire si l'on regarde d'abord en soi",
      externalPressure: "la pression extérieure pousse à réagir trop vite",
      risingOpportunity: "une nouvelle ouverture apparaît sans être encore stabilisée",
      endingCycle: "une phase se termine et la suivante n'est pas encore posée",
      resourceManagement: "l'énergie, l'argent ou l'attention doivent être gérés avec soin",
      emotionalOverload: "l'émotion court plus vite que le jugement",
      decisionPoint: "un choix important devient difficile à repousser davantage"
    },
    action: {
      startSmall: "commencer par un petit pas fiable",
      listenDeeply: "écouter un peu plus avant de trancher",
      holdCenter: "garder son centre et réduire la surréaction",
      prepareQuietly: "consolider la structure avant de pousser",
      trimExcess: "retirer le superflu pour laisser agir l'essentiel",
      seekAllies: "chercher l'appui des bonnes personnes",
      protectEnergy: "préserver son énergie pour ce qui compte vraiment",
      speakPlainly: "dire l'essentiel avec calme et netteté",
      moveGradually: "avancer par étapes mesurées",
      changeCourse: "corriger la direction avant que l'orgueil coûte plus cher",
      finishWell: "fermer proprement le chapitre en cours",
      trustTiming: "laisser mûrir le moment au lieu de forcer une réponse",
      leadClearly: "poser une direction claire et conduire avec constance",
      stayModest: "rester modeste même quand les résultats apparaissent",
      repairFirst: "réparer le maillon faible avant d'agrandir"
    }
  },
  de: {
    eyebrow: "I Ching Library",
    title: "Die 64 Hexagramme in klarer Sprache",
    intro:
      "Jedes Hexagramm wird hier in alltagsnaher Sprache erklärt. Statt nur einen klassischen Namen zu zeigen, beschreibt diese Seite die Lage und die Haltung, die in dieser Lage besser passt.",
    note:
      "Diese Hinweise sind Denkanstöße, keine absolute Vorhersage. Bei Gesundheit, Recht oder Finanzen sollten immer auch reale Informationen und Fachleute einbezogen werden.",
    alternateNameLabel: "Englischer Name",
    themeLabel: "Grundstimmung",
    readingLabel: "Moderne Deutung",
    adviceLabel: "Praktischer Hinweis",
    modernReading: (essence, scenario) =>
      `Dieses Hexagramm steht für ${essence}. Besonders deutlich wird es, wenn ${scenario}.`,
    advice: (action) => `Im Moment ist es klüger, ${action}.`,
    essence: {
      initiative: "vorwärtstreibende Initiative",
      receptivity: "aufnehmende Unterstützung und Geduld",
      uncertainStart: "ein Beginn, der noch keine feste Form hat",
      learning: "die Demut, vor dem Handeln zu lernen",
      patience: "Geduld für den richtigen Zeitpunkt",
      discipline: "Ordnung durch Rollen und Regeln",
      cooperation: "Verbindung und Zusammenarbeit mit anderen",
      restraint: "Zurückhaltung gegen Übermaß",
      balance: "Ausgleich zwischen gegensätzlichen Kräften",
      clarity: "Klarheit, die das Wesentliche sichtbar macht",
      humility: "Bescheidenheit, die Substanz aufbaut",
      renewal: "Erneuerung, die ein altes Muster verändert",
      steadiness: "Beständigkeit, die lange trägt"
    },
    scenario: {
      buildingBase: "zuerst das Fundament gestärkt werden muss",
      facingConflict: "Meinungen aufeinanderprallen und Prioritäten verknotet sind",
      waitingWindow: "Timing wichtiger ist als Tempo",
      teamEffort: "mehrere Menschen sich auf eine Richtung ausrichten müssen",
      relationshipShift: "sich der Ton einer Beziehung oder Partnerschaft verändert",
      innerReflection: "die Antwort klarer wird, wenn man zuerst nach innen schaut",
      externalPressure: "äußerer Druck zu schnellen Reaktionen drängt",
      risingOpportunity: "sich eine neue Chance zeigt, aber noch Form braucht",
      endingCycle: "eine Phase endet und die nächste noch nicht stabil ist",
      resourceManagement: "Energie, Geld oder Aufmerksamkeit sorgfältig eingeteilt werden müssen",
      emotionalOverload: "Emotion schneller läuft als Urteilskraft",
      decisionPoint: "eine wichtige Entscheidung kaum noch aufschiebbar ist"
    },
    action: {
      startSmall: "mit einem kleinen verlässlichen Schritt zu beginnen",
      listenDeeply: "vor der Entscheidung länger zuzuhören",
      holdCenter: "die eigene Mitte zu schützen und Überreaktionen zu vermeiden",
      prepareQuietly: "Fähigkeit und Struktur zuerst still aufzubauen",
      trimExcess: "Unnötiges wegzunehmen, damit der Kern arbeiten kann",
      seekAllies: "passende Verbündete einzubeziehen",
      protectEnergy: "Kraft für das wirklich Wichtige aufzusparen",
      speakPlainly: "den Kern ruhig und klar auszusprechen",
      moveGradually: "in gut abgemessenen Schritten vorzugehen",
      changeCourse: "den Kurs anzupassen, bevor Stolz zu teuer wird",
      finishWell: "das aktuelle Kapitel sauber abzuschließen",
      trustTiming: "den Zeitpunkt reifen zu lassen statt Antworten zu erzwingen",
      leadClearly: "eine klare Richtung zu setzen und verlässlich zu führen",
      stayModest: "trotz Erfolgen bescheiden zu bleiben",
      repairFirst: "zuerst die schwache Stelle zu reparieren"
    }
  },
  es: {
    eyebrow: "I Ching Library",
    title: "Los 64 hexagramas en lenguaje claro",
    intro:
      "Cada hexagrama está explicado con un lenguaje más cercano a la vida actual. En lugar de mostrar solo un nombre clásico, esta guía resume qué tipo de momento estás viviendo y qué actitud puede servir mejor.",
    note:
      "Estas lecturas son orientativas y sirven para pensar. En temas de salud, derecho o finanzas, compáralas siempre con datos reales y asesoría profesional.",
    alternateNameLabel: "Nombre en inglés",
    themeLabel: "Clima central",
    readingLabel: "Lectura moderna",
    adviceLabel: "Sugerencia práctica",
    modernReading: (essence, scenario) =>
      `Este hexagrama habla de ${essence}. Su sentido se vuelve más claro cuando ${scenario}.`,
    advice: (action) => `Por ahora, conviene más ${action}.`,
    essence: {
      initiative: "una iniciativa que empuja hacia adelante",
      receptivity: "una capacidad de recibir y sostener",
      uncertainStart: "un comienzo que ya existe pero aún es inestable",
      learning: "la humildad de aprender antes de actuar",
      patience: "la paciencia que espera el momento correcto",
      discipline: "el orden construido con reglas y funciones",
      cooperation: "la cooperación que conecta a las personas",
      restraint: "la contención que evita el exceso",
      balance: "el equilibrio entre fuerzas opuestas",
      clarity: "la claridad que muestra lo esencial",
      humility: "la modestia que construye sustancia en silencio",
      renewal: "la renovación que cambia un patrón viejo",
      steadiness: "una constancia capaz de durar"
    },
    scenario: {
      buildingBase: "todavía toca construir base antes de ver resultados",
      facingConflict: "las opiniones chocan y las prioridades se enredan",
      waitingWindow: "el momento oportuno importa más que la velocidad",
      teamEffort: "varias personas necesitan alinearse en una misma dirección",
      relationshipShift: "está cambiando el tono de una relación o alianza",
      innerReflection: "la respuesta se aclara más al mirar hacia dentro",
      externalPressure: "la presión externa empuja a reaccionar demasiado rápido",
      risingOpportunity: "aparece una oportunidad nueva que aún necesita forma",
      endingCycle: "una etapa termina y la siguiente todavía no se asienta",
      resourceManagement: "hay que administrar con cuidado energía, dinero o atención",
      emotionalOverload: "la emoción va por delante del juicio",
      decisionPoint: "una decisión importante ya no puede aplazarse mucho"
    },
    action: {
      startSmall: "empezar con un paso pequeño pero seguro",
      listenDeeply: "escuchar más antes de decidir",
      holdCenter: "proteger tu centro y evitar reaccionar de más",
      prepareQuietly: "fortalecer la estructura antes de empujar",
      trimExcess: "quitar lo sobrante para que funcione lo esencial",
      seekAllies: "buscar apoyo y coordinarte con la gente adecuada",
      protectEnergy: "guardar energía para lo que de verdad importa",
      speakPlainly: "decir el punto clave con calma y claridad",
      moveGradually: "avanzar por etapas medidas",
      changeCourse: "cambiar de rumbo antes de que el orgullo salga caro",
      finishWell: "cerrar bien el capítulo actual",
      trustTiming: "dejar madurar el momento en vez de forzar una respuesta",
      leadClearly: "marcar una dirección clara y liderar con constancia",
      stayModest: "mantener la modestia aunque ya haya resultados",
      repairFirst: "reparar primero el punto débil antes de crecer"
    }
  }
};

const HEXAGRAM_GUIDE_ENTRIES = [
  { number: 1, koName: "중천건", enName: "The Creative", essence: "initiative", scenario: "risingOpportunity", action: "leadClearly" },
  { number: 2, koName: "중지곤", enName: "The Receptive", essence: "receptivity", scenario: "buildingBase", action: "holdCenter" },
  { number: 3, koName: "수뢰둔", enName: "Difficulty at the Beginning", essence: "uncertainStart", scenario: "buildingBase", action: "startSmall" },
  { number: 4, koName: "산수몽", enName: "Youthful Folly", essence: "learning", scenario: "innerReflection", action: "listenDeeply" },
  { number: 5, koName: "수천수", enName: "Waiting", essence: "patience", scenario: "waitingWindow", action: "trustTiming" },
  { number: 6, koName: "천수송", enName: "Conflict", essence: "discipline", scenario: "facingConflict", action: "speakPlainly" },
  { number: 7, koName: "지수사", enName: "The Army", essence: "discipline", scenario: "teamEffort", action: "leadClearly" },
  { number: 8, koName: "수지비", enName: "Holding Together", essence: "cooperation", scenario: "relationshipShift", action: "seekAllies" },
  { number: 9, koName: "풍천소축", enName: "Small Taming", essence: "restraint", scenario: "buildingBase", action: "prepareQuietly" },
  { number: 10, koName: "천택리", enName: "Treading", essence: "balance", scenario: "relationshipShift", action: "moveGradually" },
  { number: 11, koName: "지천태", enName: "Peace", essence: "balance", scenario: "risingOpportunity", action: "holdCenter" },
  { number: 12, koName: "천지비", enName: "Standstill", essence: "restraint", scenario: "externalPressure", action: "protectEnergy" },
  { number: 13, koName: "천화동인", enName: "Fellowship with Men", essence: "cooperation", scenario: "teamEffort", action: "seekAllies" },
  { number: 14, koName: "화천대유", enName: "Great Possession", essence: "clarity", scenario: "risingOpportunity", action: "leadClearly" },
  { number: 15, koName: "지산겸", enName: "Modesty", essence: "humility", scenario: "buildingBase", action: "stayModest" },
  { number: 16, koName: "뇌지예", enName: "Enthusiasm", essence: "initiative", scenario: "risingOpportunity", action: "startSmall" },
  { number: 17, koName: "택뢰수", enName: "Following", essence: "cooperation", scenario: "relationshipShift", action: "moveGradually" },
  { number: 18, koName: "산풍고", enName: "Work on What Has Been Spoiled", essence: "renewal", scenario: "resourceManagement", action: "repairFirst" },
  { number: 19, koName: "지택림", enName: "Approach", essence: "receptivity", scenario: "risingOpportunity", action: "moveGradually" },
  { number: 20, koName: "풍지관", enName: "Contemplation", essence: "clarity", scenario: "innerReflection", action: "listenDeeply" },
  { number: 21, koName: "화뢰서합", enName: "Biting Through", essence: "clarity", scenario: "facingConflict", action: "speakPlainly" },
  { number: 22, koName: "산화비", enName: "Grace", essence: "balance", scenario: "relationshipShift", action: "trimExcess" },
  { number: 23, koName: "산지박", enName: "Splitting Apart", essence: "restraint", scenario: "endingCycle", action: "trimExcess" },
  { number: 24, koName: "지뢰복", enName: "Return", essence: "renewal", scenario: "endingCycle", action: "trustTiming" },
  { number: 25, koName: "천뢰무망", enName: "Innocence", essence: "initiative", scenario: "decisionPoint", action: "holdCenter" },
  { number: 26, koName: "산천대축", enName: "Great Taming", essence: "restraint", scenario: "resourceManagement", action: "prepareQuietly" },
  { number: 27, koName: "산뢰이", enName: "Nourishment", essence: "discipline", scenario: "resourceManagement", action: "protectEnergy" },
  { number: 28, koName: "택풍대과", enName: "Preponderance of the Great", essence: "uncertainStart", scenario: "emotionalOverload", action: "trimExcess" },
  { number: 29, koName: "중수감", enName: "The Abysmal Water", essence: "patience", scenario: "externalPressure", action: "holdCenter" },
  { number: 30, koName: "중화리", enName: "The Clinging Fire", essence: "clarity", scenario: "decisionPoint", action: "speakPlainly" },
  { number: 31, koName: "택산함", enName: "Influence", essence: "cooperation", scenario: "relationshipShift", action: "moveGradually" },
  { number: 32, koName: "뇌풍항", enName: "Duration", essence: "steadiness", scenario: "relationshipShift", action: "finishWell" },
  { number: 33, koName: "천산둔", enName: "Retreat", essence: "restraint", scenario: "externalPressure", action: "protectEnergy" },
  { number: 34, koName: "뇌천대장", enName: "Great Power", essence: "initiative", scenario: "decisionPoint", action: "leadClearly" },
  { number: 35, koName: "화지진", enName: "Progress", essence: "clarity", scenario: "risingOpportunity", action: "moveGradually" },
  { number: 36, koName: "지화명이", enName: "Darkening of the Light", essence: "humility", scenario: "externalPressure", action: "protectEnergy" },
  { number: 37, koName: "풍화가인", enName: "The Family", essence: "discipline", scenario: "teamEffort", action: "repairFirst" },
  { number: 38, koName: "화택규", enName: "Opposition", essence: "balance", scenario: "facingConflict", action: "listenDeeply" },
  { number: 39, koName: "수산건", enName: "Obstruction", essence: "patience", scenario: "externalPressure", action: "changeCourse" },
  { number: 40, koName: "뇌수해", enName: "Deliverance", essence: "renewal", scenario: "endingCycle", action: "changeCourse" },
  { number: 41, koName: "산택손", enName: "Decrease", essence: "humility", scenario: "resourceManagement", action: "trimExcess" },
  { number: 42, koName: "풍뢰익", enName: "Increase", essence: "renewal", scenario: "risingOpportunity", action: "seekAllies" },
  { number: 43, koName: "택천쾌", enName: "Breakthrough", essence: "clarity", scenario: "decisionPoint", action: "speakPlainly" },
  { number: 44, koName: "천풍구", enName: "Coming to Meet", essence: "uncertainStart", scenario: "relationshipShift", action: "holdCenter" },
  { number: 45, koName: "택지췌", enName: "Gathering Together", essence: "cooperation", scenario: "teamEffort", action: "seekAllies" },
  { number: 46, koName: "지풍승", enName: "Pushing Upward", essence: "steadiness", scenario: "risingOpportunity", action: "moveGradually" },
  { number: 47, koName: "택수곤", enName: "Oppression", essence: "patience", scenario: "resourceManagement", action: "protectEnergy" },
  { number: 48, koName: "수풍정", enName: "The Well", essence: "renewal", scenario: "buildingBase", action: "repairFirst" },
  { number: 49, koName: "택화혁", enName: "Revolution", essence: "renewal", scenario: "decisionPoint", action: "changeCourse" },
  { number: 50, koName: "화풍정", enName: "The Cauldron", essence: "discipline", scenario: "buildingBase", action: "prepareQuietly" },
  { number: 51, koName: "중뢰진", enName: "The Arousing", essence: "initiative", scenario: "externalPressure", action: "holdCenter" },
  { number: 52, koName: "중산간", enName: "Keeping Still", essence: "steadiness", scenario: "innerReflection", action: "holdCenter" },
  { number: 53, koName: "풍산점", enName: "Development", essence: "steadiness", scenario: "relationshipShift", action: "moveGradually" },
  { number: 54, koName: "뇌택귀매", enName: "The Marrying Maiden", essence: "uncertainStart", scenario: "relationshipShift", action: "protectEnergy" },
  { number: 55, koName: "뇌화풍", enName: "Abundance", essence: "clarity", scenario: "risingOpportunity", action: "leadClearly" },
  { number: 56, koName: "화산려", enName: "The Wanderer", essence: "learning", scenario: "endingCycle", action: "holdCenter" },
  { number: 57, koName: "중풍손", enName: "The Gentle", essence: "cooperation", scenario: "innerReflection", action: "listenDeeply" },
  { number: 58, koName: "중택태", enName: "The Joyous", essence: "cooperation", scenario: "relationshipShift", action: "speakPlainly" },
  { number: 59, koName: "풍수환", enName: "Dispersion", essence: "renewal", scenario: "emotionalOverload", action: "seekAllies" },
  { number: 60, koName: "수택절", enName: "Limitation", essence: "restraint", scenario: "resourceManagement", action: "trimExcess" },
  { number: 61, koName: "풍택중부", enName: "Inner Truth", essence: "receptivity", scenario: "relationshipShift", action: "speakPlainly" },
  { number: 62, koName: "뇌산소과", enName: "Preponderance of the Small", essence: "humility", scenario: "decisionPoint", action: "startSmall" },
  { number: 63, koName: "수화기제", enName: "After Completion", essence: "balance", scenario: "endingCycle", action: "finishWell" },
  { number: 64, koName: "화수미제", enName: "Before Completion", essence: "uncertainStart", scenario: "endingCycle", action: "trustTiming" }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getGuideLocale(lang) {
  return GUIDE_LOCALES[lang] || GUIDE_LOCALES.en;
}

function buildGuideCard(entry, lang) {
  const locale = getGuideLocale(lang);
  const displayName = lang === "ko" ? entry.koName : entry.enName;
  const alternateName = lang === "ko" ? entry.enName : entry.koName;
  const essence = locale.essence[entry.essence];
  const scenario = locale.scenario[entry.scenario];
  const action = locale.action[entry.action];

  return `
    <article class="guide-card" id="hexagram-${entry.number}">
      <div class="guide-card-head">
        <span class="guide-number">${String(entry.number).padStart(2, "0")}</span>
        <div>
          <h3>${escapeHtml(displayName)}</h3>
          <p class="guide-alt-name"><strong>${escapeHtml(locale.alternateNameLabel)}:</strong> ${escapeHtml(alternateName)}</p>
        </div>
      </div>
      <div class="guide-copy">
        <p><strong>${escapeHtml(locale.themeLabel)}:</strong> ${escapeHtml(essence)}</p>
        <p><strong>${escapeHtml(locale.readingLabel)}:</strong> ${escapeHtml(locale.modernReading(essence, scenario))}</p>
        <p><strong>${escapeHtml(locale.adviceLabel)}:</strong> ${escapeHtml(locale.advice(action))}</p>
      </div>
    </article>
  `;
}

function buildGuideHTML(lang) {
  const locale = getGuideLocale(lang);
  const cards = HEXAGRAM_GUIDE_ENTRIES.map((entry) => buildGuideCard(entry, lang)).join("");

  return `
    <section class="guide-hero">
      <p class="guide-eyebrow">${escapeHtml(locale.eyebrow)}</p>
      <p class="guide-intro">${escapeHtml(locale.intro)}</p>
      <p class="guide-note">${escapeHtml(locale.note)}</p>
    </section>
    <section class="guide-grid" aria-label="${escapeHtml(locale.title)}">
      ${cards}
    </section>
  `;
}

export { GUIDE_LOCALES, HEXAGRAM_GUIDE_ENTRIES, buildGuideHTML, getGuideLocale };
