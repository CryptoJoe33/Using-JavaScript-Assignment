/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated? 

var costDay = 0;
var clearDay = document.getElementById("#clear-button");
var numDay = document.getElementById("#weekday");
var fullDay = document.getElementById("#full");
var halfDay = document.getElementById("#half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

numDay.onclick = () => {
    numDay.classList.add("clicked");
}

/*if (numDay) {
    numDay.addEventListener("click", clickedClass);
}*/

/*function clickedClass () {
    numDay.classList.add("clicked");
}*/

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

if (clearDay){
    clearDay.addEventListener("click", clearNum);
}

function clearNum () {
    let costLabel = document.getElementById("#calculated-cost");
    numDay.classList.remove(".clicked");
    costLabel.innerHTML = 0;
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function daily () {
    if (halfDay == "clicked") {
        halfDay.classList.add(".clicked");
        fullDay.classList.remove(".clicked");
        costDay = 20;
    } else {
        fullDay.classList.add(".clicked");
        halfDay.classList.remove(".clicked");
        costDay = 35;
    }
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

