function formValidation(){
    clearAllErrors();
    var result = userNameValidation ();
    result = password1Validation () && result;
    result = password2Validation () && result;
    result = phoneValidation () && result;    
    result = cityValidation () && result;
    result = provinceValidation () && result;
    result = postCodeValidation () && result;
    if (result == false){
        document.getElementById("errors").innerHTML = "Submit didn't success. Please try again."
    }
    return result;
}

function  clearErrors(elemErr) {
    document.getElementById(elemErr).innerHTML = "";
    document.getElementById(elemErr).focus;
}

function clearAllErrors(){
    document.getElementById("userNameErr").innerHTML = "";
    document.getElementById("passwordErr1").innerHTML = "";
    document.getElementById("passwordErr2").innerHTML = "";
    document.getElementById("phoneErr").innerHTML = "";
    document.getElementById("cityErr").innerHTML = "";
    document.getElementById("provinceErr").innerHTML = "";
    document.getElementById("postCodeErr").innerHTML = "";
    document.getElementById("errors").innerHTML = "";
    document.getElementById("userNameID").focus;
    document.getElementById("userNameID").select;
}

function userNameValidation () {
    var pass = true;
    var  message = "";
    var elemID = "userNameID";
    var showID = "userNameErr";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();
    if (elemvalue.length == 0){
        message = "Username must be filled.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();
        pass = false;
    }
    else if (elemvalue.length < 6){
        message = "Username shoud at least 6 characters.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();
        pass = false;
    }
    else if (( elemvalue[0].toUpperCase() ) <"A" || (elemvalue[0].toUpperCase() ) >"Z"){
        message = "Username should start with a letter.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();
        pass = false;
    }
    return pass;
}

function password1Validation () {
    var pass = true;
    var message = "";
    var elemID = "password1";
    var showID = "passwordErr1";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();
    var haveInt = false;
    var haveUpper = false;
    if (elemvalue.length == 0){
        message = "Password must be filled out.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }
    else if (elemvalue.length < 8) {  
       message = "Passwords shoud at least 8 characters.";
       document.getElementById(showID).innerHTML=message;
       elem.focus();
       elem.select();  
       pass = false;
    }
    else if ( !( elemvalue[0] >=0 && elemvalue[0] <=9 ) || ( elemvalue[0].toUpperCase() >="A" && elemvalue[0].toUpperCase() <="Z" ) ) {
        message = "Passwords should start with a character." ;
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }
    else {
        for (var i=0; i < elemvalue.length; i++){
            if ( elemvalue[i] >=0 && elemvalue[i] <=9 )
                haveInt = true;
            if ( elemvalue[i].toUpperCase() >="A" && elemvalue[i].toUpperCase() <="Z" )
                haveUpper = true;
        }

        if ( ! (haveInt) ){
            message = "Passwords shoud have at least 1 digit.";
            document.getElementById(showID).innerHTML=message;
            elem.focus();
            elem.select();  
            pass = false;
        }
        else if ( ! (haveUpper) ){
            message = "Passwords shoud have at least 1 uppercase.";
            document.getElementById(showID).innerHTML=message;
            elem.focus();
            elem.select();  
            pass = false;
        }
        else {};
    }
    return pass;
} //  End of function

function password2Validation () {
    var pass = true;
    var message = "";
    var elemID = "password2";
    var showID = "passwordErr2";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();
    var elemcomp =document.getElementById("password1");
    var elemcompvalue = elemcomp.value.trim();

    if (elemvalue.length != elemcompvalue.length){
        message = "Passwords must match.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }
    else {
        for (var i=0; i < elemvalue.length; i++){
            if ( elemvalue[i] != elemcompvalue[i] ){
                message = "Passwords must match.";
                document.getElementById(showID).innerHTML=message;
                elem.focus();
                elem.select();  
                pass = false;
            }
        }
    }
    return pass;
} //  End of function


function phoneValidation() {
    var pass = true;
    var  message = "";
    var elemID = "phoneNumber";
    var showID = "phoneErr";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();

    if (elemvalue.length == 0) {
        message = "Phone number must be filled.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }

    else if (elemvalue.match(/^([0-9]{3}[-]){2}[0-9]{4}$/)){

    }
    else if (elemvalue.match(/^[0-9]{10}$/)){

    }
    else{
        message = "Phone number must 10 digite or ###-###-####.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }
    return pass;
}

function cityValidation () {
    var pass = true;
    var message = "";
    var elemID = "cityID";
    var showID = "cityErr";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();

    if (elemvalue.length == 0) {
        message = "City must be filled.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }
    else{
        for (var i=0; i < elemvalue.length; i++){
            if ( elemvalue[i].toUpperCase() <"A" || elemvalue[i].toUpperCase() >"Z" ){
                message = "City must contain letters only.";
                document.getElementById(showID).innerHTML=message;
                elem.focus();
                elem.select();
                pass = false;
            }
        }
    }
    return pass;
}  //  End of function

function provinceValidation () {
    var pass = true;
    var message = "None selected";
    var elemID = "provinceList";
    var showID = "provinceErr";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();

    if (elemvalue.length == 0){
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }

 //   if (elemvalue == -1){

 //       document.getElementById(showID).innerHTML=message;
 //       elem.focus();
 //       elem.select();  
 //       pass = false;
 //   }
    return pass;
}  //  End of function

function postCodeValidation() {
    var pass = true;
    var message = "";
    var elemID = "postCode";
    var showID = "postCodeErr";
    clearErrors(showID);
    var elem =document.getElementById(elemID);
    var elemvalue = elem.value.trim();

    if (elemvalue.length == 0) {
        message = "PostCode must be filled.";
        document.getElementById(showID).innerHTML=message;
        elem.focus();
        elem.select();  
        pass = false;
    }

    else if (elemvalue.match(/^([a-zA-z][0-9]){3}$/)){

    }
    else{
        message = "PostCode must fomate as A2A2A2.";
        document.getElementById(showID).innerHTML= message;
        elem.focus();
        elem.select();  
        pass = false;
    }
    return pass;
}