import stripInlineComments from '../lib/strip-inline-comments';

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import   postcss    from 'postcss';
import     fs     from 'fs';
import   syntax   from 'postcss-scss';

chai.use(chaiAsPromised);
let expect = chai.expect;

function getFixtures(fixture) {
    let ret = {};

    function readFS(name) {
        return fs.readFileSync('test/' + name + '.css', 'utf8');
    }

    ret.test = readFS(fixture);
    ret.expect = readFS(fixture + '.expect');

    return ret;
}

describe('strip single line comments', () => {

    it('strip stingle line comments', done => {
        let fixture = getFixtures('fixture');

        postcss([stripInlineComments])
        .process(fixture.test, { parser: syntax }).then( result => {
            expect(result.css).to.eql(fixture.expect);
            done();
        }).catch(done);
    });
});
