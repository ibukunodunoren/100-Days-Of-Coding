//get users choice of instrument
function getSelectedInstrument(){
    //prompt used
    let selectedInstrument = prompt('What instrument do you play?');
    return selectedInstrument;
}


//function to redirect user to relevant page
function goToSection(){
    //switch case used
    switch(getSelectedInstrument()){
        case "guitar":
        case "Guitar":
            goToGuitarIndex();//page for guitar songs
            break;
        
        case "piano":
        case "Piano":
        case "keyboard":
        case "Keyboard":
            goToPianoIndex();//page for piano songs
            break;

        //alert used
        default:
            alert('Sorry we dont have songs for that instrument. Try again!');
            break;
    } 
}

//guitar index page
function goToGuitarIndex(){

    location.replace("guitarindex.html");
}

//piano index page
function goToPianoIndex(){

    location.replace("pianoindex.html");
}

//return to home page index
function goToHomeIndex(){
    location.replace("index.html");
}




