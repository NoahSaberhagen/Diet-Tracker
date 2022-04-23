const allMeals: mealEntry[] = [];

interface meal{
    calories: number;
    protein: number;
    carbohydrates: number;
    sugar: number;
    fat: number;
    [key: string]: number;
};

interface mealEntry extends meal{
    timestamp: number;
};

const allMealsCalendar = [];
const entryDate = {};

const updateMeals = (newMeal: meal, timestamp: number) => {                          
    allMeals.unshift({...newMeal, timestamp});
    window.localStorage.setItem(timestamp.toString(), JSON.stringify(newMeal));    // stores meals based on timestamp
}; 
 
const getInitialMeals = () => {
    Object.keys(localStorage).forEach((mealID) => {
        const entry = JSON.parse(localStorage.getItem(mealID)!);
        entry.timestamp = Number(mealID);
        allMeals.push(entry);
    });
    allMeals.sort((a, b) => b.timestamp - a.timestamp);
};
 
const form = document.querySelector<HTMLFormElement>('.form');                       // selects form
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
    formElements.forEach((input, idx) => { // loops thru form elements        
        const formElement = input as HTMLInputElement                         
        if (idx !== formElements.length - 1){
            currentMeal[formElement.name] = Number(formElement.value)
        };
        formElement.value = idx === formElements.length - 1 ? "Submit" : "";
    });
    updateMeals(currentMeal, mealTimeStamp);
    console.log(allMeals);
});

getInitialMeals();
console.log(allMeals);

//////////////////////////////////////////////////////////////

const msToDay = (ms: number) => {
    const date = new Date(ms);
    return date.toLocaleString("en-us", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    })
};

const groupMealsByDate = () => {
};




