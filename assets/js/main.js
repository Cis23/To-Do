const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

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

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value
  if(inputValue){
    saveTodo(inputValue);
  }
});
document.addEventListener("click",(e) => {
  const targetElement = e.target;
  const parantElement = targetElement.parentNode;

  if(targetElement.classList.contains("finish-todo")){
    parantElement.classList.toggle("done");
  }
  if(targetElement.classList.contains("remove-todo")){
    if(confirm("Deseja realmente excluir esta tarefa?")){
      parantElement.remove();
    }
  }
});