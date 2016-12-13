'use strict';

var allImages = [];
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');

function RandomImages(fileName, filePath) {
  this.fileName = fileName;
  this.filePath = filePath;
  this.clicks = 0;

  allImages.push(this);
}

new RandomImages('bag', 'images/bag.jpg');
new RandomImages('banana', 'images/banana.jpg');
new RandomImages('bathroom', 'images/bathroom.jpg');
new RandomImages('boots', 'images/boots.jpg');
new RandomImages('breakfast', 'images/breakfast.jpg');
new RandomImages('bubblegum', 'images/bubblegum.jpg');
new RandomImages('chair', 'images/chair.jpg');
new RandomImages('cthulhu', 'images/cthulhu.jpg');
new RandomImages('dog-duck', 'images/dog-duck.jpg');
new RandomImages('dragon', 'images/dragon.jpg');
new RandomImages('pen', 'images/pen.jpg');
new RandomImages('pet-sweep', 'images/pet-sweep.jpg');
new RandomImages('scissors', 'images/scissors.jpg');
new RandomImages('shark', 'images/shark.jpg');
new RandomImages('sweep', 'images/sweep.png');
new RandomImages('tauntaun', 'images/tauntaun.jpg');
new RandomImages('unicorn', 'images/unicorn.jpg');
new RandomImages('usb', 'images/usb.gif');
new RandomImages('water-can', 'images/water-can.jpg');
new RandomImages('wine-glass', 'images/wine-glass.jpg');

left.src = allImages[randomImage()].filePath;
center.src = allImages[randomImage()].filePath;
right.src = allImages[randomImage()].filePath;

function randomImage() {
  return (Math.floor(Math.random() * allImages.length));
}
