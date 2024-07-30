
let date = new Date();

let dayNumber = date.getDay();

let theDayIs;

let quote;

switch(dayNumber){

    case 0:
        theDayIs = "Sunday";
        quote = "Time to chillax";
        break;
    case 1:
        theDayIs = "Monday";
        quote = "Time to get back to work";
        break;
    case 2:
        theDayIs = "Tuesday";
        quote = "Time to get back to work";
        break;
    case 3:
        theDayIs = "Wednesday";
        quote = "Time to get back to work";
        break;
    case 4:
        theDayIs = "Thursday";
        quote = "Meeting";
        break;
    case 5:
         theDayIs = "Friday";
        quote = "Weekend is almost here ...";
        break;
    case 6:                
        theDayIs = "Saturday";
        quote = "Time to chill";
        break;

}

let spanOfWeekday = document.getElementById("weekday");

spanOfWeekday.innerHTML = `${theDayIs}`

let spanOfQuote = document.getElementById("quote");

spanOfQuote.innerHTML = `${quote}`