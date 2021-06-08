import { getName } from '../getName';

describe('getName functon',  () => {
  it('tests the get name function',  () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(spot);
    expect(actual).toEqual('spot');
  });
});
