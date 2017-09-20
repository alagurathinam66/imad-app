console.log('Loaded!');
//change the test
var element = document.getElementById('main text');

element.innerHTML = 'new value';

//move the image
var img = document.getElementById('mod');

img.onClick = function (){
    
    img.Style.marginRight = '400px';
}