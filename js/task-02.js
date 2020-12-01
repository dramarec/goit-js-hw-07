const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const productsListRef = document.querySelector('#ingredients');

const createListIngredient = ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;

    return ingredientRef;
});

const titleRef = document.createElement('h2');
titleRef.textContent = `Ингредиенты`;

productsListRef.append(titleRef, ...createListIngredient);
