function onready() {
  const addToDoForm = document.getElementByID('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', () =>){
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    // set the inputs type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);
  });

}

window.onload = function() {
  onready();
};
