function changeImage() {
    var image = document.getElementById('profilePic');
    var wrapper = document.getElementById('profilePicWrapper');
    var body = document.body;
    wrapper.style.animation = 'glow-pfp 1s';
    console.log('Animation applied');
  
    setTimeout(function() {
        var newSrc;
        if (body.classList.contains('dark-mode')) {
            // If dark mode is active, use a different image that is visible in dark mode
            newSrc = image.src.includes('Static/pfp.jpg') ? 'hovercode_dark.svg' : 'Static/pfp.jpg';
        } else {
            newSrc = image.src.includes('Static/pfp.jpg') ? 'hovercode.svg' : 'Static/pfp.jpg';
        }
        var tempImage = new Image();
        tempImage.src = newSrc;
        tempImage.onload = function() {
            image.src = newSrc;
            if (newSrc.includes('hovercode')) {
                image.style.transition = 'none';
            }
        };
    }, 1000);
  
    setTimeout(function() {
        wrapper.style.animation = '';
        console.log('Animation removed');
    }, 1750);
  }
  
  document.querySelectorAll('.icon-button').forEach(button => {
    button.addEventListener('click', function() {
        var body = document.body;
        var profilePic = document.getElementById('profilePic');
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            body.classList.add('light-icon');
            // If dark mode is active and the current image is the hovercode, use the dark mode version
            if (profilePic.src.includes('hovercode.svg')) {
                profilePic.src = 'hovercode_dark.svg';
            }
        } else {
            body.classList.remove('light-icon');
            body.classList.remove('dark-mode');
            // If dark mode is not active and the current image is the dark mode hovercode, use the original version
            if (profilePic.src.includes('hovercode_dark.svg')) {
                profilePic.src = 'hovercode.svg';
            }
        }
  
        var container = this.parentElement;
        container.classList.add('loading');
        setTimeout(function() {
            container.classList.remove('loading');
        }, 1000);
    });
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
      document.getElementById('typing').classList.add('greeting-js');
      document.getElementById('typing').classList.add('rainbow');
    }, 500);
  }
  }
  
  window.onload = typeWriter;
  
  $(document).ready(function(){
    $('#infoCarousel').carousel({
        interval: 2000 // specifies the time delay between slides in milliseconds
    });

    $('#infoCarouselMobile').carousel({
        interval: 2000 // specifies the time delay between slides in milliseconds
    });
});
  
  document.addEventListener('DOMContentLoaded', () => {
    const returnText = document.querySelector('.return-text');
  
    if (returnText) {
        returnText.addEventListener('mouseover', () => {
            returnText.style.textShadow = '0 0 15px #0059ff';
        });
  
        returnText.addEventListener('mouseout', () => {
            returnText.style.textShadow = '';
            returnText.style.transform = '';
        });
    }
  

  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const infoText = document.querySelector('#profilePicWrapper');
  
    if (infoText) {
       infoText.addEventListener('mouseover', () => {
            infoText.style.textShadow = '0 0 15px #0059ff';
            infoText.style.transform = 'scale(1.1)';
        });
  
        infoText.addEventListener('mouseout', () => {
            infoText.style.textShadow = '';
            infoText.style.transform = '';
        });
    }
  

  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const infoTextt = document.querySelector('.info-text');
  
    if (infoTextt) {
       infoTextt.addEventListener('mouseover', () => {
            infoTextt.style.textShadow = '0 0 15px #0059ff';
        });
  
        infoTextt.addEventListener('mouseout', () => {
            infoTextt.style.textShadow = '';
            infoTextt.style.transform = '';
        });
    }
  
  });
  