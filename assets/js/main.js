const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;



const saveTodo = (text) => {
  add_element(todoList,"div","todo") ;
  const todos = Array.from(document.querySelectorAll(".todo"));
  console.log(todos);
  const todosReverse = todos.reverse();
  const todo = todosReverse[0];
  add_element(todo, "h3","", text);
  add_element(todo, "button",'finish-todo','<i class="fa-solid fa-check"></i>');
  add_element(todo, "button",'edit-todo','<i class="fa-solid fa-pen"></i>');
  add_element(todo, "button",'remove-todo','<i class="fa-solid fa-xmark"></i>');
  todoInput.value = "";
  todoInput.focus();
}


todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value
  if(inputValue){
    saveTodo(inputValue);
  }
});

document.addEventListener("click",(e) => {
  const targetElement = e.target;
  const parantEl = targetElement.parentNode;
  let todoTitle;

  if(parantEl && parantEl.querySelector("h3")){
    todoTitle = parantEl.querySelector("h3").innerText;
  }
  
  if(targetElement.classList.contains("finish-todo")){
    parantEl.classList.toggle("done");
  }
  if(targetElement.classList.contains("remove-todo")){
    if(confirm("Deseja realmente excluir esta tarefa?")){
      parantEl.remove();
    }
  }
  if(targetElement.classList.contains("edit-todo")){
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;  
  }
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  toggleForms();
},false);

editForm.addEventListener("submit",(e) => {
  e.preventDefault();

  const editInputValue = editInput.value

  if(editInputValue){
    updateTodo(editInputValue);
  }
  toggleForms();
},false);
function add_element(parentNode, tag, className = false,text = false){
  let content;
  if(text){
    content = `
      <${tag} class="${className}"> 
        ${text}
      </${tag}>
    `;
  }else{
    content = `
      <${tag} class=${className}> </${tag}>
    `;
  }
  parentNode.innerHTML += content;
}
function toggleForms(){
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
}

function updateTodo(text){
  const todos = document.querySelectorAll(".todo")

  todos.forEach(todo =>{
    let todoTitle = todo.querySelector("h3");
    if(todoTitle.innerText === oldInputValue){
      todoTitle.innerText = text
    }
  });
}