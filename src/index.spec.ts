import Main from './index';
import chai from "chai";

const expect = chai.expect;

describe('Main', ()=> {
  let main: Main;

  before(() => {
    main = new Main('crash');
  });

  describe('log()', ()=> {
    it('should log main.dummy', async () => {
      expect(await main.log()).to.equal('crash');
    });

  });
  describe('throw()', ()=> {
    it('should throw', () => {
      expect(main.throw.bind(main)).to.throw('error: crash');
    });
  });
});

