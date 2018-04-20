import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
import * as path from "path";
const filePath: string = path.resolve(__dirname, "test.js");
const errorFilePath: string = path.resolve("nothing");
test(`should successfully beautify JavaScript text with indent_size=4 with spaces`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n) {return n = 1;}`;
  const beautifierResult = `function test(n) {\n    return n = 1;\n}`;
  return unibeautify
    .beautify({
      filePath,
      languageName: "JavaScript",
      options: {
        JavaScript: {
          ESLint: {
            prefer_beautifier_config: true
          }
        } as any,
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should not beautify because we are not passing in file path`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n) {return n = 1;}`;
  const beautifierResult = `function test(n) {return n = 1;}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          ESLint: {
            prefer_beautifier_config: true
          }
        } as any,
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should not beautify because file path does not find a config`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `function test(n) {return n = 1;}`;
  const beautifierResult = `function test(n) {return n = 1;}`;
  return unibeautify
    .beautify({
      filePath: errorFilePath,
      languageName: "JavaScript",
      options: {
        JavaScript: {
          ESLint: {
            prefer_beautifier_config: true
          }
        } as any,
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
