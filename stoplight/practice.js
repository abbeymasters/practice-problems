function multipleArray(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    let product = 1;

    for(let j = 0; j < arr.length; j++) {
      if(arr[i] !== arr[j]) {
        product *= arr[j];
      }
    }
    newArray.push(product);
  }
  return newArray;
}

console.log(multipleArray([4, 3, 2, 1]));


//we want to loop through our array to get access to the first element in order to compare it to the other elements in the array
// setting up our product to be multiplied against
//run another for loop to compare against arr[i];