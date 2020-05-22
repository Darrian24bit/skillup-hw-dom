// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
function isParent(parent, child) {
  if (parent.contains(child)) {
    return true;
  }
}

console.log(
  isParent(document.body.children[0], document.querySelector("mark"))
);

console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

let link = document.querySelectorAll("body a");

console.log([...link].filter((link) => !link.closest("ul")));

const ul = document.querySelector("ul");
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
