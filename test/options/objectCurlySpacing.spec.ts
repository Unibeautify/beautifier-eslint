import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";

testObjectCurlySpacing("always");
testObjectCurlySpacing("never");

function testObjectCurlySpacing(curlySpacing: string) {
  test(`should successfully beautify JavaScript text with curlySpacing=${curlySpacing}`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);

    const addSpaceCurly = curlySpacing === "always";
    const text = `var obj = { 'foo': 'bar' };`;
    const beautifierResult = `var obj = {${addSpaceCurly ? " " : ""}'foo': 'bar'${addSpaceCurly ? " " : ""}};`;

    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            object_curly_spacing: addSpaceCurly
          }
        },
        text
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
}
