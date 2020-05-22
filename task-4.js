// Используя разметку из Задания 2:
// Найти в коде список ul и добавить класс “list”
let ulTask4 = document.querySelector("ul");
ulTask4.classList.add("list");
console.log(ulTask4.classList);

// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let a = document.querySelector("body > a");
a.setAttribute("id", "link");
console.log(a);

// На li через один (начиная с самого первого) установить класс “item”
let allTheLi = document.querySelectorAll("li");

console.log(allTheLi);

// На все ссылки в примере установить класс “custom-link”

let allTheLink = document.querySelectorAll("a");
allTheLink.forEach((link) => {
  link.classList.add("custom-link");
});
console.log(allTheLink);
