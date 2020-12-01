const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(item =>
    console.log(
        `Категория: ${item.children[0].textContent}\nКоличество элементов: ${item.children[1].children.length}`,
    ),
);
