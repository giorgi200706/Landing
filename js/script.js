var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});

let section2Slider = tns({
	container : ".section2-my-slider",
	"slideBy" : 1,
	"speed"   : 400,
	"nav"     : false,
	controlsContainer: "#controls",
	prevButton : ".previous",
	nextButton : ".next",
	items : 3,
	gutter : 20,
})

function section4CardLearnMore(num) {
  var dots = document.querySelectorAll("[id='dots']")[num];
  var moreText = document.querySelectorAll("[id='more']")[num];
  var btnText = document.querySelectorAll("[id='myBtn']")[num];
  var card = document.querySelectorAll("[id='section4-card']")[num];

  console.log(dots, moreText, btnText, card);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    card.style.height = "445px";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    card.style.height = "680px";
  }
}