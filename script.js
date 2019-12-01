const textInput = document.querySelector('#input-item');
const listItem = document.querySelector('#input-list');
const notDoneIcon = '⬜';
const doneIcon = '✅';

function addUpdateEvent(btn, element) {
  btn.addEventListener('click', () => {
    if (element.classList.contains('removed')) {
      element.classList.remove('removed');
      btn.innerHTML = notDoneIcon;
    } else {
      element.classList.add('removed');
      btn.innerHTML = doneIcon;
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
  let spanItem = createSpanElement();
  let btnRemove = createButtonElement();

  divItem.classList.add('item');
  spanItem.innerText = textInput.value;
  btnRemove.innerHTML = notDoneIcon;
  btnRemove.classList.add('btn-remove');

  divItem.appendChild(spanItem);
  divItem.appendChild(btnRemove);
  listItem.appendChild(divItem);

  addUpdateEvent(btnRemove, divItem);
};