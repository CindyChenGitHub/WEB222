// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};


window.onload=function(){
    addAudio();
}

function addAudio(){
    var myaudio = document.querySelector("#myaudio");
    var aud = document.createElement("h2");
    var aud_text = document.createTextNode("tyr");
    aud.appendChild(aud_text);

    /*var aud = document.createElement("audio");
    aud.controls = audio.controls;
    var source = null;
   /* for (var i=0; i<audio.source.length; i++){
        source = document.createElement("source");
        source.src = audio.source[i].src;
        source.type = audio.source[i].type;
        aud.appendChild(source);
    }*/
    myaudio.appendChild(aud);
}