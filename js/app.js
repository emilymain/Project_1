$(document).ready(function(){

console.log("Connected!")
//
//


var aTreble = {
  img: 'assets/ATreble.png',
  win:['keyA']
};

var bTreble = {
  img: 'assets/BTreble.png',
  win:['keyB']};

var bTreble2 = {
  img: 'assets/BTreble2.png',
  win: ['keyB']};

var cTreble2 = {
  img: 'assets/BTreble2.png',
  win: ['keyB']};

var dTreble1 = {
  img: 'assets/DTreble1.png',
  win: ['keyD']};

var dTreble2 = {
  img: 'assets/DTreble2.png',
  win: ['keyD']};


var eTreble1 = {
 img: 'assets/ETreble1.png',
 win: ['keyE']};

var fTreble = {
  img:'assets/FTreble.png',
  win: ['keyF']};

var gTreble = {
  img: 'assets/GTreble.png',
  win: ['keyG']};

var currentCombo = fTreble
var playedKeys = []


$('.keys').on('click', function(){
  playedKeys.push($(this).attr('id'))
  console.log($(this).attr('id'))
  console.log(playedKeys)
  console.log(currentCombo.win)
  if (playedKeys.length == currentCombo.win.length){
    for (var i = 0; i<playedKeys.length; i++){
      if (playedKeys[i] != currentCombo.win[i]){
        console.log('Try Again!')
        playedKeys=[]

        return;
      }
    }
    console.log('you win!')
  }
})







// $( "#whiteKeys" ).click();







})
