//
// var sounds = [
//   "/assets/screams/1.wav",
//   "/assets/screams/2.wav",
//   "/assets/screams/3.wav",
//   "/assets/screams/4.wav",
//   "/assets/screams/5.wav",
//   "/assets/screams/6.wav",
//   "/assets/screams/7.wav",
//   "/assets/screams/8.wav",
//   "/assets/screams/9.wav",
//   "/assets/screams/10.wav",
//   "/assets/screams/11.wav",
//   "/assets/screams/12.wav",
//   "/assets/screams/13.wav",
//   "/assets/screams/14.wav",
//   "/assets/screams/15.wav",
//   "/assets/screams/16.wav",
//   "/assets/screams/17.wav",
//   "/assets/screams/18.wav",
//   "/assets/screams/19.wav",
//   "/assets/screams/20.wav",
//   "/assets/screams/21.wav",
//   "/assets/screams/22.wav",
//   "/assets/screams/23.wav",
//   "/assets/screams/24.wav",
//   "/assets/screams/25.wav",
//   "/assets/screams/26.wav",
//   "/assets/screams/27.wav",
//   "/assets/screams/28.wav",
//   "/assets/screams/29.wav",
//   "/assets/screams/30.wav",
//   "/assets/screams/31.wav",
//   "/assets/screams/32.wav",
//   "/assets/screams/33.wav",
//   "/assets/screams/34.wav",
//   "/assets/screams/35.wav",
//   "/assets/screams/36.wav",
//   "/assets/screams/37.wav",
//   "/assets/screams/38.wav",
//   "/assets/screams/39.wav",
//   "/assets/screams/40.wav",
//   "/assets/screams/41.wav",
//   "/assets/screams/42.wav",
//
// ];
//
// var sound;
//
// //function used to create a random number
// function generateRandomNumber(max) {
//   return Math.floor(Math.random() * max);
// }
//
// function playSound() {
//   //create a random number and assign to x
//   var x = generateRandomNumber(sounds.length - 1);
//   var soundSrc = sounds[x];
//   //create a new instance of the audio object
//   if (sound) {
//     sound.pause();
//   } else {
//     sound = new Audio();
//   }
//   sound.src = soundSrc;
//   //play the sound
//   sound.play();
// }
//
// document.getElementById('soundbutton').addEventListener('click', playSound);
