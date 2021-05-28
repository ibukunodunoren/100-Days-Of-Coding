/*
Problem:
    Its difficult to find appropriate songs to use to learn a 
    specific song at different levels 


Solution:
    A webpage that directs you the appropriate page for your choice of
    instrument. In that page you can then select what level of songs you 
    want to learn. Afterwards you can search pick a song based on the style you want
    in the database of songs which have been transcribed


Step 1: Create a page where the user can input their chosen instrument 
        and be directed to its page
Step 2: Create multiple pages of instruments where the user can select 
        the level of songs they want to learn
Step 3: Create a database of songs for all the instruments and sort them
Step 4: Ensure the database can be filtered according the difficuly and style
        where the user can manipulate them.





*/


//get users choice of instrument
function getSelectedInstrument(){
    //prompt used
    let selectedInstrument = prompt('What instrument do you play?');
    return selectedInstrument;
}


//redirect user to relevant page
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




