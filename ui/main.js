console.log('done it!');
//change text to the main-tex div
var element = document.getElementById('main-text');
element.innerHTML = 'newValue Praveen';

//move the image
var img = document.getElementById('rap')
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
  var interval = setInterval(moveRight,50);
};