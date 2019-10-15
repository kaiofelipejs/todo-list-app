const textInput = document.querySelector('#input-item');
const listItem = document.querySelector('#input-list');

function addUpdateEvent(btn, element) {
  btn.addEventListener('click', () => {
    if (element.classList.contains('removed')) {
      element.classList.remove('removed');
      btn.innerHTML = '❌';
    } else {
      element.classList.add('removed');
      btn.innerHTML = '✅';
    }
  });
}

function createDivElement() {
  return document.createElement('div');
}

function createSpanElement() {
  return document.createElement('span');
}

function createButtonElement() {
  return document.createElement('button');
}

function createToDoItem() {
  let divItem = createDivElement();
  divItem.classList.add('item');

  let spanItem = createSpanElement();
  spanItem.innerText = textInput.value;
  divItem.appendChild(spanItem);

  listItem.appendChild(divItem);

  let btnRemove = createButtonElement();
  btnRemove.innerHTML = '❌';
  btnRemove.classList.add('btn-remove');
  divItem.appendChild(btnRemove);

  addUpdateEvent(btnRemove, divItem);
};