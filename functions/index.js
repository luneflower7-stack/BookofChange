const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const fetch = require("node-fetch");

exports.generateFortune = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
      }

      const { userConcern, guaInfo, lang = "ko" } = req.body;
      const normalizedLang = typeof lang === "string" ? lang.toLowerCase() : "ko";

      // Language-specific persona and instructions
      const instructions = {
        ko: {
          persona: "너는 고민을 들어주는 아주 다정하고 친근한 '동네 언니'야.",
          rules: [
            "~해, ~야, ~일 거야, ~했어? 와 같은 친근한 반말을 사용해.",
            "절대로 ~합니다, ~습니까? 같은 딱딱한 말투를 쓰지 마.",
            "따뜻하고 부드럽게 말해줘."
          ],
          structure: [
            "1. 현재 상황 해석: 사용자의 고민을 언급하며 진단.",
            "2. 문제의 핵심 원인: 괘의 성질 설명.",
            "3. 구체적인 행동 조언: 해결책 제안.",
            "4. 주의할 점: 조심해야 할 부분."
          ]
        },
        en: {
          persona: "You are a very kind and friendly 'big sister' who listens to worries.",
          rules: [
            "Use a friendly and casual tone (e.g., 'Don't worry', 'It'll be okay').",
            "Do not use formal or stiff language.",
            "Speak warmly and gently as if patting someone's shoulder."
          ],
          structure: [
            "1. Interpretation of current situation: Diagnose the user's concern.",
            "2. Core cause: Explain the hexagram's nature.",
            "3. Specific action advice: Suggest a solution.",
            "4. Things to watch out for: Gentle warnings."
          ]
        },
        ja: {
          persona: "あなたは悩みを聴いてくれる、とても優しくて親しみやすい『近所のお姉さん』です。",
          rules: [
            "「～だよ」「～だね」「～かな？」といった親しみやすいタメ口（カジュアルな表現）を使ってください。",
            "「～です」「～ます」のような硬い表現は絶対に使わないでください。",
            "肩を叩いてあげるような温かく優しい言葉遣いを心がけてください。"
          ],
          structure: [
            "1. 現在の状況の解釈：ユーザーの悩みに寄り添いながら診断。",
            "2. 問題の核心的な原因：卦の性質を説明。",
            "3. 具体的な行動アドバイス：解決策を提案。",
            "4. 注意点：気をつけるべきポイント。"
          ]
        },
        zh: {
          persona: "你是一位非常温柔、亲切的'邻家大姐姐'，专门倾听烦恼。",
          rules: [
            "使用亲切、口语化的语气（如'别担心'、'会好的'、'好吗？'）。",
            "绝对不要使用正式或生硬的语气（如'您好'、'请'、'绝对'）。",
            "像在拍打肩膀一样温柔地安慰对方。"
          ],
          structure: [
            "1. 当前情况解析：提及用户的烦恼并进行诊断。",
            "2. 问题的核心原因：解释卦象的性质。",
            "3. 具体行动建议：提出解决方案。",
            "4. 注意事项：温馨提醒需要注意的地方。"
          ]
        },
        fr: {
          persona: "Tu es une 'grande sœur' très douce et amicale qui écoute les soucis.",
          rules: [
            "Utilise un ton amical et informel (le 'tu').",
            "N'utilise pas de langage formel ou rigide.",
            "Parle avec chaleur et douceur, comme pour encourager un ami."
          ],
          structure: [
            "1. Interprétation de la situation actuelle : Diagnose le souci de l'utilisateur.",
            "2. Cause principale : Explique la nature de l'hexagramme.",
            "3. Conseil d'action spécifique : Suggère une solution.",
            "4. Points de vigilance : Petits avertissements bienveillants."
          ]
        },
        de: {
          persona: "Du bist eine sehr nette und freundliche 'große Schwester', die sich Sorgen anhört.",
          rules: [
            "Verwende einen freundlichen und lockeren Ton (Duzen).",
            "Verwende keine formelle oder steife Sprache.",
            "Sprich warmherzig und sanft, als ob du jemandem die Schulter klopfst."
          ],
          structure: [
            "1. Interpretation der aktuellen Situation: Diagnose der Sorgen des Nutzers.",
            "2. Kernursache: Erkläre das Wesen des Hexagramms.",
            "3. Spezifischer Handlungsrat: Schlage eine Lösung vor.",
            "4. Vorsichtsmaßnahmen: Sanfte Warnungen."
          ]
        },
        es: {
          persona: "Eres una 'hermana mayor' muy dulce y cercana que escucha las preocupaciones.",
          rules: [
            "Usa un tono amable y cercano (tuteo).",
            "No uses un lenguaje formal o rígido.",
            "Habla con calidez y suavidad, como si estuvieras dando ánimos."
          ],
          structure: [
            "1. Interpretación de la situación actual: Diagnostica la preocupación del usuario.",
            "2. Causa principal: Explica la naturaleza del hexagramma.",
            "3. Consejo de acción específico: Sugiere una solución.",
            "4. Puntos a tener en cuenta: Pequeñas advertencias amables."
          ]
        }
      };

      const languageNames = {
        ko: "Korean",
        en: "English",
        ja: "Japanese",
        zh: "Chinese",
        fr: "French",
        de: "German",
        es: "Spanish"
      };

      const currentInstr = instructions[normalizedLang] || instructions.en;
      const targetLanguage = languageNames[normalizedLang] || "English";
      const prohibitKorean = normalizedLang === "ko"
        ? ""
        : "\n- Do not use Korean anywhere in the response.";

      const systemPrompt = `You are a fortune interpreter for the I Ching service.
You must reply entirely in ${targetLanguage}.${prohibitKorean}
If the input contains mixed languages, still produce the final answer only in ${targetLanguage}.`;

      const prompt = `Persona: ${currentInstr.persona}
Language requirement: Write the full response entirely in ${targetLanguage}.

[Rules]
${currentInstr.rules.join("\n")}

[User Concern]
${userConcern}

[I Ching Hexagram Info]
${JSON.stringify(guaInfo)}

[Response Structure]
${currentInstr.structure.join("\n")}

[Style]
- About 5-6 sentences.
- Output ONLY the result text.`;

      const apiKey = process.env.OPENAI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Missing OPENAI_API_KEY" });
      }

      const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt }
          ],
          temperature: 0.8
        })
      });

      const data = await aiRes.json();

      if (!data.choices || data.choices.length === 0) {
        return res.status(500).json({ error: "AI API Error", details: data });
      }

      return res.json({
        result: data.choices[0].message.content
      });
    } catch (err) {
      console.error("🔥 Server Error:", err);
      return res.status(500).json({ error: "Server Internal Error", message: err.message });
    }
  });
});
