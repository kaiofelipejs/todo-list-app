const textInput = document.querySelector('#input-item');
const listItem = document.querySelector('#input-list');

function addUpdateEvent(btn, element) {
  btn.addEventListener('click', () => {
    if (element.classList.contains('removed')) {
      element.classList.remove('removed')
      btn.innerHTML = '❌'
    } else {
      element.classList.add('removed')
      btn.innerHTML = '✅'
    }
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

  addUpdateEvent(btnRemove, divItem);
};