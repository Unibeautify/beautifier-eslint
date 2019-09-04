import * as path from "path";
import { newUnibeautify } from "unibeautify";
import beautifier from "../../src";
const filePath: string = path.resolve(__dirname, "test.js");
test(`should successfully beautify JavaScript React with jsx-wrap-multilines`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `
var Test = createReactClass({
  render: function () {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
});
  `;
  const beautifierResult = `
var Test = createReactClass({
    render: function () {
        return (
            <div>
                <p>Hello</p>
            </div>
        );
    }
});
  `;
  return unibeautify
    .beautify({
      filePath,
      languageName: "JSX",
      options: {
        JSX: {
          ESLint: {
            prefer_beautifier_config: true,
          },
        } as any,
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
