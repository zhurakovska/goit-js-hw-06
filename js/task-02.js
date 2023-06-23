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
  
  ingredients.map((el) =>{
    const liItemEl = document.createElement('li');
    liItemEl.classList.add('item')
    liItemEl.textContent = el
    ulListEl.append(liItemEl);
  })
  console.log(ulListEl); 
}

ingredientsList(ingredients);