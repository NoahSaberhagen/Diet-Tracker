import { getInitialMeals, msToDate, updateMeals } from "./manageMeals.js";
import { groupedMeals, meal } from "./mealTypes.js";


let allMeals: groupedMeals = {};
const allMealsCalendar = [];
const entryDate = {};


const form = document.querySelector<HTMLFormElement>('.form');      // selects form
form?.addEventListener('submit', (e: SubmitEvent) => { 
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const currentMeal: meal = {
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        sugar: 0,
        fat: 0
    };    
    const mealTimeStamp = Date.now();                               // milliseconds since unix epoch
    const formElements = Array.from(target.elements);
    formElements.forEach((input, idx) => {                          // loops thru form elements        
        const formElement = input as HTMLInputElement                         
        if (idx !== formElements.length - 1){
            currentMeal[formElement.name] = Number(formElement.value)
        };
        formElement.value = idx === formElements.length - 1 ? "Submit" : "";
    });
    allMeals = updateMeals(allMeals, currentMeal, mealTimeStamp);
    console.log(allMeals);
});

allMeals = getInitialMeals(allMeals);
console.log(allMeals);
//86400000
const renderLatestMeals = () => {
    const now = Date.now();
    const lastFiveDays = [];
    for(let i = 0; i < 5; i++){
        const millisecondsDay = now - (86400000 * i);
        const date = msToDate(millisecondsDay);
        date
    };
};












