import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
testWithIndentSize(1, "tab");
testWithIndentSize(2, "space");
testWithIndentSize(4, "space");
function testWithIndentSize(indentSize: number, indentStyle: string) {
  test(`should successfully beautify JavaScript text with indent_size=${indentSize} using ${indentStyle}`, () => {
    const unibeautify = newUnibeautify();
    unibeautify.loadBeautifier(beautifier);
    const indentChar = indentStyle === "tab" ? "\t" : " ";
    const indentation =
      indentStyle === "tab" ? "\t" : indentChar.repeat(indentSize);
    const text = `function test(n) {return n + 1;}`;
    const beautifierResult = `function test(n) {\n${indentation}return n + 1;\n}`;
    return unibeautify
      .beautify({
        languageName: "JavaScript",
        options: {
          JavaScript: {
            indent_style: indentStyle,
            indent_size: indentSize,
            brace_style: "collapse",
          },
        },
        text,
      })
      .then(results => {
        expect(results).toBe(beautifierResult);
      });
  });
}
test(`should successfully beautify JavaScript text with original array indents`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const indentChar = " ";
  const text = `var foo = [\n bar,\n    baz,\n qux\n]`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_style: "space",
          indent_size: 1,
          keep_array_indentation: true,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(text);
    });
});
test(`should successfully beautify JavaScript text with original array indents`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const indentChar = " ";
  const text = `foo\n.bar\n.baz()`;
  return unibeautify
    .beautify({
      languageName: "JavaScript",
      options: {
        JavaScript: {
          indent_style: "space",
          indent_size: 1,
          indent_chained_methods: false,
        },
      },
      text,
    })
    .then(results => {
      expect(results).toBe(text);
    });
});
