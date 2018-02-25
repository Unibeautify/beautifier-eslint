import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript with collapse brace style`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `if (foo) {bar();} else {baz();}`;
  const beautifierResult = `if (foo) {\n\tbar();\n} else {\n\tbaz();\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          brace_style: "collapse",
          indent_style: "tab",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript with end-expand brace style`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `if (foo) {bar();} else {baz();}`;
  const beautifierResult = `if (foo) {\n\tbar();\n}\nelse {\n\tbaz();\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          brace_style: "end-expand",
          indent_style: "tab",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
test(`should successfully beautify JavaScript with expand brace style`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `if (foo){bar();}else{baz();}`;
  const beautifierResult = `if (foo)\n{\n\tbar();\n}\nelse\n{\n\tbaz();\n}`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          brace_style: "expand",
          indent_style: "tab",
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});