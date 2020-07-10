var addButton = document.getElementById('add');
var inputTask = document.getElementById('new_task');
var unfinishedTasks = document.getElementById('unfinished');
var finishedTasks = document.getElementById('finished');


function createNewElement(task) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('button');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>"
    var label = document.createElement('label');
    label.innerText = task;
    var input = document.createElement('input');
    input.type = "text";
    var deleteButton = document.createElement('button');
    deleteButton.className = "material-icons delete";
    deleteButton.innerHTML = "<i class='material-icons delete'>delete</i>"
    var editButton = document.createElement('button');
    editButton.className = "material-icons edit";
    editButton.innerHTML = "<i class='material-icons edit'>edit</i>"

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem;

}

function addTask() {
    if (inputTask.value) {
        var listItem = createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        bingTaaskEvent(listItem, finishTask)
        inputTask.value = "";
    }
    save();
}

addButton.onclick = addTask;

function deleteTask() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
    save();
}

function editTask() {
    var editButton = this;
    var listItem = this.parentNode;
    var label = listItem.querySelector('label');
    var input = listItem.querySelector('input[type="text"]');

    var containsClass = listItem.classList.contains('editMode')
    if (containsClass) {
        label.innerText = input.value;
        editButton.className = "material-icons edit";
        editButton.innerHTML = "<i class='material-icons edit'>edit</i>"
        save();
    } else {
        input.value = label.innerText;
        editButton.className = "material-icons save";
        editButton.innerHTML = "<i class='material-icons edit'>save</i>"
    }
    listItem.classList.toggle('editMode');
}

function finishTask() {
    var listItem = this.parentNode;
    var checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
    finishedTasks.appendChild(listItem);
    bingTaaskEvent(listItem, unfinishTask);
    save();
}

function unfinishTask() {
    var listItem = this.parentNode;
    var checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
    unfinishedTasks.appendChild(listItem);
    bingTaaskEvent(listItem, finishTask);
    save();
}

function bingTaaskEvent(listItem, checkboxEvent) {
    var checkbox = listItem.querySelector('button.checkbox');
    var editButton = listItem.querySelector('button.edit');
    var deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}

function save() {


    var unfinishedTaskArr = [];

    for (var i = 0; i < unfinishedTasks.children.length; i++) {
        unfinishedTaskArr.push(unfinishedTasks.children[i].getElementsByTagName('label')[0].innerText);

    }

    var finishedTaskArr = [];
    for (var i = 0; i < finishedTasks.children.length; i++) {
        finishedTaskArr.push(finishedTasks.children[i].getElementsByTagName('label')[0].innerText);

    }

    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify({
        unfinishedTasks: unfinishedTaskArr,
        finishedTasks: finishedTaskArr
    }));
}

function load() {
    return JSON.parse(localStorage.getItem('todo'));
}

var data = load();
for (var i = 0; i < data.unfinishedTasks.length; i++) {
    var listItem = createNewElement(data.unfinishedTasks[i]);
    unfinishedTasks.appendChild(listItem);
    bingTaaskEvent(listItem, finishTask);
}
for (var i = 0; i < data.finishedTasks.length; i++) {
    var listItem = createNewElement(data.finishedTasks[i]);
    finishedTasks.appendChild(listItem);
    var checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
    bingTaaskEvent(listItem, unfinishTask);
}