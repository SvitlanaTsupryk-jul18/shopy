(function () {
    showOtherImg();

    /// Gallery on click;

    function showOtherImg() {
        let currentImg = document.querySelector('.current-img');
        let images = document.querySelectorAll('.product__img-wrapper');
        let bgColor = '#ff5912';
        images[2].style.backgroundColor = bgColor;
        images[2].childNodes[0].style.opacity = 0.4;

        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function (e) {
                e.target.src ? currentImg.src = e.target.src : currentImg.src = e.target.childNodes[0].src;
                images.forEach(item => {
                    item.style.backgroundColor = '';
                    item.childNodes[0].style.opacity = 1;
                });
                images[i].style.backgroundColor = bgColor;
                images[i].childNodes[0].style.opacity = 0.4;

                currentImg.classList.add('fade-in');
                setTimeout(() => currentImg.classList.remove('fade-in'), 500);

            })
        }

    };
})();