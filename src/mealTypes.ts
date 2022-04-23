export interface meal{
    calories: number;
    protein: number;
    carbohydrates: number;
    sugar: number;
    fat: number;
    [key: string]: number;
};

export interface mealEntry extends meal{
    timestamp: number;
};

export interface groupedMeals{
    [key: string]: mealEntry[];
};