console.log('Loaded!');
//change the test
var element = document.getElementById('main text');

element.innerHTML = 'new value';

//move the image
var img = document.getElementById('mod');
var marginLeft =0;


function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onClick = function (){
    
    var interval = setInterval(moveRight, 50);
    img.Style.marginRight = '400px';
};