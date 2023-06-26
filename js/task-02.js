const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = (ingredients) => {
  const ulListEl = document.querySelector('#ingredients')
  
  const liItems = ingredients.map((el) => {
    const liItemEl = document.createElement('li');
    liItemEl.classList.add('item');
    liItemEl.textContent = el;
    return liItemEl;
  });

  ulListEl.append(...liItems);
  console.log(ulListEl); 
}

ingredientsList(ingredients);