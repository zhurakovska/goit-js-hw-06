const categoriesList = document.querySelector('#categories');
const liItem = categoriesList.querySelectorAll('.item');


// Варіант 1
console.log(`Number of categories: ${liItem.length}`)

// Варіант 2
// const totalSumItems = () => {
//     let sum = 0;
//     liItem.forEach(el => { 
//         sum += 1;
//     })

//     return `Number of categories: ${sum}`
// }

// console.log(totalSumItems());

liItem.forEach(el => {
    const liTitle = el.querySelector('h2').textContent;
    const liElements = el.querySelectorAll('li').length;
    console.log(`Category: ${liTitle}`);
    console.log(`Elements: ${liElements}`);
}); 
