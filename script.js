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
    window.localStorage.setItem(mealTimeStamp, JSON.stringify(currentMeal));    // stores meals based on timestamp
});
