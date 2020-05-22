// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
let btmMsg = document.querySelector("button");
console.log(btmMsg);
btmMsg.addEventListener("click", alertBtnFoo);
function alertBtnFoo() {
  alert(btmMsg.textContent);
}
// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета.
// Цвет менять можно через добавление класса.
btmMsg.addEventListener("mouseover", mouseoverBtnFoo);
function mouseoverBtnFoo() {
  btmMsg.style.backgroundColor = "red";
}

btmMsg.addEventListener("mouseout", mouseoutBtnFoo);
function mouseoutBtnFoo() {
  btmMsg.style.backgroundColor = "transparent";
}
//При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
document.body.onclick = (e) =>
  (document.querySelector("#tag").textContent = "Tag: " + e.target.tagName);
//При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li
//с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
let btnGenerate = document.getElementById("btn-generate");
btnGenerate.addEventListener("click", btnGen);
console.log(btnGenerate);
function btnGen() {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  var elCount = ul.childElementCount;
  li.textContent = `item ${elCount + 1}`;
  ul.insertAdjacentElement("beforeend", li);
  console.log(li);
}
