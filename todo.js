function addTask() {
    var inputValue = document.getElementById("task").value;
    if (inputValue === '') {
        alert("Add your todo task!");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            moveTaskToCompleted(this.parentNode);
        }
    });

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(inputValue));

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remove";
    deleteButton.addEventListener("click", function() {
        deleteTask(this.parentNode);
    });


    li.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    document.getElementById("myTasks").appendChild(li);

    document.getElementById("task").value = "";

}

function moveTaskToCompleted(taskItem) {
    var cTasks = document.getElementById("cTasks");
    cTasks.appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.parentNode.removeChild(taskItem);
}
