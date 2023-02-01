const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function() {
  const taskValue = taskInput.value;
  if (!taskValue) return;

  const taskLi = document.createElement("li");
  taskLi.innerHTML = taskValue;
  taskList.appendChild(taskLi);

  taskInput.value = "";
});
