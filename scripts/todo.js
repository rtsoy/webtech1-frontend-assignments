// Add task function
function addTask() {
    const taskText = document.getElementById("newTask").value;
    
    if (taskText) {
        const taskList = document.getElementById("tasks");
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item")
        li.innerHTML = `
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input" type="checkbox" onchange="toggleCompleted(this)">
                </div>
                <span class="form-control text-break" aria-label="Text input with radio button">${taskText}</span>
                <div class="input-group-text">
                    <input class="border-0" type="button" value="❌" onclick="deleteTask(this)">
                </div>
            </div>
        `;
        taskList.appendChild(li);
        document.getElementById("newTask").value = "";
    }
}

// Delete task function
function deleteTask(deleteButton) {
    const taskElement = deleteButton.closest("li");
    taskElement.parentNode.removeChild(taskElement);
}

// Make task completed
function toggleCompleted(checkbox) {
    const taskTextElement = checkbox.closest("li").querySelector("span.form-control");
    if (checkbox.checked) {
        taskTextElement.classList.add("text-decoration-line-through");
    } else {
        taskTextElement.classList.remove("text-decoration-line-through");
    }
}
