// Используя разметку из Задания 2:
// В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
let ul = document.querySelectorAll("li a");
ul.forEach((node) => {
  let strong = document.createElement("strong");
  node.appendChild(strong);
});
console.log(ul);

// В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
let img = document.createElement("img");
let body = document.querySelector("body");
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhSh70kr6QHOoh4VdPrcvCr1tdvoVh7wtKptlaHyQTzRpOua2p&usqp=CAU"
);
img.setAttribute("alt", "test image");
body.insertAdjacentElement("afterbegin", img);
console.log(img);

//В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

// Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector("mark");
mark.setAttribute("class", "green");
mark.insertAdjacentText("beforeend", "green");
console.log(mark);

// Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let allLi = document.querySelector("ul");
let nodeList = allLi.childNodes;
let body = document.querySelector("body");

for (var i = 0; i < nodeList.length; ++i) {
  body.insertAdjacentElement("beforeend", nodeList[i]);
}
// let newArr = Array.from(allLi);
// let reversedArr = newArr.reverse();
// allLi.forEach((el) => {
// });
// // console.log(allLi);
// console.log(reversedArr);
// //закончить

console.log(allLi);
