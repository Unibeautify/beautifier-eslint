import { Beautifier, Language, BeautifierBeautifyData, DependencyType, NodeDependency } from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";
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
  beautify({ text, options, dependencies }: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      const { CLIEngine } = dependencies.get<NodeDependency>("ESLint").package;
      const cli = new CLIEngine({
        fix: true,
        parserOptions: {
          ecmaVersion: 6,
        },
        rules: options,
      });
      const result = cli.executeOnText(text).results[0].output;
      if (result) {
        return resolve(result);
      } else {
        return resolve(text);
      }
    });
  },
};
export default beautifier;
