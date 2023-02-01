const taskInput = document.querySelector("#taskInput");
const taskDate = document.querySelector("#taskDate");
const taskTime = document.querySelector("#taskTime");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function() {
  const taskValue = taskInput.value;
  const taskDateValue = taskDate.value;
  const taskTimeValue = taskTime.value;
  if (!taskValue) return;

  const taskLi = document.createElement("li");
  taskLi.innerHTML = `${taskValue} - ${taskDateValue} ${taskTimeValue}`;
  taskLi.addEventListener("click", function() {
    taskLi.classList.toggle("completed");
  });
  taskList.appendChild(taskLi);

  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
});
