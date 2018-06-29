/********************************************************************************* 
*
* WEB222 – Assignment #4a
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: ____YC____ Student ID: __*****__ Date: ____March 30, 2018___ 
* 
********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function(){
    loadTableWithFilters();
}

function loadTableWithFilters(){
    var table = document.querySelector("#main-table-body");
    table.innerHTML = "";   // Note:cleared of all existing data
    
    for (var i=0; i<petData.length; i++){
        var ok = (filterType == "" || petData[i].type == filterType) && (petData[i].age>=filterAgeMin && petData[i].age<=filterAgeMax)
        if (ok){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var img = document.createElement("img");
            img.src = petData[i].image.src;      // Note: sets attributes to element.
            img.alt = petData[i].image.alt;
            img.height = petData[i].image.height;
            img.width = petData[i].image.width;
            td1.appendChild(img);
            tr.appendChild(td1);
            var td2 = document.createElement("td");
            var h4 = document.createElement("h4");
            var h4_text = document.createTextNode(petData[i].name);
            h4.appendChild(h4_text);
            td2.appendChild(h4);
            var p = document.createElement("p");
            p.innerHTML = petData[i].description;   // Note: contains HTML code in text, so use "innerHTML".
            td2.appendChild(p);
            var age = document.createElement("span");
            var age_text = document.createTextNode("Age: "+ petData[i].age + " years old.");
            age.appendChild(age_text);
            td2.appendChild(age);
            tr.appendChild(td2);
            table.appendChild(tr);           
        }
    }
}

function filterAllPets(){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();  
}

function filterDog(){
    filterType = "dog";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();        
}

function filterCat(){
    filterType = "cat";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();        
}

function filterBird(){
    filterType = "bird";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();        
}

function filter_zero_1(){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3(){
    filterType = "";
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus(){
    filterType = "";
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}