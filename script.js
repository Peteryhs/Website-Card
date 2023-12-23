function changeImage() {
  var image = document.getElementById('profilePic');
  var wrapper = document.getElementById('profilePicWrapper');
  wrapper.style.animation = 'glow-pfp 1s';
  console.log('Animation applied');

  setTimeout(function() {
      var newSrc = image.src.includes('Static/pfp.jpg') ? 'hovercode.svg' : 'Static/pfp.jpg';
      var tempImage = new Image();
      tempImage.src = newSrc;
      tempImage.onload = function() {
          image.src = newSrc;
          if (newSrc === 'hovercode.svg') {
              image.style.transition = 'none';
          }
      };
  }, 1000);

  setTimeout(function() {
      wrapper.style.animation = '';
      console.log('Animation removed');
  }, 1000);
}

document.getElementById('darkModeSwitch').addEventListener('change', function(event) {
if (event.target.checked) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}
});

let i = 0;
let txt = '<b>Peter'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
  document.getElementById("typing").innerText += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
} else {
  // After the typing is finished, wait for 1 second then replace the text with bolded text
  setTimeout(function() {
    document.getElementById('typing').innerHTML = '<b>Peter</b>';
    document.getElementById('typing').classList.remove('cursor');
    // Add the glow effect
    document.getElementById('typing').classList.add('glow');
  }, 500);
}
}

window.onload = typeWriter;