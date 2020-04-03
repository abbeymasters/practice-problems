function reverseString(str) {
  const splitWords = str.toString().split(' ');
  let newArray = [];
  for(let i = splitWords.length - 1; i >=0; i--) {
    newArray.push(splitWords[i]);
  }
  let regex = /[,{2}]/g;
  console.log(newArray.join().replace(regex, ' '));
}


module.exports = reverseString;
