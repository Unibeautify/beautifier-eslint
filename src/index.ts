import { Beautifier, Language } from "unibeautify";
import { wrapBeautifier, AtomPackage } from "unibeautify-beautifier";
const CLIEngine = require("eslint").CLIEngine;

const pkg = require("../package.json");

export const beautifier: Beautifier = {
  name: "ESLint",
  // link: "https://github.com/eslint/eslint",
  options: {
    _: {
      "no-extra-boolean-cast": [
        [""],
        function(options) {
        }
      ],
      "no-extra-parens": [
        [""],
        function(options) {
        }
      ],
      "no-extra-semi": [
        [""],
        function(options) {
        }
      ],
      "no-regex-spaces": [
        [""],
        function(options) {
        }
      ],
      "no-unsafe-negation": [
        [""],
        function(options) {
        }
      ],
      "valid-jsdoc": [
        [""],
        function(options) {
        }
      ],
      "curly": [
        [""],
        function(options) {
        }
      ],
      "dot-location": [
        [""],
        function(options) {
        }
      ],
      "dot-notation": [
        [""],
        function(options) {
        }
      ],
      "eqeqeq": [
        [""],
        function(options) {
        }
      ],
      "no-else-return": [
        [""],
        function(options) {
        }
      ],
      "no-extra-bind": [
        [""],
        function(options) {
        }
      ],
      "no-extra-label": [
        [""],
        function(options) {
        }
      ],
      "no-floating-decimal": [
        [""],
        function(options) {
        }
      ],
      "no-implicit-coercion": [
        [""],
        function(options) {
        }
      ],
      "no-multi-spaces": [
        [""],
        function(options) {
        }
      ],
      "no-unused-labels": [
        [""],
        function(options) {
        }
      ],
      "no-useless-return": [
        [""],
        function(options) {
        }
      ],
      "wrap-iife": [
        [""],
        function(options) {
        }
      ],
      "yoda": [
        [""],
        function(options) {
        }
      ],
      "strict": [
        [""],
        function(options) {
        }
      ],
      "no-undef-init": [
        [""],
        function(options) {
        }
      ],
      "array-bracket-newline": [
        [""],
        function(options) {
        }
      ],
      "array-bracket-spacing": [
        [""],
        function(options) {
        }
      ],
      "array-element-newline": [
        [""],
        function(options) {
        }
      ],
      "block-spacing": [
        [""],
        function(options) {
        }
      ],
      "brace-style": [
        [""],
        function(options) {
        }
      ],
      "capitalized-comments": [
        [""],
        function(options) {
        }
      ],
      "comma-dangle": [
        [""],
        function(options) {
        }
      ],
      "comma-spacing": [
        [""],
        function(options) {
        }
      ],
      "comma-style": [
        [""],
        function(options) {
        }
      ],
      "computed-property-spacing": [
        [""],
        function(options) {
        }
      ],
      "eol-last": [
        [""],
        function(options) {
        }
      ],
      "func-call-spacing": [
        [""],
        function(options) {
        }
      ],
      "function-paren-newline": [
        [""],
        function(options) {
        }
      ],
      "implicit-arrow-linebreak": [
        [""],
        function(options) {
        }
      ],
      "indent": [
        [""],
        function(options) {
        }
      ],
      "jsx-quotes": [
        [""],
        function(options) {
        }
      ],
      "key-spacing": [
        [""],
        function(options) {
        }
      ],
      "keyword-spacing": [
        [""],
        function(options) {
        }
      ],
      "linebreak-style": [
        [""],
        function(options) {
        }
      ],
      "lines-around-comment": [
        [""],
        function(options) {
        }
      ],
      "lines-between-class-members": [
        [""],
        function(options) {
        }
      ],
      "multiline-comment-style": [
        [""],
        function(options) {
        }
      ],
      "new-parens": [
        [""],
        function(options) {
        }
      ],
      "newline-per-chained-call": [
        ["break_chained_methods"],
        function(options) {
          if (options.break_chained_methods === true) {
            return [2, {"ignoreChainWithDepth": 2 }]
          } else {
            return 2;
          }
        }
      ],
      "no-lonely-if": [
        [""],
        function(options) {
        }
      ],
      "no-multiple-empty-lines": [
        [""],
        function(options) {
        }
      ],
      "no-trailing-spaces": [
        [""],
        function(options) {
        }
      ],
      "no-unneeded-ternary": [
        [""],
        function(options) {
        }
      ],
      "no-whitespace-before-property": [
        [""],
        function(options) {
        }
      ],
      "nonblock-statement-body-position": [
        [""],
        function(options) {
        }
      ],
      "object-curly-newline": [
        [""],
        function(options) {
        }
      ],
      "object-curly-spacing": [
        [""],
        function(options) {
        }
      ],
      "object-property-newline": [
        [""],
        function(options) {
        }
      ],
      "one-var-declaration-per-line": [
        [""],
        function(options) {
        }
      ],
      "operator-assignment": [
        [""],
        function(options) {
        }
      ],
      "operator-linebreak": [
        [""],
        function(options) {
        }
      ],
      "padded-blocks": [
        [""],
        function(options) {
        }
      ],
      "padding-line-between-statements": [
        [""],
        function(options) {
        }
      ],
      "quote-props": [
        [""],
        function(options) {
        }
      ],
      "quotes": [
        [""],
        function(options) {
        }
      ],
      "semi": [
        [""],
        function(options) {
        }
      ],
      "semi-spacing": [
        [""],
        function(options) {
        }
      ],
      "semi-style": [
        [""],
        function(options) {
        }
      ],
      "sort-vars": [
        [""],
        function(options) {
        }
      ],
      "space-before-blocks": [
        [""],
        function(options) {
        }
      ],
      "space-before-function-paren": [
        [""],
        function(options) {
        }
      ],
      "space-in-parens": [
        [""],
        function(options) {
        }
      ],
      "space-infix-ops": [
        [""],
        function(options) {
        }
      ],
      "space-unary-ops": [
        [""],
        function(options) {
        }
      ],
      "spaced-comment": [
        [""],
        function(options) {
        }
      ],
      "switch-colon-spacing": [
        [""],
        function(options) {
        }
      ],
      "template-tag-spacing": [
        [""],
        function(options) {
        }
      ],
      "unicode-bom": [
        [""],
        function(options) {
        }
      ],
      "wrap-regex": [
        [""],
        function(options) {
        }
      ],
      "arrow-body-style": [
        [""],
        function(options) {
        }
      ],
      "arrow-parens": [
        [""],
        function(options) {
        }
      ],
      "arrow-spacing": [
        [""],
        function(options) {
        }
      ],
      "generator-star-spacing": [
        [""],
        function(options) {
        }
      ],
      "no-confusing-arrow": [
        [""],
        function(options) {
        }
      ],
      "no-useless-computed-key": [
        [""],
        function(options) {
        }
      ],
      "no-useless-rename": [
        [""],
        function(options) {
        }
      ],
      "no-var": [
        [""],
        function(options) {
        }
      ],
      "object-shorthand": [
        [""],
        function(options) {
        }
      ],
      "prefer-arrow-callback": [
        [""],
        function(options) {
        }
      ],
      "prefer-const": [
        [""],
        function(options) {
        }
      ],
      "prefer-numeric-literals": [
        [""],
        function(options) {
        }
      ],
      "prefer-spread": [
        [""],
        function(options) {
        }
      ],
      "prefer-template": [
        [""],
        function(options) {
        }
      ],
      "rest-spread-spacing": [
        [""],
        function(options) {
        }
      ],
      "sort-imports": [
        [""],
        function(options) {
        }
      ],
      "template-curly-spacing": [
        [""],
        function(options) {
        }
      ],
      "yield-star-spacing": [
        [""],
        function(options) {
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