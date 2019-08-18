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
type LintReport = CLIEngine.LintReport;
type LintResult = CLIEngine.LintResult;
type ParserOptions = Linter.ParserOptions;
type Config = Linter.Config;
const pkg = readPkgUp.sync({ cwd: __dirname })!.package;
export const beautifier: Beautifier = {
  name: "ESLint",
  package: pkg,
  dependencies: [
    {
      type: DependencyType.Node,
      name: "ESLint",
      package: "eslint",
    },
    {
      type: DependencyType.Node,
      name: "react",
      package: "eslint-plugin-react",
      optional: true,
    },
  ],
  options: {
    JavaScript: options.JavaScript,
    JSX: options.JavaScript,
  },
  resolveConfig: ({ filePath, dependencies }) => {
    if (!filePath) {
      return Promise.resolve({});
    }
    const { CLIEngine } = dependencies.get<NodeDependency>("ESLint").package;
    const cli: CLIEngine = new CLIEngine();
    try {
      return Promise.resolve({ config: cli.getConfigForFile(filePath) });
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
      return Promise.resolve({});
    }
  },
  beautify({
    text,
    options,
    filePath,
    projectPath,
    dependencies,
    beautifierConfig,
  }: BeautifierBeautifyData) {
    return new Promise<string>((resolve, reject) => {
      const { CLIEngine } = dependencies.get<NodeDependency>("ESLint").package;
      const reactPlugin = dependencies.get<NodeDependency>("react");
      const config = (beautifierConfig && beautifierConfig.config) || {};
      const { rules, parserOptions, globals }: Config = config;
      const { extends: extendsToAdd, plugins } = config;
      const parseOpts: ParserOptions =
        parserOptions && Object.keys(parserOptions).length !== 0
          ? parserOptions
          : {
              ecmaVersion: 6,
            };
      const finalOptions =
        rules && Object.keys(rules).length !== 0 ? rules : options;
      const pluginsToLoad = reactPlugin.isInstalled ? plugins : null;
      const cliOptions: CLIOptions = {
        baseConfig: {
          extends: extendsToAdd,
          globals: globals,
        },
        fix: true,
        parserOptions: parseOpts,
        plugins: pluginsToLoad,
        rules: finalOptions,
        useEslintrc: false,
      };
      const cli: CLIEngine = new CLIEngine(cliOptions);
      // tslint:disable-next-line:promise-must-complete
      if (reactPlugin.isInstalled) {
        cli.addPlugin(reactPlugin.name, reactPlugin.package);
      }
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
