
// 1
let count = 0;
function increment() {
    count++;
    document.getElementById('value').innerText = count;
}
function decrement() {
    count--;
    document.getElementById('value').innerText = count;
}

// 2
let array = [];

function addTask() {
    const input = document.getElementById('getValue');
    const value = input.value.trim();

    if (value !== '') {
        array.push(value);
        input.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    array.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = task;

        const btn = document.createElement('button');
        btn.innerText = 'Delete';
        btn.onclick = () => {
            deleteTask(index);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function deleteTask(index) {
    array.splice(index, 1);
    renderTasks();          // update UI
}

//Optional quiz
document.getElementById("demo").innerText = "<b>Hello</b>"; 
//Answer: will show <b>Hello</b> as plain text (not bold)
