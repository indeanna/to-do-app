function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const delButton = document.getElementById('delButton');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');
    let delButton = document.createElement("button");

    // set the inputs type to checkbox
    checkbox.type = "checkbox";
    delButton.type = "button";

    // set the title
    newLi.textContent = title
    delButton.textContent = "Delete To-do"

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(delButton);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  delButton.addEventListener("click", event => {
    event.preventDefault();
    newLi.parentNode.removeChild(newLi);
  })
  });

}

window.onload = function() {
  onReady()
};
