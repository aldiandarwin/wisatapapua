let i = 0
let images = [];
const time = 1000;

images[0] = 'slide/f1.jpg'
images[1] = 'slide/f2.jpg'
images[2] = 'slide/f3.png'

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;