///////////SELECTEUR
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


///////////ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



///////////FONCTIONS
function addTodo(event) {
    event.preventDefault(); //Pour arretter le rechargement automatique de la page
    //console.log("hello");
    
    //todo DIV
    const todoDiv = document.createElement("div"); //pour creer un element dans le HTML
    todoDiv.classList.add("todo"); //classList pour ajouter une class à notre div

    //creer le li
    const newTodo = document.createElement("li");

    newTodo.innerText = "hey";

    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //button check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //button supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;

    //DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall"); //ajout de classe pour l'animation css
        // item.remove();
        // todo.remove();
        todo.addEventListener("transitioned", function(){
            todo.remove();
        });
    }
//check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}