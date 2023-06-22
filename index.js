let songIndex = 0;
let progressBar = document.getElementById('progressBar');
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('./songs/1.mp3');

masterPlay.addEventListener('click',function(){
   if (audioElement.paused||audioElement.currentTime<=0) {
      audioElement.play();
   }
   else {
      audioElement.pause();
   }
})


