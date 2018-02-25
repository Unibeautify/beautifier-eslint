import { Beautifier, Language, BeautifierBeautifyData } from "unibeautify";
import options from "./options";
const CLIEngine = require("eslint").CLIEngine;
const pkg = require("../package.json");
export const beautifier: Beautifier = {
  name: "ESLint",
  package: pkg,
  options: {
    JavaScript: options.JavaScript,
  },
  beautify(data: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      const cli = new CLIEngine({
        fix: true,
        parserOptions: {
          ecmaVersion: 6,
        },
        rules: data.options,
      });
      const text = cli.executeOnText(data.text).results[0].output;
      if (text) {
        return resolve(text);
      } else {
        return resolve(data.text);
      }
    });
  },
};
export default beautifier;
