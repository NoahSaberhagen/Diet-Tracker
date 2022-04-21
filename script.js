// USER INPUT TO LOCAL STORAGE
// input variables
const calorieInput = document.getElementById('calories');
const proteinInput = document.getElementById('protein');
const carbohydrateInput = document.getElementById('carbohydrate');
const sugarInput = document.getElementById('sugar');
const fatInput = document.getElementById('fat');

// 'mealEntryNumber: currentMeal' to localStorage
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const currentMeal = {}    
    const mealTimeStamp = Date.now();
    const formElements = Array.from(e.target.elements);
    formElements.forEach((input, idx) => {
        if (idx !== formElements.length - 1){
            currentMeal[input.name] = Number(input.value)
        };
        input.value = idx === formElements.length - 1 ? "Submit" : "";
    });
    window.localStorage.setItem(mealTimeStamp, JSON.stringify(currentMeal));
});

//search meals
// for(let i = 0; i <= Object.keys(localStorage).length; i++){
    
// }