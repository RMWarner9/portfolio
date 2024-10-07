/* Script file for the portfolio. This script handles the two javascript functions needed for the portfolio.
The functions to control the slide show and the function to change the background*/

// slideIndex global var for reference
let slideIndex = 1;
//showSlides function handles setting the display for all of the slides
function showSlides(n) {
  	let slides = document.getElementsByClassName("slide");
  	if (n > slides.length) {slideIndex = 1}
  	if (n < 1) {slideIndex = slides.length}
  	for (let i = 0; i < slides.length; i++) {
  		slides[i].style.display = "none";
  	}
  	slides[slideIndex-1].style.display = "block";
}


//plusSlides called by the arrow buttons to change the slide
function plusSlides(n) {
 	showSlides(slideIndex += n);
}

//openSlides() displays the container holding the slides
function openSlides() {
 	document.getElementsByClassName("slides-container")[0].style.display = "block";
  	showSlides(slideIndex);
}

//closeSlides() hides the container holding the slides
function closeSlides() {
 	document.getElementsByClassName("slides-container")[0].style.display = "none";
}

//change background toggles which background setting the portfolio should use.
function changeBackground(){
	const body = document.body;
	if(body.style.backgroundColor === 'black') {
		body.style.backgroundColor = '';
		body.style.backgroundImage = 'url("https://i.giphy.com/3o7aDcrsww5Ybp18hq.webp")';
	} else{
		body.style.backgroundColor = 'black';
		body.style.backgroundImage = 'none';
	}
}

function openPDF() {
            const pdfPath = 'pwt.pdf';
            window.open(pdfPath, '_blank'); // Open in a new window or tab
}