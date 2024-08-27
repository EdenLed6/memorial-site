// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for gallery images
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

document.querySelectorAll('#gallery .gallery img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

var images = [
    './image/gallery/img84.jpeg',
    './image/gallery/img83.jpeg',
    './image/gallery/img82.jpeg',
    './image/gallery/img81.jpeg',
    './image/gallery/img80.jpeg',
    './image/gallery/img79.jpeg',
    './image/gallery/img78.jpeg',
    './image/gallery/img88.jpeg',
    './image/gallery/img68.jpeg',
    './image/gallery/img69.jpeg',
    './image/gallery/img70.jpeg',
    './image/gallery/img71.jpeg',
    './image/gallery/img72.jpeg',
    './image/gallery/img73.jpg',
    './image/gallery/img74.jpeg',
    './image/gallery/img75.jpeg',
    './image/gallery/img76.jpeg',
    './image/gallery/img77.jpeg',
    './image/gallery/img89.jpeg',
    './image/gallery/img52.jpeg',
    './image/gallery/img54.JPEG',
    './image/gallery/img53.JPEG',
    './image/gallery/img1.JPG',
    './image/gallery/img2.JPG',
    './image/gallery/img3.JPG',
    './image/gallery/img4.JPG',
    './image/gallery/img5.JPG',
    './image/gallery/img6.JPG',
    './image/gallery/img7.JPG',
    './image/gallery/img90.jpeg',
    './image/gallery/img8.JPG',
    './image/gallery/img51.jpeg',
    './image/gallery/img66.jpeg',
    './image/gallery/img67.jpeg',
    './image/gallery/img50.jpg',
    './image/gallery/img61.jpeg',
    './image/gallery/img62.jpeg',
    './image/gallery/img63.jpeg',
    './image/gallery/img64.jpeg',
    './image/gallery/img65.jpeg',
    './image/gallery/img91.jpeg',
    './image/gallery/img49.jpg',
    './image/gallery/img48.jpg',
    './image/gallery/img60.jpeg',
    './image/gallery/img59.jpeg',
    './image/gallery/img58.jpeg',
    './image/gallery/img30.jpg',
    './image/gallery/img31.jpg',
    './image/gallery/img32.jpg',
    './image/gallery/img33.jpg',
    './image/gallery/img34.jpg',
    './image/gallery/img35.jpg',
    './image/gallery/img36.jpg',
    './image/gallery/img37.jpg',
    './image/gallery/img38.jpg',
    './image/gallery/img39.jpg',
    './image/gallery/img40.jpg',
    './image/gallery/img41.jpg',
    './image/gallery/img42.jpg',
    './image/gallery/img43.jpg',
    './image/gallery/img44.jpg',
    './image/gallery/img45.jpg',
    './image/gallery/img46.jpg',
    './image/gallery/img47.jpg',
    './image/gallery/img9.JPG',
    './image/gallery/img10.JPG',
    './image/gallery/img11.JPG',
    './image/gallery/img12.JPG',
    './image/gallery/img13.JPG',
    './image/gallery/img14.JPG',
    './image/gallery/img15.JPG',
    './image/gallery/img16.JPG',
    './image/gallery/img17.JPG',
    './image/gallery/img18.JPG',
    './image/gallery/img19.JPG',
    './image/gallery/img20.JPG',
    './image/gallery/img21.JPG',
    './image/gallery/img22.jpg',
    './image/gallery/img23.JPG',
    './image/gallery/img24.JPG',
    './image/gallery/img25.JPG',
    './image/gallery/img26.JPG',
    './image/gallery/img27.JPG',
    './image/gallery/img28.JPG',
    './image/gallery/img29.jpg',
    './image/gallery/img56.jpg',
    './image/gallery/img57.jpg'
];

var gallery = document.querySelector('.gallery');
var loadMoreButton = document.getElementById('loadMore');
var currentIndex = 6; // הוספנו כבר 6 תמונות מההתחלה
var imagesPerClick = 6; // כמות התמונות להוסיף בכל לחיצה

loadMoreButton.onclick = function() {
    var newImages = images.slice(currentIndex, currentIndex + imagesPerClick);
    newImages.forEach(function(src, index) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = "image description " + (currentIndex + index + 1);
        img.className = 'gallery-img'; // הוספת המחלקה הנכונה
        gallery.appendChild(img);

        // הוספת אירוע לחיצה על המודאל
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    });

    currentIndex += imagesPerClick;

    // הסר את הכפתור אם אין יותר תמונות לטעון
    if (currentIndex >= images.length) {
        loadMoreButton.style.display = 'none';
    }
};

// קוד לפתיחת תמונה במודאל
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});




// כאשר לוחצים על ה-X, המודאל נסגר
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// בוחרת את 6 התמונות הראשונות לאחר השאפל
function loadShuffledImages() {
    var shuffledImages = shuffle(images.slice()).slice(0, 6);
    var gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // מרוקנת את הגלריה מהתמונות הקודמות

    shuffledImages.forEach(function(src) {
        var img = document.createElement('img');
        img.src = src;
        img.alt = "image description";
        img.className = 'gallery-img';
        gallery.appendChild(img);

        // הוספת אירוע לחיצה על המודאל
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    });
}

// כאשר הדף נטען, הפונקציה רצה ומעמיסה את התמונות
window.onload = loadShuffledImages;
