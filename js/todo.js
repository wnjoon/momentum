const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
let savedToDos = null;

const TODOS_KEY = "todos";

function saveToDos() {
    // localstorage에 array 형태로 저장하는 방법 : JSON.stringify
    // 읽을때는 JSON.parse 사용 
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function removeTodo(event) {
    // console.dir(event.target.parentElement.innerText); // target -> element
    // removeLi => string 이므로, id에 맞게 number로 바꿔줘야한다.
    const removeLi = event.target.parentElement;
    // console.log(removeLi.id);
    removeLi.remove();
    // toDo : localStorage에 있는 여러 todo 중 하나
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(removeLi.id));
    saveToDos();
}

function addToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;


    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", removeTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObject = {
        text:newToDo,
        id: Date.now(),
    };

    toDos.push(newToDoObject);
    addToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedArray = JSON.parse(savedToDos);
    toDos = parsedArray;
    parsedArray.forEach(addToDo);
}