/*********************************************************************************
* WEB222 – Assignment 3
* Name: _____YC_______ Student ID: ___*****___ Date: __March 29, 2018____
********************************************************************************/
// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];
var header = ["First Name", "Last Name", "Age", "Email"];

window.onload=function(){
    addTable2();
}

function addTable2(){
    var table2 = document.querySelector("#table2");

    var tb = document.createElement("table");
    tb.style.border="1px solid";
    var tr0 = document.createElement("tr");

    var th0 = null, th0_text = null;
    for (var i=0; i<header.length; i++){
        th0 = document.createElement("th");
        th0_text = document.createTextNode(header[i]);
        th0.style.border="1px solid";
        th0.appendChild(th0_text);
        tr0.appendChild(th0);
    }
    tb.appendChild(tr0);
    
    var tr = null, td = null, td_text = null;
    for (var i=0; i<users.length; i++){
        tr = document.createElement("tr");

        td = document.createElement("td");
        td.style.border="1px solid";       
        td_text = document.createTextNode(users[i].first_name);
        td.appendChild(td_text);
        tr.appendChild(td);

        td = document.createElement("td");
        td.style.border="1px solid";       
        td_text = document.createTextNode(users[i].last_name);
        td.appendChild(td_text);
        tr.appendChild(td);

        td = document.createElement("td");
        td.style.border="1px solid";       
        td_text = document.createTextNode(users[i].age);
        td.appendChild(td_text);
        tr.appendChild(td);

        td = document.createElement("td");
        td.style.border="1px solid";
        var a = document.createElement("a");
        a.href = "mailto:"+users[i].email;
        a.target = "_blank"
        var a_text = document.createTextNode(users[i].email);
        a.appendChild(a_text);
        td.appendChild(a);
        tr.appendChild(td);

        tb.appendChild(tr);
    }
    table2.appendChild(tb);
}