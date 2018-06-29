/*********************************************************************************
* WEB222 – Assignment 3
* Name: _____YC_______ Student ID: ___*****___ Date: __March 29, 2018____
********************************************************************************/
// Data for the "HTML Images" Page

var images = [
    {caption: "Red Slate Mountain", alt: "Mountain", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg"},
    {caption: "St. Petersburg River", alt: "River", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg"},
    {caption: "Lybian Desert", alt: "Desert", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg"},
    {caption: "Azerbaijan Forest", alt: "Forest", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG"},
    {caption: "Indonesian Jungle", alt: "Jungle", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg"}
];

window.onload=function(){
    addImage();
}

function addImage (){
    var myImages = document.querySelector("#image");
    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode("Images");
    h2.appendChild(h2_text);
    myImages.appendChild(h2);

    var figure = null, img = null;
    for (var i=0; i<5; i++){
        figure = document.createElement("figure");
        img = document.createElement("img");
        img.src = images[i].url;
        img.alt = images[i].alt;
        figure.appendChild(img);
        figcaption = document.createElement("figcaption");
        figcaption_text = document.createTextNode(images[i].caption);
        figcaption.appendChild(figcaption_text);
        figure.appendChild(figcaption);
        myImages.appendChild(figure);
    }
}