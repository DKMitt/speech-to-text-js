
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


// Setup your var for the noteTextarea, instruction, notesList and noteContent.

var noteTextarea = $('#note-textarea');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

// Retreive all stored notes from previous sesssion and display on index.html
var notes = getAllNotes();
renderNotes(notes);



// Voice Recognition

// Set recognition.continuous to true. Enables users to speak with longer pauses
// between words and phrases, about 15 seconds.
recognition.continuous = true;

// Next capture the recognition by using the onresult handler to save it in a global variable
// and then display it in a text area on the index.html page 

recognition.onresult = function(event) {

	// The event is a SpeechRecognitionEvent Object.
	// The var current holds all of the lines captured so far.
	var current = result.eventIndex;

	// transcript hold the last current retreived transcript.
	var transpcript = event.results[current][0].transcript;

	// Android devices have a bug that causes things to be repeated twice.
	// By using the below code this can be resolved.

	var mobileRepeatBug = (current == 1 && transcript == event.result[0][0].transcript);

	if(!mobileRepeatBug) {
		noteContent += transcript;
		noteTextarea.val(noteContent);
	}	
};


// Setup for Voice Recognition handlers that listen for changes to the status of the recognition
recognition.onstart = function() {
	instructions.text('Voice Recognition Activated! Try speaking into the microphone.');
}

recognition.onspeechend = function() {
	instructions.text('You were quiet for to long, voice recognition disabled itself.');
}

recognition.onerror = function(event) {
	if(event.error == 'no-speech') {
		instructions.text('No speech was detected, please try again.');
	};
}


//  buttons and input

$('#start-record-btn').on('click', function(e) {
	if (noteContent.length) {
		noteContent += '';
	}
	recognition.start();
});

$('#pause-record-btn').on('click', function(e) {
	recognition.stop();
	instructions.text('Voice recognition has been paused.');
});

// sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
	noteContent = $(this).val();
});

$('#save-note-btn').on('click', function(e) {
	recognition.stop();

	if(!noteContent.length) {
		instructions.text('Could not save empty note. Please add a message to your note.');
	} else {

		// Saves note to local storage
		// The key is the dateTime with seconds, the value is the contents of the note
		saveNote(new Date().toLocaleString(), noteContent);

		// Resets the variables and updates the UI
		noteContent = '';
		renderNotes(getAllNotes());
		noteTextarea.val('');
		instructions.text('Notes saved successfully.');
	}
});

notesList.on('click', function(e) {
	e.preventDefault();
	var target = $(e.target);

	// Listen to the selected note
	if(target.hasClass('listen-note')) {
		var content = target.closest('.note').find('.content').text();
		readOutLoud(content);
	}
	// Deletes note
	if(target.hasClass('delete-note')) {
		var dateTime = target.siblings('.date').text();
		deleteNote(dateTime);
		target.closest('.note').remove();
	}
});

