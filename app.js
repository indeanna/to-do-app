function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const delButton = document.getElementById('delButton');


    function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText) {return}
      toDos.push({
          title: newToDoText.value,
          complete: false
      });
      newToDoText.value = '';
}
      renderTheUI(toDos);
    }
    function renderTheUI(toDos) {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        const delButton = document.createElement('button');
        checkbox.type = "checkbox";
        delButton.type = "button";

        newLi.textContent = toDo.title;
        delButton.textContent = "Delete";

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(delButton);

        delButton.addEventListener("click", event => {
         event.preventDefault();

    });
  });
    }

addToDoForm.addEventListener('submit', event => {
  event.preventDefault();
      createNewToDo();
});



window.onload = function() {
  onReady()
};
