import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript with a space before if conditional`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `if(foo) {\n//...\n}`;
  const beautifierResult = `if (foo) {\n//...\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          space_before_conditional: true
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript with no space before if conditional`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `if (foo) {\n//...\n}`;
  const beautifierResult = `if(foo) {\n//...\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          space_before_conditional: false
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});