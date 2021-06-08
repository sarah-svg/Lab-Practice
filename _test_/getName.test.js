import { copyAndPush } from '../copyAndPush';
import { getName } from '../getName';

describe('getName functon',  () => {
  it('tests the get name function',  () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(spot);
    expect(actual).toEqual('spot');

    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    getName(character); 
  });
  it('test the copy and push funtion', () => {
    const numbers = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 5);
    expect(actual).toEqual(5);  });
});
