function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value;
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = function () {
    li.remove();
  };

  taskList.appendChild(li);
  taskInput.value = "";
}
