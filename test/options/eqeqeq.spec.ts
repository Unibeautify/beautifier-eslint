import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test.skip(`should use === in place of ==`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `true == true`;
  const beautifierResult = `true === true`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          typesafe_equality_operators: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test.skip(`should use !== in place of !=`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `false != false`;
  const beautifierResult = `false !== false`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          typesafe_equality_operators: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
