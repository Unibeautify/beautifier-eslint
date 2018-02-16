# Contributing to beautifier-eslint

### Setup

1. Create a fork of this repository and download locally
2. Run `npm install` to install all of the development dependencies
3. If you're using Atom, it's recommended to download the [atom-typescript](https://atom.io/packages/atom-typescript) package

### Making Changes

The options are all defined in `src/options.ts`, while the beautifier itself is in `src/index.ts`.

#### Options Changes

For adding or modifying options themselves, follow the below pattern.

1. The first line is the rule (aka an option) as defined in [ESLint](https://eslint.org/docs/rules/)
2. The second line is the corresponding option(s) in Unibeautify
3. The third line should be the same throughout, an options parameter that returns type any
4. The remaining lines determine which option to pass to ESLint based on the option selected in Unibeautify. In this example Unibeautify's options are true and false, so they correspond easily to ESLint's always and never, respectfully.

Important: Make sure an array is being returned, with the first index being 2 and the second one being the value to return. The 2 signifies an error, which tells ESLint to fix it rather than log it. If the user doesn't use the option, it should return 0 so that ESLint doesn't do anything with the option.

```typescript
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
  }
]
```

#### Options and Languages

It's recommended to bundle options based on their commonality to the languages they target. While an option such as `indent_size` applies to almost all languages, others such as `break_chained_methods` would only apply to script-type languages and not markup. However for ESLint, everything can be bundled together.

In index.ts, the `options` property consists of `language: options.(name of options object)`. In options.ts, the options object is named "JavaScript".