const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`There are ${categoryItems.length} categories in the list.`);

categoryItems.forEach(item => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Number of elements: ${elementsCount}`);
});



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Greens',
  'Seasonings',
];

const ingredientsList = document.querySelector("#ingredients");

const items = ingredients.map(ingredient => {
    const itemHtml = `<li>${ingredient}</li>`;
//   const listElement = document.createElement(`<li></li>`);
//   listElement.textContent = ingredient;
//   return listElement;
return itemHtml;
});

console.log(items);
const itemsString = items.join("");
console.log(itemsString);
ingredientsList.innerHTML = itemsString;

// items.forEach(item => ingredientsList.appendChild(item));




