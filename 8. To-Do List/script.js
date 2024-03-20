const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTask");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click" , () => {

    const newTask = newTaskInput.value;

    if(newTask !== "") {
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTask;

        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "x";

        deleteTodoBtn.classList.add("removeTaskBtn");
        deleteTodoBtn.addEventListener("click" , () =>{
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newTaskInput.value = "";
    }

});