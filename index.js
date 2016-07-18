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
	//prevent default behavior of form submission (new page)
	event.preventDefault();

	//get value of input and store it
	var city = ($('#city-type').val());

	//conditional statements
	if (city == 'SF' || 'San Francisco') 
	{
		$('body').css('background', 'url(../homework-citipix/images/sf.jpg');
	} 
	else if (city == 'LA' || 'Los Angeles') 
	{
		//Just to see if this would work
		$('body').css('.la');
	} 
	else if (city == 'NY' || 'New York' || 'NYC') 
	{
		$('body').css(".attr.('.nyc')");
	} 
	else if (city == 'AT' || 'Austin') 
	{
		$('body').css('background', 'url(../homework-citipix/images/austin.jpg');
	} 
}

	$('#search').submit(handleCitySearch);
});
