import { groupedMeals, mealEntry, meal } from "./mealTypes.js";
// @ts-ignore
import * as _ from "./lodash.js";

export const groupMealsByDate = (ungroupedMeals: mealEntry[]) => {
    const allMeals: groupedMeals = {};
    ungroupedMeals.forEach((meal) => {
        const dateOfMeal = msToDate(meal.timestamp);
        allMeals[dateOfMeal] ? allMeals[dateOfMeal].push(meal) : allMeals[dateOfMeal] = [meal];
    });
    return allMeals;
};

export const msToDate = (ms: number) => {
    const date = new Date(ms);
    return date.toLocaleString("en-us", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    })
};

export const updateMeals = (allMeals: groupedMeals, newMeal: meal, timestamp: number) => {    
    const newAllMeals = _.cloneDeep(allMeals);                    
    let dateOfMeal = msToDate(timestamp);
    newAllMeals[dateOfMeal] ? newAllMeals[dateOfMeal].push({...newMeal, timestamp}) : newAllMeals[dateOfMeal] = [{...newMeal, timestamp}];
    window.localStorage.setItem(timestamp.toString(), JSON.stringify(newMeal));   // stores meals based on timestamp
    return newAllMeals;    
}; 
 
export const getInitialMeals = (allMeals: groupedMeals) => {
    const unsortedMeals: mealEntry[] = [];
    Object.keys(localStorage).forEach((mealID) => {
        const entry = JSON.parse(localStorage.getItem(mealID)!);
        entry.timestamp = Number(mealID);
        unsortedMeals.push(entry);
    });
    unsortedMeals.sort((a, b) => b.timestamp - a.timestamp);
    return groupMealsByDate(unsortedMeals);
};
