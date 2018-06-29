/*********************************************************************************
* WEB222 – Assignment 3
* Name: _____YC_______ Student ID: ___*****___ Date: __March 29, 2018____
********************************************************************************/
// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "../media/ex_audio.mp3", type: "audio/mpeg"},
        {src: "../media/ex_audio.ogg", type: "audio/ogg"}
    ]
};

window.onload=function (){
    var myaudio = document.querySelector("#myaudio");
    var aud = document.createElement("audio");
    aud.controls = audio.controls;
    aud.loop = "true";
    var source = null;
    for (var i=0; i<audio.source.length; i++){
        source = document.createElement("source");
        source.src = audio.source[i].src;
        source.type = audio.source[i].type;
        aud.appendChild(source);
    }
    myaudio.appendChild(aud);
}
