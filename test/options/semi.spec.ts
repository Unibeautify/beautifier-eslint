import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
testSemicolon("always");
testSemicolon("never");
function testSemicolon(semi: string) {
  test(`should successfully beautify JavaScript text with semicolon=${semi}`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);
    const insertSemi = semi === "always";
    const text = `var name = "ESLint"`;
    const beautifierResult = `var name = "ESLint"${insertSemi ? ";" : ""}`;
    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            end_with_semicolon: insertSemi
          }
        },
        text
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
}
