// USER INPUT TO LOCAL STORAGE
// input variables
const calorieInput = document.getElementById('calories');
const proteinInput = document.getElementById('protein');
const carbohydrateInput = document.getElementById('carbohydrate');
const sugarInput = document.getElementById('sugar');
const fatInput = document.getElementById('fat');

// date variables
const date = new Date();
const today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

// 'mealEntryNumber: currentMeal' to localStorage
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let currentMeal = {
        dateOfEntry: today,
        calories: calorieInput.value,
        protein: proteinInput.value,
        carbohydrates: carbohydrateInput.value,
        sugar: sugarInput.value,
        fat: fatInput.value    
    };
    let mealEntryNumber = Object.keys(localStorage).length + 1;
    window.localStorage.setItem(JSON.stringify(mealEntryNumber), JSON.stringify(currentMeal));
    console.log(mealEntryNumber);
});
