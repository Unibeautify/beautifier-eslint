import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript with a spaces inside of parentheses`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `foo('bar');`;
  const beautifierResult = `foo( 'bar' );`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          space_in_paren: true
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript with a no spaces inside of parentheses`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `foo( 'bar' );`;
  const beautifierResult = `foo('bar');`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          space_in_paren: false
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});