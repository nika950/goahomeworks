const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("გთხოვთ, ჩაწეროთ რაიმე დავალება!");
        return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    li.appendChild(checkbox);
    li.append({taskText}); 

    taskList.appendChild(li);

    taskInput.value = "";

    checkbox.addEventListener('change', function(event) {
        if (event.target.checked) {
            
            li.remove();
        }
    });
});
