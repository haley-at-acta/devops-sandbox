import { expect } from 'chai';
import { factorial } from '.';

describe('factorial', () => {
  it('should call 5', () => {
    expect(factorial(5)).to.deep.equal(120);
  });
});
