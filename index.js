//****************************MOBILE NAVBAR************************
const navbar = document.getElementById('mobileNav');
const bodyDiv = document.getElementsByTagName("BODY")[0];

function openNavbar() {
    navbar.style.display = 'block';
    bodyDiv.style.overflowY = 'hidden';
}

function closeNavbar() {
    navbar.style.display = 'none';
    bodyDiv.style.overflowY = 'scroll';
    console.log('closed navbar')
}

//*****************************ABOUT SECTION***********************
const slides = document.querySelectorAll('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')

let index = 0;

dots[0].style.opacity = '1'

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

const moveSlide = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

const removeDotsOpacity = () => {
    dots.forEach((dot) => {
        dot.style.opacity = '0.4';
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", (e) => {
        index = i;
        removeDotsOpacity();
        e.target.style.opacity = '1'
        moveSlide();
    })
});

prevBtn.addEventListener('click', () => {
    if (index === 0) return index;
    index--;
    removeDotsOpacity();
    dots[index].style.opacity = '1'
    moveSlide();
});

nextBtn.addEventListener('click', () => {
    if (index === slides.length - 1) return index;
    index++;
    removeDotsOpacity();
    dots[index].style.opacity = '1'
    moveSlide();
});

const autoPlaySlide = () => {
    removeDotsOpacity();
    if (index === slides.length - 1) index = -1;
    index++;
    dots[index].style.opacity = '1'
    moveSlide();
}

window.onload = () => {
    setInterval(autoPlaySlide, 3000);
    // setInterval(pAutoPlaySlide, 4000);
}

// ********************************************************PLACES*******************************************************
function displayContent(evt, placeNumber) {
    var i, placeContent, placeTabs;
    placeContent = document.getElementsByClassName("desc");
    for (i = 0; i < placeContent.length; i++) {
        placeContent[i].style.display = "none";
    }
    placeTabs = document.getElementsByClassName("tab");
    for (i = 0; i < placeTabs.length; i++) {
        placeTabs[i].className = placeTabs[i].className.replace(" active", "");
    }
    document.getElementById(placeNumber).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//*******************************************************CONTACT****************************************************** */
function sendEmail(evt) {
    swal({
        title: "Your form has been successfully submitted!",
        text: "We will reach out to you soon!",
        icon: "success",
        buttons: false,
        timer: 2000
    })
    // evt.preventDefault();
    // for (const form of document.getElementsByTagName('form')) {
    //     form.reset();
    // }
}