var enterButton = document.getElementById("overlay");
var mainContent = document.getElementById("mainContent");
var audioPlayer = document.getElementById("audioPlayer");
var musicStatus = document.getElementById("musicStatus");
var progressBar = document.getElementById("progressBar");


var progressBarInterval; // Variable to store the interval reference

// Function to update the progress bar smoothly
function updateProgressBar() {
  var currentTime = audioPlayer.currentTime;
  var duration = audioPlayer.duration;
  var progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + "%";
}

// Add event listeners
audioPlayer.addEventListener("play", function () {
  musicStatus.textContent = "";
  progressBarInterval = setInterval(updateProgressBar, 10); // Update every 10ms
});

audioPlayer.addEventListener("pause", function () {
  musicStatus.textContent = "";
  clearInterval(progressBarInterval); // Stop updating when paused
});

audioPlayer.addEventListener("loadedmetadata", function () {
  progressBar.style.width = "0%";
});

enterButton.addEventListener("click", function () {
  audioPlayer.play();
  mainContent.classList.add("visible");
  enterButton.classList.remove("visible");
});

setTimeout(function () {
  enterButton.classList.add("visible");
  enterButton.style.animation = "fade-in 1s ease-in";
}, 1000);

document.body.addEventListener("click", function () {
    var video = document.getElementById("video");
    video.style.display = "block";
    video.play();
  });
  
      

