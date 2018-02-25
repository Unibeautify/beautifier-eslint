import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
testCommaAtEnd("always");
testCommaAtEnd("never");
function testCommaAtEnd(endingComma: string) {
  test(`should successfully beautify JavaScript text with commaDangle=${endingComma}`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);
    const endWithComma = endingComma === "always";
    const veryLongString = "very".repeat(10) + "longstring";
    const text = `[\n"${veryLongString}",\n"${veryLongString}"\n];\n`;
    const beautifierResult = `[\n"${veryLongString}",\n"${veryLongString}"${
      endWithComma ? "," : ""
    }\n];\n`;
    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            end_with_comma: endWithComma,
          },
        },
        text,
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
}
