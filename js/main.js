//define function to hide all divs
function hideDivs() {
	$(".hidden").hide();
}

//hide default divs when page loads
hideDivs();


//show mini headshot on click away from home
$(".nav-link").click(function() {
	$(".mini-headshot").slideDown();
	$(".headshot").slideUp();
});

//hide mini headshot on click back to home
$(".home-link").click(function() {
	$(".hidden").slideUp();
	$(".headshot").slideDown();
	$(".nav-link").removeClass("active-link");
	$(this).addClass("active-link");
});

//show press div on click
$(".press-link").click(function() {
	$(".press-div").slideDown();
	$(".photo-div").slideUp();
	$(".resume-div").slideUp();
	$(".contact-div").slideUp();
	$(".nav-link").removeClass("active-link");
	$(this).addClass("active-link");
});

//show photo div on click
$(".photos-link").click(function() {
	$(".press-div").slideUp();
	$(".photo-div").slideDown();
	$(".resume-div").slideUp();
	$(".contact-div").slideUp();
	$(".nav-link").removeClass("active-link");
	$(this).addClass("active-link");
});

//show resume div on click
$(".resume-link").click(function() {
	$(".press-div").slideUp();
	$(".photo-div").slideUp();
	$(".resume-div").slideDown();
	$(".contact-div").slideUp();
	$(".nav-link").removeClass("active-link");
	$(this).addClass("active-link");
});

//show contact div on click
$(".contact-link").click(function() {
	$(".press-div").slideUp();
	$(".photo-div").slideUp();
	$(".resume-div").slideUp();
	$(".contact-div").slideDown();
	$(".nav-link").removeClass("active-link");
	$(this).addClass("active-link");
});