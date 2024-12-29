let userInput = document.getElementById("date");
let ageResult = document.querySelector(".ageResult");

function calculateDateDifference(date1, date2 = new Date()) {
// Ensure date1 is always the earlier date
if (date1 > date2) [date1, date2] = [date2, date1];

// Calculate years, months, and days difference
function calculateDifference() 
{
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();

    // Adjust days if negative
    if (days < 0) {
        months -= 1; // Borrow one month
        let previousMonth = new Date(date2.getFullYear(), date2.getMonth(), 0); // Days in the previous month
        days += previousMonth.getDate();
    }

    // Adjust months if negative
    if (months < 0) {
        years -= 1; // Borrow one year
        months += 12;
    }

    return { years, months, days };
}

// Calculate total number of days
function calculateTotalDays() {
    let totalDays = 0;
    let currentDate = new Date(date1);

    // Increment day by day until we reach the day before date2
    while (currentDate < date2) {
        totalDays += 1;
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return totalDays;
}

// Combine results
const { years, months, days } = calculateDifference();
const totalDays = calculateTotalDays();

return { years, months, days, totalDays };
}

function result(){
    let date1 = new Date('1987-12-16');
    let todayDate = new Date();
    let userDate = new Date(userInput.value);
    let outcome = calculateDateDifference( new Date(userDate), todayDate);

    if(outcome.years < 1){
        ageResult.innerHTML =  "You are still an infant!";
    }else if (outcome.years == 1){
        ageResult.innerHTML = `You are ${outcome.years} year old!`
    }else{
        ageResult.innerHTML = `You are ${outcome.years} years old!`;
    }
    
}   