/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated? 

var costDay = 0;
var dayClicked = 0;
var fullDay = document.getElementById("#full");
var halfDay = document.getElementById("#half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const numDay = document.querySelectorAll("#weekday");

for (const num of numDay) {
        num.addEventListener('click', function dayClick() {
        num.classList.add('clicked');
        dayClicked ++;
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearDay = document.querySelector("#clear-button");

clearDay.addEventListener('click', () => {
    const elements = document.querySelectorAll('#weekday');

    elements.forEach((element) => {
        element.classList.remove('clicked');
  });
});

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

