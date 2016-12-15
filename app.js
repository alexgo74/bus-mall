'use strict';

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DATA SETUP
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

// DOM variables
// -----------------
var picContainer = document.getElementById('pic-container');
// var picList = document.getElementById('picList');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var ctx = document.getElementById('myChart');

// Global variables
// -----------------
var allProducts = [];
var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];
var newArray = [];
var oldArray = [];
var clickCounter = 0;
var allClicks = [];

function drawTable() {
  new Chart(ctx, {
    type: 'bar',
    width: 20,
    data: {
      labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'],
      datasets: [{
        label: '# of Clicks',
        data: allClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

// Constructor
// -----------------
function Product(name) {
  this.name = name;
  this.filePath = 'images/' + name + '.jpg';
  this.clicks = 0;
  this.views = 0;

  allProducts.push(this);
}

// Instances
// -----------------
// for (var i = 0; i < names.length; i++) {
//   new Product(names[i]);
// }
//console.table(allProducts);

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// DECLARE FUNCTIONS
// (DEFINE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

function rand() {
  // generate a random number between 0 and allProducts.length
  return Math.floor(Math.random() * allProducts.length);
}

function makeArrayOfThreeNumbers() {

  oldArray[0] = newArray[0];
  oldArray[1] = newArray[1];
  oldArray[2] = newArray[2];

  newArray[0] = rand();
  while (newArray[0] === oldArray[0] || newArray[0] === oldArray[1] || newArray[0] === oldArray[2]) {
    //console.log(newArray, 'broken value in first position of new array');
    newArray[0] = rand();
    //console.log('fixed');
  }

  newArray[1] = rand();
  while (newArray[0] === newArray[1]) {
    //console.log(newArray, 'old broken array');
    newArray[1] = rand();
    //console.log('Caught dupes between 1st an 2nd numbers');
  }

  newArray[2] = rand();
  while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]) {
    //console.log(newArray, 'old broken array');
    newArray[2] = rand();
    //console.log('Caught a dupe with the 3rd number');
  }
}
//makeArrayOfThreeNumbers();

// this will place three new images on the page
function showThreePics() {
  makeArrayOfThreeNumbers();
  left.src = allProducts[newArray[0]].filePath;
  allProducts[newArray[0]].views += 1;
  center.src = allProducts[newArray[1]].filePath;
  allProducts[newArray[1]].views += 1;
  right.src = allProducts[newArray[2]].filePath;
  allProducts[newArray[2]].views += 1;
}

// function displayList() {
//   picList.innerHTML = '';
//   for (var i = 0; i < allProducts.length; i++) {
//     var liEl = document.createElement('li');
//     var liEl2 = document.createElement('li');
//     liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].clicks + ' times';
//     liEl2.textContent = allProducts[i].name + ' has been viewed ' + allProducts[i].views + ' times';
//     picList.appendChild(liEl);
//     picList.appendChild(liEl2);
//   }
// }

function handleClick(event) {
  event.preventDefault();
  // identify who was clicked
  // console.log(event.target.src, 'was clicked');

  if (event.target.id === 'pic-container') {
    return alert('Click on picture');
  }
  // tally the click
  if (event.target.id === 'left') {
    allProducts[newArray[0]].clicks += 1;
  }
  if (event.target.id === 'center') {
    allProducts[newArray[1]].clicks += 1;
  }
  if (event.target.id === 'right') {
    allProducts[newArray[2]].clicks += 1;
  }
  clickCounter += 1;
  // check whether total clicks <= 10
  if (clickCounter > 10) {
    localStorage.setItem('allProducts', JSON.stringify(allProducts));
    for (var i = 0; i < allProducts.length; i++) {
      allClicks[i] = allProducts[i].clicks;
    }
    // localStorage.setItem('allClicks', JSON.stringify(allClicks));
    drawTable();
    return alert('Out of clicks');
  }
  // after 10, show "Results"
  showThreePics();
  //displayList();
}
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
// CODE THAT RUNS ON PAGE LOAD
// (EXECUTE ACTIONS)
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++ctx

if(localStorage.allProducts){
  allProducts = JSON.parse(localStorage.allProducts);
} else {
  for (var i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
  var allProductsStringified = JSON.stringify(allProducts);
  localStorage.setItem('allProducts', allProductsStringified);
}
showThreePics();
picContainer.addEventListener('click', handleClick);
