/*********************************************************************************
* WEB222 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* Name: _____Yue Chen_______ Student ID: ___150612166___ Date: __Jan 27, 2018____
********************************************************************************/

// clearing
console.clear();

// Task 1: Studeng Info
var stuName = "Yue Chen";
var courseNum = "WEB222SII";
var program = "CPA";
var partJob = false;
console.log("My name is " + stuName + " and I'm in " + program + " program. I'm taking " + courseNum + " course in this semester." );
var job = partJob ? "have" : "don't have";
console.log("My name is " + stuName + " and I'm in " + program + " program. I'm taking " + courseNum + " course in this semester and I " + job + " a part-time job now.");


// Task 2: Birth and graduate year
var age = prompt ("Please enter your age:");
console.log ("You were born in the year of " + (2018- Number(age)) + ".");

// Task 3: Celsius and Fahrenheit temperatures
var celTem = 37;
var fahTem = celTem*9/5+32;
console.log (celTem + " °C is " + fahTem + "°F.");

fahTem = 98.6;
celTem = (fahTem-32)*5/9;
console.log (fahTem +" °F is "+celTem+"°C.");

// Task 4: Even and odd numbers
for (var i=0; i<=10; i++){
  var result = ((i%2) == 0) ? "even" : "odd"; 
  console.log(i+ " is " +result );
}

// Task 5: Even and odd numbers
function largerNum (num1, num2){
  var larger = (num1 >= num2) ? num1 : num2;
  console.log( "The larger number of " +num1+ " and " +num2+ " is " +larger+ ".");
}
largerNum (3,5);
largerNum (8,2);

// Task 6: 
function evaluator (){
  var sum = 0;
  for (var i=0; i<arguments.length; i++){
    sum += arguments[i];
  }
  var ave = sum/arguments.length;
  if ( ave >= 50)
    return "true";
  else
    return "false";
}
var str = "Average grater than or equal to 50: ";
console.log ("45, 80, 28: " +str+ evaluator(45,80,28));
console.log ("12, 17, 9: " +str+ evaluator(12,17,9));
console.log ("108, 48, 19: " +str+ evaluator(108,48,19));

// Task 7:
var Grader = function (mark){
  switch (parseInt(mark/10)){
    case 10:
    case 9:
    case 8:
      return "A";
      break;
    case 7:
      return "B";
      break;
    case 6:
      return "C";
      break;
    case 5:
      return "D";
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      return "F";
      break;
    default:
      return "The mark is incorrect.";
      break;
  }
}
console.log("mark 89, grade is " +Grader(89));
console.log("mark 76, grade is " +Grader(76));
console.log("mark 35, grade is " +Grader(35));

// Task 8:
function showMultiples (num){
  return function(numMultiples){
    for (var i=1; i<=numMultiples; i++)
    console.log(num+ "*" +i+ "=" +(num*i));
  }
}
var str = "refer to the above output for ";
showMultiples (5)(4);
console.log(str+ "num=5, numMultiples=4");
showMultiples (2)(3);
console.log(str+ "num=2, numMultiples=3");
showMultiples (6)(5);
console.log(str+ "num=6, numMultiples=5");