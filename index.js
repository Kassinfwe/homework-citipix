// Pseudo-Code
// 	Note: if button inside the form, 
		//the click of the button and the enter keypress will trigger form submission

// Load JS when $(document).ready;
// On form submission, ($click)
	// override default for form submission
	// get value of input
	// store that value as temp variable var city
	// Change background image depending on value of city
//End

$(document).ready(function(){

function handleCitySearch(event) {
	event.preventDefault();

	var city = $('#city-type').val();

		var austin = ['austin' || 'atx'];
    var la = ['los angeles' || 'la'];
    var sf = ['sf', 'bay area', 'san francisco'];
    var syd = ['sydney', 'syd', 'aus'];
    var nyc = ['nyc', 'new york city', 'new york'];

  //clears the input box
  $('#city-type').val('');

	if (city == sf) {
		$('body').attr('class','sf');
	}  else if (city == la) {
		$('body').attr('class','la');
	} else if (city == nyc) {
		$('body').attr('class', 'nyc');
	} else if (city == austin) {
		$('body').attr('class', 'austin');
	} else if (city == syd) {
		$('body').attr('class','sydney');
	} 
}

	$('#search').submit(handleCitySearch);
});
