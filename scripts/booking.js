/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated? 

var dayClicked = 0;
var dailyRate = 0;
var cost = 0;
let costLabel = document.getElementById('calculated-cost');
const numDay = document.querySelectorAll('#weekday');
const clearDay = document.querySelector('#clear-button');
const fullDay = document.getElementById('full');
const halfDay = document.getElementById('half');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the 'clicked' class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (const num of numDay) {
    num.addEventListener('click', function dayClick() {
        num.classList.add('clicked');
        dayClicked ++;
        if (halfDay.classList.contains('clicked')) {
            dailyRate = 20;
            cost = dayClicked * dailyRate;
            costLabel.innerHTML = cost;
        } else if (fullDay.classList.contains('clicked')) {
            dailyRate = 35;
            cost = dayClicked * dailyRate;
            costLabel.innerHTML = cost;
        }
    });
}

/********* clear days *********/
// when the clear-button is clicked, the 'clicked' class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDay.addEventListener('click', () => {

    numDay.forEach((element) => {
        element.classList.remove('clicked');
        dayClicked = 0;
        costLabel.innerHTML = dayClicked;
    });
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the 'clicked' class to the 'half' element, remove it from the 'full' element, and recalculate the total cost.

halfDay.addEventListener('click', () => {
    halfDay.classList.add('clicked');
    if (halfDay.classList.contains('clicked')){
        fullDay.classList.remove('clicked');
    }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to 'full' and removed from 'half', and the total cost is recalculated

fullDay.addEventListener('click', () => {
    fullDay.classList.add('clicked');
    if (fullDay.classList.contains('clicked')){
        halfDay.classList.remove('clicked');
    }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

fullDay.addEventListener('click', function fullCost () {
        dailyRate = 35;
        cost = dayClicked * dailyRate;
        costLabel.innerHTML = cost;
    }
);

halfDay.addEventListener('click', function halfCost () {
        dailyRate = 20;
        cost = dayClicked * dailyRate;
        costLabel.innerHTML = cost;
    }
);