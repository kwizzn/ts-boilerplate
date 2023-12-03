import main from './index';
import { Main } from './index';
import chai from "chai";

const expect = chai.expect;

describe('main()', () => {
  it('should return the port number', async () => {
    expect(await main(42)).to.equal(42);
  });
});

describe('Main', ()=> {
  let main: Main;

  before(() => {
    main = new Main(42);
  });

  it('should log the number', async () => {
    expect(await main.log()).to.equal(42);
  });

  it('should throw', () => {
    expect(main.throw.bind(main)).to.throw('Main.throw 42');
  });
});
