$(document).ready(function(){
console.log("Connected!")
//

var fTreble = {
  img:'assets/FTreble.png',
  win: ['keyF']};

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

var cTreble = {
  img: 'assets/CTreble.png',
  win: ['keyC']};

var dTreble1 = {
  img: 'assets/DTreble1.png',
  win: ['keyD']};

var dTreble2 = {
  img: 'assets/DTreble2.png',
  win: ['keyD']};


var eTreble1 = {
 img: 'assets/ETreble1.png',
 win: ['keyE']};


var gTreble = {
  img: 'assets/GTreble.png',
  win: ['keyG']};

var j=0;
var picturesArr = [fTreble, aTreble, bTreble, bTreble2, cTreble, dTreble1, dTreble2, eTreble1, gTreble]
var currentCombo = fTreble
var playedKeys = []
var wrongGuess = [];


$('.keys').on('click', function(){
  playedKeys.push($(this).attr('id'))
  console.log($(this).attr('id'))
  console.log(playedKeys)
  console.log(currentCombo.win)
  if (playedKeys.length == currentCombo.win.length){
    for (var i = 0; i<playedKeys.length; i++){
      if (playedKeys[i] != currentCombo.win[i]){

        console.log('Try Again!')
        wrongGuess.push(true);
        if (wrongGuess.length === 3) {
          alert('you lose');
          wrongGuess = [];
        } else {
          null;
        };
        playedKeys=[]



        return;
      }
    }
    console.log('you win!')
    playedKeys.shift()
    j= Math.floor(Math.random()*9)
    console.log(j)
    $("#musicNote").attr({src: picturesArr[j].img})

   currentCombo = picturesArr[j]
  }
})













})
