import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

testWithSingleQuote(true);
testWithSingleQuote(false);

function testWithSingleQuote(singleQuote: boolean) {
  test(`should successfully beautify JavaScript text with ${singleQuote ? "single" : "double"} quotes`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);

    const quote = singleQuote ? "'" : '"';
    const text = `console.log('hello world');\nconsole.log("hello world");\n`;
    const beautifierResult = `console.log(${quote}hello world${quote});\nconsole.log(${quote}hello world${quote});\n`;

    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            quotes: singleQuote ? "single" : "double",
          }
        },
        text
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
}
