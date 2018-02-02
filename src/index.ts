import { Beautifier, Language } from "unibeautify";
import { wrapBeautifier, AtomPackage } from "unibeautify-beautifier";
const CLIEngine = require("eslint").CLIEngine;

const pkg = require("../package.json");

export const beautifier: Beautifier = {
  name: "ESLint",
  // link: "https://github.com/eslint/eslint",
  options: {
    _: {
      // "no-extra-boolean-cast": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-extra-parens": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-extra-semi": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-regex-spaces": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-unsafe-negation": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "valid-jsdoc": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "curly": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "dot-location": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "dot-notation": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "eqeqeq": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-else-return": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-extra-bind": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-extra-label": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-floating-decimal": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-implicit-coercion": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-multi-spaces": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-unused-labels": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-useless-return": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "wrap-iife": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "yoda": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "strict": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-undef-init": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "array-bracket-newline": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "array-bracket-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "array-element-newline": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "block-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "brace-style": [
      //   ["brace_style"],
      //   (options): any => {
      //
      //   }
      // ],
      // "capitalized-comments": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "comma-dangle": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      "comma-dangle": [
        ["end_with_comma"],
        (options): any => {
          if (options.end_with_comma === true) {
            return [2, "always"]
          }
          else if (options.end_with_comma === false) {
            return [2, "never"]
          }
          return 0;
        }
      ],
      // "comma-style": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "computed-property-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "eol-last": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "func-call-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "function-paren-newline": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "implicit-arrow-linebreak": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "indent": [
      //   ["force_indentation"],
      //   (options): any => {
      //     if (options.force_indentation === true) {
      //
      //     }
      //   }
      // ],
      // "jsx-quotes": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "key-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "keyword-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "linebreak-style": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "lines-around-comment": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "lines-between-class-members": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "multiline-comment-style": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "new-parens": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      "newline-per-chained-call": [
        ["break_chained_methods"],
        (options): any => {
          if (options.break_chained_methods === true) {
            return [2, {"ignoreChainWithDepth": 2 }]
          }
          return 0;
        }
      ],
      // "no-lonely-if": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-multiple-empty-lines": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      "no-trailing-spaces": [
        ["remove_trailing_whitespace"],
        (options): any => {
          if (options.remove_trailing_whitespace === true) {
            return [2, {"skipBlankLines": true, "ignoreComments": true}]
          } else if (options.remove_trailing_whitespace === false) {
            return [2, {"skipBlankLines": false, "ignoreComments": false}]
          }
          return 0;
        }
      ],
      // "no-unneeded-ternary": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-whitespace-before-property": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "nonblock-statement-body-position": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "object-curly-newline": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      "object-curly-spacing": [
        ["object_curly_spacing"],
        (options): any => {
          if (options.object_curly_spacing === true) {
            return [2, "always"]
          } else if (options.object_curly_spacing === false) {
            return [2, "never"]
          }
          return 0;
        }
      ],
      // "object-property-newline": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "one-var-declaration-per-line": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "operator-assignment": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "operator-linebreak": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "padded-blocks": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "padding-line-between-statements": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "quote-props": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      "quotes": [
        ["quotes"],
        (options): any => {
          if (!options.quotes || options.quotes === "none") {
            return 0;
          } else {
            return [2, options.quotes]
          }
        }
      ],
      "semi": [
        ["end_with_semicolon"],
        (options): any => {
          if (options.end_with_semicolon === true) {
            return [2, "always"]
          } else if (options.end_with_semicolon === false) {
            return [2, "never"]
          }
          return 0;
        }
      ],
      // "semi-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "semi-style": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "sort-vars": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "space-before-blocks": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "space-before-function-paren": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "space-in-parens": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "space-infix-ops": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "space-unary-ops": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "spaced-comment": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "switch-colon-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "template-tag-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "unicode-bom": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "wrap-regex": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "arrow-body-style": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      "arrow-parens": [
        ["arrow_parens"],
        (options): any => {
          if (options.arrow_parens) {
            return [2, options.arrow_parens]
          }
          return 0;
        }
      ],
      // "arrow-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "generator-star-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-confusing-arrow": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-useless-computed-key": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-useless-rename": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "no-var": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "object-shorthand": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "prefer-arrow-callback": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "prefer-const": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "prefer-numeric-literals": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "prefer-spread": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "prefer-template": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "rest-spread-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "sort-imports": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "template-curly-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ],
      // "yield-star-spacing": [
      //   [""],
      //   (options): any => {
      //   }
      // ]
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