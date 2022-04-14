var video = document.getElementById("player1");
var volumeslider = document.getElementById("slider");
var mutebutton = document.getElementById("mute");
var oldschoolstyle = document.getElementById("vintage");
var originalstyle = document.getElementById("orig");
var speedupbutton = document.getElementById("faster");
var slowdownbutton = document.getElementById("slower");
var skipaheadbutton = document.getElementById("skip");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	/* set default attributes */
	video.muted = false;
	video.volume = 1;
	video.playbackRate = 1;

	/* turn off autoplay + loop, loads video*/
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	/* update volume info*/
	var currentvolume = volumeslider.value;
	document.getElementById("volume").innerHTML = currentvolume + "%";

	/* play video */
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");

	/* pause video */
	video.pause();
});

speedupbutton.addEventListener("click", function() {
	video.playbackRate *= 1.05;

	console.log("New speed is " + video.playbackRate);
});

slowdownbutton.addEventListener("click", function() {
	video.playbackRate *= 0.95;

	console.log("New speed is " + video.playbackRate);
});

skipaheadbutton.addEventListener("click", function() {
	var currentlyat = video.currentTime;
	var newtime = currentlyat + 15;

	if (newtime > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime = newtime;
	}
});

mutebutton.addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Video Unmuted");
		mutebutton.innerHTML = "Mute";
		video.muted = false;
	} else {
		console.log("Video Muted");
		mutebutton.innerHTML = "Unmute";
		video.muted = true;
	}
}); 

volumeslider.addEventListener("input", function() {
	/* get current volume set */
	var currentvolume = volumeslider.value;

	/* change actual volume */
	video.volume = (currentvolume / 100);

	/* update volume display on page */
	document.getElementById("volume").innerHTML = currentvolume + "%";

	console.log("Volume changed to " + currentvolume + "%");
});

oldschoolstyle.addEventListener("click", function() {
	console.log("Old School style applied");
	video.classList.add("oldSchool");
});

originalstyle.addEventListener("click", function() {
	console.log("Reverted to original style");
	video.classList.remove("oldSchool");
});

