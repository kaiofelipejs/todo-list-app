const textInput = document.querySelector('#input-item');
const btnAdd = document.querySelector('#btn-add');
const listItem = document.querySelector('#input-list');

function addRemoveEvent(btn, element) {
  btn.addEventListener('click', () => {
    // element.remove();
    element.classList.add('removed')
    btn.innerHTML = '✅'
  });
}

function createToDoItem() {
  let divItem = document.createElement('div');
  divItem.classList.add('item')
  let spanItem = document.createElement('span');
  spanItem.innerText = textInput.value;
  divItem.appendChild(spanItem);
  listItem.appendChild(divItem);

  let btnRemove = document.createElement('button');
  btnRemove.innerHTML = '❌';
  btnRemove.classList.add('btn-remove')
  divItem.appendChild(btnRemove);

  addRemoveEvent(btnRemove, divItem);
};