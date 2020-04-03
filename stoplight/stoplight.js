// const goButton = document.querySelector('button');
// const greenLight = document.querySelector('.one');
// const yellowLight = document.querySelector('.two');
// const redLight = document.querySelector('.three');

// const lightArray = [greenLight, yellowLight, redLight];
// let index = 1;

// goButton.addEventListener('click', () => {
//   index++;
//   if(index === 0) {
//     lightArray[index].classList.add('green');
//     lightArray[1].classList.remove('yellow');
//     lightArray[2].classList.remove('red');
//   }
//   if(index === 1) {
//     lightArray[index].classList.add('yellow');
//     lightArray[0].classList.remove('green');
//     lightArray[2].classList.remove('red');
//   }
//   if(index === 2) {
//     lightArray[index].classList.add('red');
//     lightArray[0].classList.remove('green');
//     lightArray[1].classList.remove('yellow');
//     index = -1;
//   }
// });



const goButton = document.querySelector('button');
const greenLight = document.querySelector('.one');
const yellowLight = document.querySelector('.two');
const redLight = document.querySelector('.three');

const lightArray = [greenLight, yellowLight, redLight];


for(let i = 0; i < lightArray.length; i++) {
  lightArray[i].addEventListener('click', turnOnLights);
}

function turnOnLights(e) {
  if(e.target.id === 'green') {
    greenLight.classList.add('.green');
  }
}

