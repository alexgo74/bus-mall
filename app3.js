'use strict';

var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

var allProducts = [];
var currentlyShowing = [];
var previouslyShown = [];

var picNames = ['bag', 'banana', 'bathroom', 'boots', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'images/' + name + '.jpg';
}

for (var i = 0; i < picNames.length; i++) {
  allProducts.push(new Product(picNames[i]));
}

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function displayPics() {
  var leftIndex = randNum(0, allProducts.length);
  left.src = allProducts[leftIndex].path;
  left.alt = allProducts[leftIndex].name;
  allProducts[leftIndex].views += 1;
  // console.log(allProducts[leftIndex].name + ' has been shown ' + allProducts[leftIndex].views + ' times');

  var centerIndex = randNum(0, allProducts.length);
  while (centerIndex === leftIndex) { // also compare against all 3 previos;y shown
    // console.log('duplicate found between center and left');
    centerIndex = randNum(0, allProducts.length);
  }
  center.src = allProducts[centerIndex].path;
  center.alt = allProducts[centerIndex].name;
  allProducts[centerIndex].views += 1;
  // console.log(allProducts[centerIndex].name + ' has been shown ' + allProducts[centerIndex].views + ' times');

  var rightIndex = randNum(0, allProducts.length);
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    // console.log('duplicate found between right and left/center');
    rightIndex = randNum(0, allProducts.length);
  }
  console.log(currentlyShowing);
  right.src = allProducts[rightIndex].path;
  right.alt = allProducts[rightIndex].name;
  allProducts[rightIndex].views += 1;
  // console.log(allProducts[rightIndex].name + ' has been shown ' + allProducts[rightIndex].views + ' times');
  previouslyShown = [leftIndex, centerIndex, rightIndex];
}

function handlePicContainerClick() {
  console.log(event.target.id);
  if(event.target.id === 'pic-container') {
    return alert('Click on a picture');
  }
  // console.log(event.target.alt + ' was clicked');
  for (var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].clicks += 1;
      console.log(allProducts[i].name + ' has ' + allProducts[i].clicks + ' clicks');
    }
  }

  displayPics();
  displayList();
}

picContainer.addEventListener('click', handlePicContainerClick);

var picList = document.getElementById('picList');
function displayList() {
  picList.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    var liEl2 = document.createElement('li');
    liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].clicks + ' times';
    liEl2.textContent = allProducts[i].name + ' has been viewed ' + allProducts[i].views + ' times';
    picList.appendChild(liEl);
    picList.appendChild(liEl2);
  }
}

displayPics();
