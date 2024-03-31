const categories = document.querySelectorAll(".item");

//NUMBER OF CATEGORIES: 3
console.log(categories);
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  console.log(`Category: ${category.firstElementChild.innerText}`);
  console.log(
    `Elements: ${category.firstElementChild.nextElementSibling.children.length}`
  );
}
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
