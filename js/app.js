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
  // var levelTwo = [fsharp, asdfdsaf,asasdfd, adfdasf,asdfdasfafsd]
  var currentCombo = fTreble;
  var playedKeys = [];
  var wrongGuess = 0;
  var correct = 0;

  // var keys = ['keyC', 'keyD', 'keyE']
  // keys.forEach(function(keyName) {
  //   $('#' + keyName).on('click', function() {
  //     $('#' + keyName).append('<audio autoplay="source"><source src="assets/MusicFiles/' + keyName + '.wav" type="audio/wav"></audio>')
  //   })
  // })


  $('#keyC').on('click',(function(){
  $('#keyC').append('<audio autoplay="source"><source src="assets/MusicFiles/C.wav" type="audio/wav"></audio>')
  }));

  $('#keyD').on('click',(function(){
  $('#keyD').append('<audio autoplay="source"><source src="assets/MusicFiles/D.wav" type="audio/wav"></audio>')
  }));

  $('#keyE').on('click',(function(){
  $('#keyE').append('<audio autoplay="source"><source src="assets/MusicFiles/E.wav" type="audio/wav"></audio>')
  }));

  $('#keyF').on('click',(function(){
  $('#keyF').append('<audio autoplay="source"><source src="assets/MusicFiles/F.wav" type="audio/wav"></audio>')
  }));

  $('#keyG').on('click',(function(){
  $('#keyG').append('<audio autoplay="source"><source src="assets/MusicFiles/G.wav" type="audio/wav"></audio>')
  }));

  $('#keyA').on('click',(function(){
  $('#keyA').append('<audio autoplay="source"><source src="assets/MusicFiles/A.wav" type="audio/wav"></audio>')
  }));

  $('#keyB').on('click',(function(){
  $('#keyB').append('<audio autoplay="source"><source src="assets/MusicFiles/B.wav" type="audio/wav"></audio>')
  }));

  $('#keyCsh').on('click',(function(){
  $('#keyCsh').append('<audio autoplay="source"><source src="assets/MusicFiles/Csharp.wav" type="audio/wav"></audio>')
  }));

  $('#keyDsh').on('click',(function(){
  $('#keyDsh').append('<audio autoplay="source"><source src="assets/MusicFiles/Dsharp.wav" type="audio/wav"></audio>')
  }));

  $('#keyFsh').on('click',(function(){
  $('#keyFsh').append('<audio autoplay="source"><source src="assets/MusicFiles/Fsharp.wav" type="audio/wav"></audio>')
  }));


  $('#keyGsh').on('click',(function(){
  $('#keyGsh').append('<audio autoplay="source"><source src="assets/MusicFiles/Gsharp.wav" type="audio/wav"></audio>')
  }));

  $('#keyAsh').on('click',(function(){
  $('#keyAsh').append('<audio autoplay="source"><source src="assets/MusicFiles/Asharp.wav" type="audio/wav"></audio>')
  }));

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
      // if correct >= 10 {
      //   picturesArr = levelTwo
      // }
      $('#correct').text('Correct: '+ correct)
      playedKeys = [];
      wrongGuess = 0;
      if(correct === 10){
          alert('You win! Great Job');

      }

      newCombo();
    }
  })

    $('#reset').on('click', function(){
      $('#wrong').text('Wrong: 0');
      $('#correct').text('Correct: 0');
      wrongGuess = 0;
      correct = 0;
    })

    function newCombo(){
      var randomIndex= Math.floor(Math.random()*picturesArr.length);
      if (currentCombo == picturesArr[randomIndex]){
        newCombo();
      } else {
        currentCombo = picturesArr[randomIndex];
        $("#musicNote").attr({src: currentCombo.img});
      }
    }
  });
