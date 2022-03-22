const calorieInput = document.querySelector('#calories');
const submitCalories = document.querySelector('#start');

// arrow function
const abc = () => {

}

function xyz() {

}

const oldData = window.localStorage.getItem('test');
console.log(typeof oldData);
const parsedData = JSON.parse(oldData);
console.log(typeof parsedData);

const dataDisplay = document.createElement('h1')
dataDisplay.innerHTML = `Calories: ${parsedData.calories}`

localStorage.clear()

document.body.appendChild(dataDisplay);

// Can't reassign const function
// abc = "abc"
// abc();

submitCalories.addEventListener('click', () => {
    const dailyCalories = calorieInput.value;

    const dailyData = {
        calories: dailyCalories
    }
    // Look into Date objects
    const today = Date.now().toString();

    window.localStorage.setItem('test', JSON.stringify(dailyData));

})