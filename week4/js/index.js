$(document).ready( function () {

	event.preventDefault();
	
	console.log( "ready was called");

	$('.readlesshide').hide();

	$('.readmore').click( function() {
		console.log( "readmore was called");
		$('#show-this-on-click').show();
		$('.readlesshide').show();
		$('.readmore').hide();
	});


	$('.readlesshide').click(function () {
		// log for testing/debugging
		console.log( "readlesshide was called");
		$('#show-this-on-click').hide();
		$('.readlesshide').hide();
		$('.readmore').show();
	});

	$('.learnmore').click(function () {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	});


});

