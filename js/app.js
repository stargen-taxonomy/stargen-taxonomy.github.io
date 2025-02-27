// Next/previous controls
function plusSlides(n, idx=0) {
    slideIndex[idx] += n;
    showSlides(slideIndex[idx], idx=idx);
}

// Thumbnail image controls
function currentSlide(n, idx=0) {
    slideIndex[idx] = n;
    showSlides(slideIndex[idx], idx=idx);
}

function showSlides(n, idx=0) {
let i;
let slides = document.getElementsByClassName(`video-container slide-index-${idx}`);
let dots = document.getElementsByClassName(`dot slide-index-${idx}`);
if (n > slides.length) {slideIndex[idx] = 1}
if (n < 1) {slideIndex[idx] = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex[idx]-1].style.display = "block";
dots[slideIndex[idx]-1].className += " active";
}

function toggleInstructionVideo() {
    instrVideoShow = !instrVideoShow;

    let instrs = document.getElementsByClassName("instructional-video")
    for (let i = 0; i < instrs.length; i++) {
       instrs[i].style.display = instrVideoShow ? "unset" : "none";
    }

    let open_button = document.getElementById("open-video")
    let close_button = document.getElementById("close-video")

    open_button.style.display = instrVideoShow ? "none" : "unset"
    close_button.style.display = instrVideoShow ? "unset" : "none"
}

const slideIndex = [1, 1, 1, 1];
let instrVideoShow = false;

$(document).ready(function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly:true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    

// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("main"), 
//     // select video element         
//     vid = document.getElementById('v0'); 
//     // var vid = $('#v0')[0]; // jquery option

    
    

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// console.log('scroll');
// }
    
// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });
    
    
//     window.requestAnimationFrame(scrollPlay);

let videos = document.getElementsByTagName("video");

// make all videos 2x
for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    if ("normal-speed" != video.className) {
        video.playbackRate = 2.0;   
    }
}

for (let index = 0; index < slideIndex.length; index++) {
    showSlides(slideIndex[index], idx=index);
}

});
