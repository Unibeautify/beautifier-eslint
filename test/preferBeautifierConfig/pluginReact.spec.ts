import { newUnibeautify, Beautifier } from "unibeautify";
import beautifier from "../../src";
test(`should successfully beautify JavaScript React with jsx-wrap-multilines`, () => {
  const unibeautify = newUnibeautify();
  unibeautify.loadBeautifier(beautifier);
  const text = `
  const Hello = createReactClass({
    render: function () {
      return (<div>
        <p>Hello</p>
      </div>);
    }
  });
  `;
  const beautifierResult = `
  const Hello = createReactClass({
    render: function() {
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
      languageName: "JSX",
      options: {
        JSX: {
          ESLint: {
            prefer_beautifier_config: true
          }
        } as any,
      },
      text,
    })
    .then(results => {
      expect(results).toBe(beautifierResult);
    });
});
