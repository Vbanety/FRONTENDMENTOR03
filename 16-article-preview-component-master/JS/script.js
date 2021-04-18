// FOR MOBILE
var btnShare = document.querySelector('.btn_open');
var btnShareClose = document.querySelector(".btn_close");
var openShare = document.querySelector('.share-active');
var openArrow = document.querySelector('.share_arrow');


btnShare.addEventListener('click', function () {
    if(document.querySelector('.share-active').style.visibility == 'hidden') {
        document.querySelector('.share-active').style.visibility = 'visible';
        document.querySelector('.share-active').style.opacity = '1';
        document.querySelector('.share-active').style.transition = 'visibility 0s, opacity 0.6s';
        document.querySelector('.icon-share').style.backgroundColor = 'var(--VeryDarkGrayishBlue)';
        document.querySelector('.icon-share').style.backgroundImage = 'url(/images/icon-share-white.svg)';

        document.querySelector('.share_arrow').style.visibility = 'visible';
        document.querySelector('.share_arrow').style.opacity = '1';
        document.querySelector('.share_arrow').style.transition = 'visibility 0s, opacity 0.4s';
    } else {
        document.querySelector('.share-active').style.visibility = 'hidden';
        document.querySelector('.share_arrow').style.visibility = 'hidden';
        document.querySelector('.share-active').style.opacity = '0';
        document.querySelector('.share_arrow').style.opacity = '0';
        document.querySelector('.icon-share').style.backgroundColor = 'rgba(0, 0, 0, .07)';
        document.querySelector('.icon-share').style.backgroundImage = 'url(/images/icon-share.svg)';
    }
});

btnShareClose.addEventListener('click', function() {
    if(document.querySelector('.share-active').style.visibility == 'visible') {
        document.querySelector('.share-active').style.visibility = 'hidden';        
        document.querySelector('.share-active').style.transition = 'visibility 0s, opacity 0.6s';
    }
});

