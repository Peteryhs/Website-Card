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
    }, 2000);
}

document.getElementById('darkModeSwitch').addEventListener('change', function(event) {
  if (event.target.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});