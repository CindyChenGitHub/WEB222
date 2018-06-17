// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "../media/ex_video.ogg", type: "video/mp4"},
        {src: "../media/ex_video.ogg", type: "video/ogg"}
            ]
};

window.onload=function (){
    var myvideo = document.querySelector("#myvideo");
    var vid = document.createElement("video");
    vid.controls = video.controls;
    vid.width = video.width;
    vid.height = video.height;
    var source = null;
    for (var i=0; i<video.source.length; i++){
        source = document.createElement("source");
        source.src = video.source[i].src;
        source.type = video.source[i].type;
        vid.appendChild(source);
    }
    myvideo.appendChild(vid);
}