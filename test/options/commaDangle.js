import test from "ava";
import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../dist";

test.beforeEach(t => {
  t.context.unibeautify = newUnibeautify();
});

testCommaAtEnd("always");
testCommaAtEnd("never");

function testCommaAtEnd(endingComma) {
  test(`should successfully beautify JavaScript text with commaDangle=${endingComma}`, t => {
    const { unibeautify } = t.context;
    unibeautify.loadBeautifier(beautifier);

    const endWithComma = endingComma === "always";
    const veryLongString = "very".repeat(10) + "longstring";
    const text = `[\n"${veryLongString}",\n"${veryLongString}"\n];\n`;
    const beautifierResult = `[\n"${veryLongString}",\n"${veryLongString}"${endWithComma ? "," : ""}\n];\n`;

    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            end_with_comma: endWithComma
          }
        },
        text
      })
      .then(results => {
        t.is(results, beautifierResult);
      });
  });
}
