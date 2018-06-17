// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload=function(){
    addFuits();
    addDirectory();
}

function addFuits(){
    var myFruits = document.querySelector("#list1");
    var ol = document.createElement("ol");
    var li = null, li_text = null;
    for (var i=0; i<fruits.length; i++){
        li = document.createElement("li");
        li_text = document.createTextNode(fruits[i]);
        li.appendChild(li_text);
        ol.appendChild(li);
    }
    myFruits.appendChild(ol);
}

function addDirectory(){
    var myDir = document.querySelector("#list2");
    var ul_o = document.createElement("ul");
    var li_o = null; li_text_o = null;
    for (var i=0; i<directory.length; i++){
        li_o = document.createElement("li");
        li_text_o = document.createTextNode(directory[i].name);
        li_o.appendChild(li_text_o);
        if (directory[i].type == "directory"){          
            var ul_i = document.createElement("ul");
            var li_i = null, li_text_i = null;
            for (var j=0; j<(directory[i].files).length; j++){
                li_i = document.createElement("li");
                li_text_i =document.createTextNode(directory[i].files[j].name);
                li_i.appendChild(li_text_i);
                ul_i.appendChild(li_i);
            }
            li_o.appendChild(ul_i);
        }
        ul_o.appendChild(li_o);
    }
    myDir.appendChild(ul_o);
}
