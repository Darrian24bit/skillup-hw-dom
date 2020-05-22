let p = document.querySelector("p");
console.log(p.textContent);

//Создать функцию, которая принимает в качестве аргумента узел DOM
//и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function domShow(node) {
  let domEl = document.querySelector(node);
  return {
    type: domEl.nodeType,
    name: domEl.nodeName,
    haveChildren: domEl.childNodes,
  };
}
console.log(domShow("div"));

//Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
let arr = [];
let ulList = document.querySelectorAll("li");
for (let i = 0; i < ulList.length; i++) {
  arr.push(ulList[i].textContent);
}
console.log(arr); //(4) ["Link1", "Link2", "Link3", "Link4"]

// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться).
// Конечный результат: -text-reprehendunt-text-nemore-text-
//p.textContent = "-text-";

p.childNodes.forEach((node) => {
  if (node.nodeName == "#text") {
    node.textContent = "-text-";
  }
});
