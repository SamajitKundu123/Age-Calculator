

function calculateAge(){

    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateParts = birthdateInput.split("-");
    const birthDay = birthdateParts[2];
    const birthMonth = birthdateParts[1] - 1;  // Cause in js the index start from 0 to 11
    const birthYear = birthdateParts[0];
    const birthDate = new Date(birthYear, birthMonth, birthDay);


    console.log(birthdateInput); //use to show the data on console 
    console.log(birthdateParts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const ageInMiliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMiliseconds/1000);
    const ageInMin = Math.floor(ageInSeconds/60);
    const ageInHour = Math.floor(ageInMin/60);
    const ageInDays = Math.floor(ageInHour/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonth = Math.floor(ageInDays/30.436875);
    const ageInYear = Math.floor(ageInDays/365.25);



    const resultContainer = document.getElementById("resultContaine");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
        <h3>Age:<h3>
        <p>${ageInYear} Years ${ageInMonth % 12} months ${ageInDays % 30} days <p>
        </div>
        <div class="result-item">
        <h3>Months Passed:<h3>
        <p>${ageInMonth}<p>
        </div>
        <div class="result-item">
        <h3>Week Passed:<h3>
        <p>${ageInWeeks}<p>
        </div>
        <div class="result-item">
        <h3>Days Passed:<h3>
        <p>${ageInDays}<p>
        </div>
        <div class="result-item">
        <h3>Hours Passed:<h3>
        <p>${ageInHour}<p>
        </div>
        <div class="result-item">
        <h3>Minutes Passed:<h3>
        <p>${ageInMin}<p>
        </div>
        <div class="result-item">
        <h3>Seconds Passed:<h3>
        <p>${ageInSeconds}<p>
        </div>
    `;

    resultContainer.style.display = "block";


}

const ageCalculatorFrom = document.getElementById("agecalculator");
ageCalculatorFrom.addEventListener("submit", (event)=>{
    event.preventDefault();
    calculateAge();

});