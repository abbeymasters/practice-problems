const reverseString = require('./reverse-string');

describe('reverse string test', () => {
  it('reverses a string', () => {
    const array = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
    const result = reverseString(array);
    expect(result).toEqual('steal pound cake');
  });

  it('still reverses a string', () => {
    const newArray = ['b', 'y', 'e', ' ', 'b', 'y', 'e', ' ', 'b', 'a', 'b', 'y'];
    const result = reverseString(newArray);
    expect(result).toEqual('baby bye bye');
  });
});
