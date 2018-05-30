## Voice Note App
### Converting from Speech to Text with JavaScript

The purpose of this app is to experiment with the Web Speech API by using the browser interface which allows you to record human speech and convert it into text and be able to play it back using SpeechSynthesis interface with a human like speech. 

This app uses the Web Speech API to build a voice powered note app to do 3 things:

 - Takes notes by using voice-to-text or keyboard input.
 - Save voice notes to localStorage.
 - Display all of the saved notes and give the option to either listen or delete them.

![Voice Note App](blob/master/public/assets/img/vna-1.gif)


__Project Status - Completed: 05/28/2018__

[Demo - Click Here](https://www.dkmitt.com/mycoding/voice-note-app/index.html) 

----

### Table of Contents

  -  Description
  -  What I Learned From The Exercise
  -  Website Technologies Used
  -  How to View This App
  -  File and Directory Structure
  -  Revision History

----


### Description

The Web Speech API will be separated into two seperate interfaces. The first will be the SpeechRecognition for understanding a human voice and turning it into text. The second will be the SpeechSynthesis for reading strings of text out loud in a computer generated voice.


----


### What I Learned From The Exercise
- To work with the Web Speech API.


----


### Website Technologies Used

Description of website technologies used to develop this app.

- HTML
- CSS
- JavaScript
- Bootstrap
- Web Speech API

----


### How to Use This App

### To Add A New Voice or Text Note
1. ​Click on the Start Recognition Button and give the app permission to use your microphone, and start speaking your note (if no microphone or you don't want to use the microphone you can type into the text box.)

2. ​When done speaking click on the "Pause Recognition" button, and then click the "Save Note" button. (if you you typed your note in to the text box you do not need to click on the "Pause Recognition" button, just click the "Save Note" button.) 

### To Play Back or Listen To The Notes
1. Click on the "Listen to Note" link next to the date of the note that you want to play back or listen to.

### To Delete Voice Notes
1. Click on the "Delete" link next to the date of the note that you want to delete.



  [Demo - Click Here](https://www.dkmitt.com/mycoding/voice-note-app/index.html) 

### File and Directory Structure

```
.
├── assets
│   │
│   ├── css
│   │   │
│   │   └── style.css
│   │
│   ├── ico
│   │   │
│   │   └── favicon.ico
│   │
│   ├── img
│   │   │
│   │   ├── code-mic-150.png
│   │   │
│   │   └── vna-1.gif
│   │
│   └── js
│       │
│       └── script.js
│ 
├── .gitignore
│
├── index.html
│
└── README.md     
       
```

----


### Revision History 

Description of revisions - __Completed: 05/28/2018__

  - [x] Dev - file and directory structure updated - 05/30/2018
  - [x] Dev - starting code - 04/06/2018
  - [x] Dev - styling update - 05/30/2018
  - [x] Dev - completed code - 05/30/2018
  - [x] Dev - readme update - 05/30/2018