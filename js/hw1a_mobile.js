/*
	HW 1a CNIT 133m 
	student: CNIT 133m Irina Golovko
	date: 09/06/2019 
	Desc: It's an external hw1a_mobile.js file
		  for hw1a_mobile.html ("Homework 1A")
*/

/*
	Use promise() and done() for animation for 
	different elements one after each other in queue
	without it we can get:
	- for the same element execution in queue; 
	- for different elements - execution simultaneously.
	Use css() for changing colors, for using animate() - 
	we need to download color JQuery plugin 
*/

$(document).ready(function () {

	//bigger font for h1, change color to blue; 
	// return previous font-size and color;
	// add black border to photo image 
	$("#b1").click(function(){
		var h1 = $("h1");
		h1.animate({fontSize: "3.5em"}, 2000, function() {
			$(this).css({"color": "blue"})
		});
		h1.animate({fontSize: "2em"}, 2000, function() {
			$(this).css({"color": "#800000"});			
		}).promise().done(function() {
	    $("#left").animate({"borderWidth": "3px"}, 1000);
		});					
	});
});  