$(document).ready(function(){
  console.log("Connected!")

  var fTreble = {
    img:'assets/FTreble.png',
    win: ['keyF']};

  var aTreble = {
    img: 'assets/ATreble.png',
    win:['keyA']};

  var bTreble = {
    img: 'assets/BTreble.png',
    win:['keyB']};

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

  var eTreble2 = {
    img: 'assets/ETreble2.png',
    win: ['keyE']};

  var gTreble = {
    img: 'assets/GTreble.png',
    win: ['keyG']};

  var aBass = {
    img: 'assets/Abass.png',
    win: ['keyA']};

  var aBassTwo = {
    img:'assets/Abass2.png',
    win: ['keyA']};

  var bBass = {
    img: 'assets/Bbass.png',
    win: ['keyB']};

  var dBass = {
    img: 'assets/Dbass.png',
    win: ['keyD']};

  var dBassTwo = {
    img: 'assets/Dbass2.png',
    win: ['keyD']};

  var eBass = {
    img: 'assets/Ebass.png',
    win: ['keyE']};

  var fBass = {
    img: 'assets/Fbass.png',
    win: ['keyF']};

  var fBassTwo = {
    img: 'assets/Fbass2.png',
    win: ['keyF']};

  var gBass = {
    img: 'assets/Gbass.png',
    win: ['keyG']};

  var gBassTwo = {
    img: 'assets/Gbass2.png',
    win: ['keyG']};

  var picturesArr = [fTreble, aTreble, bTreble, cTreble, dTreble1, dTreble2, eTreble1, eTreble2, gTreble, aBass, aBassTwo, bBass, dBass, dBassTwo, eBass, fBass, fBassTwo, gBass, gBassTwo];
  var currentCombo = fTreble;
  var playedKeys = [];
  var wrongGuess = 0;
  var correct = 0;

  $('#startGame').click(function(){
    $('#instructions').addClass('hidden')
    $('#gameBoard').removeClass('hidden')
  })

  $('.keys').on('click', function(){
    var $currentKey =$(this)
    $(this).addClass('selectedKey')
    setTimeout(function(){
      $currentKey.removeClass('selectedKey')
    }, 300);
    playedKeys.push($(this).attr('id'));
    console.log($(this).attr('id'));
    console.log(playedKeys);
    console.log(currentCombo.win);
    if (playedKeys.length == currentCombo.win.length){
      for (var i = 0; i<playedKeys.length; i++){
        if (playedKeys[i] != currentCombo.win[i]){

          console.log('Try Again!')
          wrongGuess++;
          if (wrongGuess === 3) {
            alert('you lose');
            wrongGuess = 0;
            correct = 0;
            $('#wrong').text('Wrong: 0');
            $('#correct').text('Correct: 0');

          }
          $('#message').text('Try Again!')
          $('#wrong').text('Wrong: ' + wrongGuess)
          playedKeys=[];
          return;
        }
      }
      console.log('you win!');
      $('#message').text('Good Job!')
      correct += 1;
      $('#correct').text('Correct: '+ correct)
      playedKeys = [];
      wrongGuess = 0;
      if(correct === 10){
          alert('You win! Great Job');

      }

      var randomIndex= Math.floor(Math.random()*19);
      currentCombo = picturesArr[randomIndex];
      $("#musicNote").attr({src: currentCombo.img});
    }
  })

    $('#reset').on('click', function(){
      $('#wrong').text('Wrong: 0');
      $('#correct').text('Correct: 0');
      wrongGuess = 0;
      correct = 0;
    })
  });
