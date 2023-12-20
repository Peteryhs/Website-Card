window.addEventListener('scroll', function() {
    setTimeout(function() {
        document.querySelector('.center .qr-code').style.animationPlayState = 'running';
    }, 2000);
});