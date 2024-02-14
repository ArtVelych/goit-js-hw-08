// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categories = document.querySelectorAll('li.item');

const categoriesTotal = list => {
    const array = Array.from(list);

    let total = 0;

    array.forEach(item => {
    total += 1;
    })
    
    console.log(`Number of categories: ${total}`);
}

categoriesTotal(categories);

// ==========================================================

const category1Elems = document.querySelectorAll('li.item:nth-child(1) li');
const category1Title = document.querySelector('li.item:nth-child(1) h2');

const category2Elems = document.querySelectorAll('li.item:nth-child(2) li');
const category2Title = document.querySelector('li.item:nth-child(2) h2');

const category3Elems = document.querySelectorAll('li.item:nth-child(3) li');
const category3Title = document.querySelector('li.item:nth-child(3) h2');

const categoryInfo = (items, title) => {
    const array = Array.from(items);

    let total = 0;

    array.forEach(item => {
    total += 1;
    })

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${total}`);
}

categoryInfo(category1Elems, category1Title);
categoryInfo(category2Elems, category2Title);
categoryInfo(category3Elems, category3Title);