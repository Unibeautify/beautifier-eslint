import { Beautifier, Language, BeautifierBeautifyData, DependencyType } from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";
const CLIEngine = require("eslint").CLIEngine;
const { pkg } = readPkgUp.sync({ cwd: __dirname });
export const beautifier: Beautifier = {
  name: "ESLint",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Node,
      name: "ESLint",
      package: "eslint",
    }
  ],
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
