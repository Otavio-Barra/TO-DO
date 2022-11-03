function creatCheck() {
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "task");
  check.addEventListener("click", checkElement, false);
  check.style.cursor = "pointer";
  return check;
}

function checkElement(e) {
  e.target.setAttribute("checked", "");
  if (e.target.checked) {
    e.target.parentNode.classList.add("textCheck");
  } else {
    e.target.parentNode.classList.remove("textCheck");
  }
}

function creatP() {
  let taskValue = document.getElementById("task").value;
  if (taskValue != "") {
    let text = document.createElement("p");
    text.setAttribute("class", "text");
    text.innerText = taskValue;
    return text;
  } else {
    alert("digite uma tarefa");
    console.error("valor invalido");
  }
}

function creatTrash() {
  let trash = document.createElement("i");
  trash.innerHTML = `<i class='fa-solid fa-trash'></i>`;
  trash.addEventListener("click", trashRemoveElement, false);
  trash.style.cursor = "pointer";
  return trash;
}
function trashRemoveElement(e) {
  e.target.parentNode.parentNode.remove();
}

function creatList() {
  let task = document.createElement("li");
  task.classList.add("taskList");
  task.setAttribute("id", "listRemove");
  task.appendChild(creatCheck());
  task.appendChild(creatP());
  task.appendChild(creatTrash());
  return task;
}

function newTask() {
  let list = document.getElementById("completList");
  list.appendChild(creatList());
  document.getElementById("task").value = "";
}
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    newTask();
  }
});
