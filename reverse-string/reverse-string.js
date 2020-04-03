function reverseString(str) {
  const splitWords = str.toString().split(' ');
  let newArray = [];
  for(let i = splitWords.length - 1; i >=0; i--) {
    newArray.push(splitWords[i]);
  }
  return newArray.join().replace(/,,/g, ' ').replace(/,/g, '');
}


module.exports = reverseString;
