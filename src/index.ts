import { Beautifier, Language } from "unibeautify";
import { wrapBeautifier, AtomPackage } from "unibeautify-beautifier";
const CLIEngine = require("eslint").CLIEngine;

const pkg = require("../package.json");

export const beautifier: Beautifier = {
  name: "ESLint",
  // link: "https://github.com/eslint/eslint",
  options: {
    _: {
      "newline-per-chained-call": [
        ["break_chained_methods"],
        function(options) {
          if (options.break_chained_methods === true) {
            return [2, {"ignoreChainWithDepth": 2 }]
          } else {
            return 2;
          }
        }
      ]
    },
    JSX: true,
    JavaScript: true
  },
  beautify(data) {
    return new Promise<string>((resolve, reject) => {
      const cli = new CLIEngine({
        fix: true,
        rules: data.options
      });
      const text = cli.executeOnText(data.text).results[0].output;
      if (text) {
        return resolve(text);
      }
      else {
        return resolve(data.text);
      }
    });
  }
};

export function provideBeautifier() {
  return beautifier;
}

const config = {};

const wrappedBeautifier: Beautifier | AtomPackage = wrapBeautifier(
  pkg,
  beautifier,
  config
);
export { Beautifier, AtomPackage };
export default wrappedBeautifier;