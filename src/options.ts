import { BeautifierOptions } from "unibeautify";
// unibeautify:disable
const options: BeautifierOptions = {
  JavaScript: {
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
    //   ["typesafe_equality_operators"],
    //   (options): any => {
    //     switch (options.typesafe_equality_operators) {
    //       case true:
    //         return [2, "always"];
    //       default:
    //         return 0;
    //     }
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
    "brace-style": [
      ["brace_style"],
      (options): any => {
        switch (options.brace_style) {
          case "collapse":
            return [2, "1tbs"];
          case "end-expand":
            return [2, "stroustrup"];
          case "expand":
            return [2, "allman"];
          default:
            return 0;
        }
      },
    ],
    // "capitalized-comments": [
    //   [""],
    //   (options): any => {
    //   }
    // ],
    "comma-dangle": [
      ["end_with_comma"],
      (options): any => {
        switch (options.end_with_comma) {
          case true:
            return [2, "always"];
          case false:
            return [2, "never"];
          default:
            return 0;
        }
      },
    ],
    "comma-style": [
      ["comma_first"],
      (options): any => {
        switch (options.comma_first) {
          case true:
            return [2, "first"];
          case false:
            return [2, "last"];
          default:
            return 0;
        }
      },
    ],
    // "computed-property-spacing": [
    //   [""],
    //   (options): any => {
    //   }
    // ],
    "eol-last": [
      ["end_with_newline"],
      (options): any => {
        switch (options.end_with_newline) {
          case true:
            return [2, "always"];
          case false:
            return [2, "never"];
          default:
            return 0;
        }
      },
    ],
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
    "indent": [
      ["indent_style", "indent_size", "indent_chained_methods", "keep_array_indentation"],
      (options): any => {
        const extraOptions: any = {};
        if (options.keep_array_indentation === true) {
          extraOptions.ArrayExpression = "off";
        }
        if (options.indent_chained_methods === false) {
          extraOptions.MemberExpression = "off";
        }
        switch (options.indent_style) {
          case "tab":
            return [2, "tab", extraOptions];
          case "space":
            return [2, options.indent_size, extraOptions];
          default:
            return 0;
        }
      },
    ],
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
    "keyword-spacing": [
      ["space_before_conditional"],
      (options): any => {
        if (options.space_before_conditional === true) {
          return [2, {"overrides": {"if": {"after": true}}}];
        } else if (options.space_before_conditional === false) {
          return [2, {"overrides": {"if": {"after": false}}}];
        } else {
          return 0;
        }
      },
    ],
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
          return [2, {"ignoreChainWithDepth": 2 }];
        }
        return 0;
      },
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
        switch (options.remove_trailing_whitespace) {
          case true:
            return 2;
          default:
            return 0;
        }
      },
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
        switch (options.object_curly_spacing) {
          case true:
            return [2, "always"];
          case false:
            return [2, "never"];
          default:
            return 0;
        }
      },
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
          return [2, options.quotes];
        }
      },
    ],
    "semi": [
      ["end_with_semicolon"],
      (options): any => {
        switch (options.end_with_semicolon) {
          case true:
            return [2, "always"];
          case false:
            return [2, "never"];
          default:
            return 0;
        }
      },
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
    "space-before-function-paren": [
      ["space_after_anon_function"],
      (options): any => {
        switch (options.space_after_anon_function) {
          case true:
            return [2, "always"];
          case false:
            return [2, "never"];
          default:
            return 0;
        }
      },
    ],
    "space-in-parens": [
      ["space_in_paren"],
      (options): any => {
        switch (options.space_in_paren) {
          case true:
            return [2, "always"];
          case false:
            return [2, "never"];
          default:
            return 0;
        }
      },
    ],
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
          return [2, options.arrow_parens];
        }
        return 0;
      },
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
};
// unibeautify:enable
export default options;
