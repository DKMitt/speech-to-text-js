
// Setup Speech Recognition API and check if user has access to API
// if errror display eror message

try {
	var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
}
catch(e); {
	console.error(e);
	$('.no-browser-support').show();
	$('.app').hide();
}

