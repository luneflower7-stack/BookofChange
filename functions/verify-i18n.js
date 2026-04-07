const assert = require("assert");
const { _private } = require("./index.js");

async function run() {
  const supportedNonKorean = ["en", "ja", "zh", "fr", "de", "es"];

  for (const lang of supportedNonKorean) {
    const messages = _private.buildGenerationMessages("test concern", { name: "Heaven" }, lang);
    assert(messages[0].content.includes(_private.instructions[lang].languageName), `missing target language in generation prompt: ${lang}`);

    const rewriteMessages = _private.buildRewriteMessages("원문 테스트", lang);
    assert(rewriteMessages[0].content.includes(_private.instructions[lang].languageName), `missing target language in rewrite prompt: ${lang}`);

    let callCount = 0;
    const fetchImpl = async (_url, options) => {
      callCount += 1;
      const body = JSON.parse(options.body);
      const reply = callCount === 1
        ? `draft-${lang}`
        : `rewritten-${lang}`;
      return {
        async json() {
          return {
            choices: [
              {
                message: {
                  content: reply
                }
              }
            ]
          };
        }
      };
    };

    const result = await _private.generateFortuneText({
      userConcern: "test concern",
      guaInfo: { name: "Heaven" },
      lang,
      apiKey: "test-key",
      fetchImpl
    });

    assert.strictEqual(callCount, 2, `expected rewrite pass for ${lang}`);
    assert.strictEqual(result, `rewritten-${lang}`, `unexpected final text for ${lang}`);
  }

  let koreanCallCount = 0;
  const koreanResult = await _private.generateFortuneText({
    userConcern: "고민 테스트",
    guaInfo: { name: "건" },
    lang: "ko",
    apiKey: "test-key",
    fetchImpl: async (_url, options) => {
      koreanCallCount += 1;
      const body = JSON.parse(options.body);
      assert.strictEqual(body.messages.length, 2, "expected generation messages only");
      return {
        async json() {
          return {
            choices: [
              {
                message: {
                  content: "한국어 결과"
                }
              }
            ]
          };
        }
      };
    }
  });

  assert.strictEqual(koreanCallCount, 1, "expected single pass for ko");
  assert.strictEqual(koreanResult, "한국어 결과");

  console.log("i18n verification passed for ko/en/ja/zh/fr/de/es");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
