import {
  Beautifier,
  Language,
  BeautifierBeautifyData,
  DependencyType,
  NodeDependency,
} from "unibeautify";
import * as readPkgUp from "read-pkg-up";
import options from "./options";
import { CLIEngine, Linter } from "eslint";
import CLIOptions = CLIEngine.Options;
import LintReport = CLIEngine.LintReport;
import LintResult = CLIEngine.LintResult;
import ParserOptions = Linter.ParserOptions;
const { pkg } = readPkgUp.sync({ cwd: __dirname });
export const beautifier: Beautifier = {
  name: "ESLint",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Node,
      name: "ESLint",
      package: "eslint",
    },
  ],
  options: {
    JavaScript: options.JavaScript,
  },
  beautify({
    text,
    options,
    filePath,
    projectPath,
    dependencies,
  }: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      const { CLIEngine } = dependencies.get<NodeDependency>("ESLint").package;
      const parserOptions: ParserOptions = {
        ecmaVersion: 6,
      };
      const cliOptions: CLIOptions = {
        fix: true,
        parserOptions: parserOptions,
        rules: options,
        cwd: filePath || projectPath || "",
      };
      const cli: CLIEngine = new CLIEngine(cliOptions);
      const report: LintReport = cli.executeOnText(text);
      const result: LintResult = report.results[0];
      if (result.output) {
        return resolve(result.output);
      } else {
        return resolve(text);
      }
    });
  },
};
export default beautifier;