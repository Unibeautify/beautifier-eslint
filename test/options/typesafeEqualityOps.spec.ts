import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript with === and !==`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `if ("foo" == "foo" && "bar" != "bar") {\n\tconsole.log("baz");\n}`;
  const beautifierResult = `if ("foo" === "foo" && "bar" !== "bar") {\n\tconsole.log("baz");\n}`;
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
