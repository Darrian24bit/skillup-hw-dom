//Зная структуру html, с помощью изученных методов получить (в консоль):
//head
let head = document.querySelector("head");
console.log(head);
//body
let body = document.querySelector("body");
console.log(body);
//все дочерние элементы body и вывести их вконсоль.
console.log(body.children);
//первый div и все его дочерние узлы
let div1 = document.querySelector("div");
console.log(div1);
//вывести все дочерние узлы в консоль
console.log(div1.children);
//вывести в консоль все дочерние узлы, кроме первого и последнего
if (div1.children) {
  const children = div1.children;

  for (let i = 1; i < children.length - 1; ++i) {
    console.log(children[i]);
  }
}
