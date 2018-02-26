import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript with no trailing whitespace`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `const foo = 0;    \t\n `;
  const beautifierResult = `const foo = 0;\n`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          remove_trailing_whitespace: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});