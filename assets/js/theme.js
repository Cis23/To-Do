const body = document.querySelector("body");
const styleBody = getComputedStyle(body)
const btn = document.querySelector("#btn"); 

btn.addEventListener("click", e => {
  e.preventDefault();
  body.classList.toggle("dark")
  console.log(body.getAttribute("class"))
  if(document.querySelector(".dark")){
    btn.textContent = "Claro";
  }else{
    btn.textContent = "Escuro";
  }
},false);

window.addEventListener("load", e => {
  if(document.querySelector("body.dark")){
    // body.classList.add("dark")
    btn.textContent = "Claro";
  }else{
    // body.classList.add("light")
    btn.textContent = "Escuro";
  }
})