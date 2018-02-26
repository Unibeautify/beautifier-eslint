import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript with a space before function parens`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function foo() {\n// ...\n}`;
  const beautifierResult = `function foo () {\n// ...\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          space_after_anon_function: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript with no space before function parens`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function foo () {\n// ...\n}`;
  const beautifierResult = `function foo() {\n// ...\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          space_after_anon_function: false,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});