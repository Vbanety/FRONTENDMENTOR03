var btn_share = document.querySelector('.btn_open');

var btn_share_close = document.querySelector(".btn_close");

var openShare = document.querySelector('.share-active')

btn_share.addEventListener('click', function () {
    openShare.classList.add('open-share');
});

btn_share_close.addEventListener('click', function() {
    openShare.classList.remove('open-share');
});