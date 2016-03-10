import stripInlineComments from '../lib/strip-inline-comments';

import { expect } from 'chai';
import   postcss    from 'postcss';
import     fs     from 'fs';
import   syntax   from 'postcss-scss';

let fixtures = fs.readFileSync('test/fixtures.css', 'utf8');

let test = (css, expected) => {
    postcss([stripInlineComments]).process(css, { parser: syntax }).then( (result) => {
      console.log(result.css) // CSS with normal comments

      expect(result.css).to.eql(expected);
    });
};

describe('strip single line comments', () => {
    it('strip stingle line comments', () => {
        test(fixtures, '{}');
    });
});