import { expect } from 'chai';
import { factorial } from '.';

describe('factorial', () => {
  it('should call 5', () => {
    expect(factorial(5)).to.deep.equal(120);
  });

  it('should call 10', () => {
    expect(factorial(10)).to.deep.equal(3628800);
  });
});
