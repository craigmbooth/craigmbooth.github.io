
const welcomeState = document.getElementById('welcome-state');
const fullState = document.getElementById('full-state');
const playButton = document.getElementById('play-button');
const audio = document.getElementsByClassName('my-audio');

playButton.addEventListener('click', function() {
  welcomeState.style.display = 'none';
  fullState.style.display = 'block';
  for (player of audio) {
    player.play();
  }
  var background_audio = document.getElementById("background_audio");
  background_audio.volume = 0.5;

});

// GPT-4: write code that opens a modal when a link is clicked
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const close = document.querySelector('.close');

openModal.addEventListener('click', function() {
  modal.style.display = 'block';
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// GPT-4: Write the hex codes of six colors from a dark black/blue color palette
// #0C0F14 (a very dark blue/black color)
// #111727 (a dark blue/grey color)
// #1E262C (a dark blue/green color)
// #1C1F2A (a dark blue/purple color)
// #1E1F26 (a dark blue color)
// #262B3D (a deep blue color with a hint of purple)
const colors = ['#0C0F14', '#111727', '#1E262C', '#1C1F2A', '#1E1F26', '#262B3D'];

// GPT-4: write some javascript that fades the background of a page to a different
// color every 12 seconds
let currentBGIndex = 0;

function changeBackground() {
  currentBGIndex++;
  if (currentBGIndex === colors.length) {
    currentBGIndex = 0;
  }
  const nextColor = colors[currentBGIndex];
  document.body.style.backgroundColor = nextColor;
}

setInterval(changeBackground, 12000);


const filenames = ['images/frame1.png', 'images/frame2.png', 'images/frame3.png', 'images/frame4.png', 'images/frame5.png'];
let currentIndex = 0;

startImageTransition();

function startImageTransition() {

    // images stores list of all images of
    // class test. This is the list of images
    // that we are going to iterate
    var images = document.getElementsByClassName("test");

    // Set opacity of all images to 1
    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    // Top stores the z-index of top most image
    var top = 1;

    // cur stores the index of the image currently
    // on top images list contain images in the
    // same order they appear in HTML code
    /* The tag with class test which appears last
       will appear on top of all the images thus,
       cur is set to last index of images list*/
    var cur = images.length - 1;

    // Call changeImage function every 3 second
    // changeImage function changes the image
    setInterval(changeImage, 10000);

    // Function to transitions from one image to other
    async function changeImage() {

        // Stores index of next image
        var nextImage = (1 + cur) % images.length;

        // First set the z-index of current image to top+1
        // then set the z-index of nextImage to top
        /* Doing this make sure that the image below
           the current image is nextImage*/
        // if this is not done then during transition
        // we might see some other image appearing
        // when we change opacity of the current image
        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;

        // await is used to make sure
        // the program waits till transition()
        // is completed
        // before executing the next line of code
        await transition();

        // Now, the transition function is completed
        // thus, we can say that the opacity of the
        // current image is now 0

        // Set the z-index of current image to top
        images[cur].style.zIndex = top;

        // Set the z-index of nextImage to top+1
        images[nextImage].style.zIndex = top + 1;

        // Increment top
        top = top + 1;

        // Change opacity of current image back to 1
        // since zIndex of current is less than zIndex
        // of nextImage
        /* changing it's opacity back to 1 will not
           make the image appear again*/
        images[cur].style.opacity = 1;

        // Set cur to nextImage
        cur = nextImage;
    }

    /* This function changes the opacity of
    current image at regular intervals*/
    function transition() {
        return new Promise(function (resolve, reject) {

            // del is the value by which opacity is
            // decreased every interval
            var del = 0.003;

            // id stores ID of setInterval
            // this ID will be used later
            // to clear/stop setInterval
            // after we are done changing opacity
            var id = setInterval(changeOpacity, 10);

            // changeOpacity() decreasing opacity of
            // current image by del
            // when opacity reaches to 0, we stops/clears
            // the setInterval and resolve the function
            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }
}