function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const delButton = document.getElementById('delButton');
  toDos.index = 0;
  console.log("onready func");

    function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText) {return}
      toDos.index++;
      toDos.push({
          title: newToDoText.value,
          complete: false


      });          console.log("index");

      newToDoText.value = '';
      renderTheUI(toDos);
      console.log("new todos");

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
         toDos.splice(toDos.index, 1);
         console.log(toDos.index);
    });
});
}
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    console.log("submit event");
})

console.log("render UI");
}
window.onload = function() {
  onReady()
};
