const allMeals = [];
const allMealsCalendar = [];
const entryDate = {};

const updateMeals = (newMeal, timestamp) => {                          
    allMeals.unshift({...newMeal, timestamp});
    window.localStorage.setItem(timestamp, JSON.stringify(newMeal));    // stores meals based on timestamp
}; 

const getInitialMeals = () => {
    Object.keys(localStorage).forEach((mealID) => {
        const entry = JSON.parse(localStorage.getItem(mealID));
        entry.timestamp = Number(mealID);
        allMeals.push(entry);
    });
    allMeals.sort((a, b) => b.timestamp - a.timestamp);
};

const form = document.querySelector('.form');                       // selects form
form.addEventListener('submit', e => { 
    e.preventDefault();
    const currentMeal = {}    
    const mealTimeStamp = Date.now();                               // milliseconds since unix epoch
    const formElements = Array.from(e.target.elements);
    formElements.forEach((input, idx) => {                          // loops thru form elements        
        if (idx !== formElements.length - 1){
            currentMeal[input.name] = Number(input.value)
        };
        input.value = idx === formElements.length - 1 ? "Submit" : "";
    });
    updateMeals(currentMeal, mealTimeStamp);
    console.log(allMeals);
});


getInitialMeals();
console.log(allMeals);
//////////////////////////////////////////////////////////////

const sortMealsByDate = () => {
    for(let i = 0; i < allMeals.length; i++){
        const timeStampToDate = new Date(allMeals[i].timestamp);
        entryDate.fullYear = timeStampToDate.getFullYear();
        entryDate.month = timeStampToDate.getMonth();
        entryDate.date = timeStampToDate.getDate();
        
        console.log(entryDate);

    }
};

console.log(entryDate);
sortMealsByDate();


