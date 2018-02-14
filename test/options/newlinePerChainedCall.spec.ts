import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

testNewLinePerChainedCall(true);

function testNewLinePerChainedCall(newLine: boolean) {
  test(`should successfully beautify JavaScript text with newLine=${newLine}`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);

    const text = `_.chain({}).map(foo).filter(bar).value();`;
    const beautifierResult = `_.chain({}).map(foo)\n.filter(bar)\n.value();`;

    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            break_chained_methods: newLine
          }
        },
        text
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
}
