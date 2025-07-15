let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const addTask = document.querySelector("#addtask");
const taskListCon = document.querySelector("#tasklist-con");
const input = document.querySelector("#newtask");

function saveTask(){
 localStorage.setItem(tasks, JSON.stringify(task))
}

addTask.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;
  tasks.push({ text: taskText, completed: false });
  const li = document.createElement("li");
  const task = document.createElement("div");
  const option = document.createElement("div");
  li.appendChild(task);
  li.appendChild(option);

  taskListCon.appendChild(li);
  li.classList.add("task-list");
  option.classList.add("list-option");
  task.textContent = taskText;
  task.classList.add("task");
  const complete = document.createElement("div");
  complete.classList.add("complete-btn");
  complete.textContent = "🟠";

  complete.addEventListener("click", () => {
    let taskActive = task.classList.toggle("active");
    if (taskActive) {
      complete.textContent = "✅";
    } else{
      complete.textContent = "🟠";
    }
  });
  const clear = document.createElement("div");
  clear.textContent = "❌";
  clear.addEventListener("click", ()=>{
    li.remove()
  })
  option.appendChild(complete);
  option.appendChild(clear);

  saveTask()
  input.value = "";
});
