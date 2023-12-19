window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var qrCode = document.querySelector('.qr-code');
    var revealPosition = qrCode.offsetTop - window.innerHeight;
    if (scrollPosition >= revealPosition) {
        qrCode.style.opacity = 1;
    } else {
        qrCode.style.opacity = 0;
    }
});