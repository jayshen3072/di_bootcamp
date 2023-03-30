

const tasks = [];
const sheet = document.forms.taskForm;



document.getElementById("execute").addEventListener("click", addTask);



// to validate form
function validateForm() {
    const x = sheet.elements.addTask.value;


    console.log(x);
    if (x === "") {
        alert("Task must be filled in to add");
        return false;
    }

    return true;

};


//function to add new task to the array 'tasks'

function storeNewTask() {
    const x = sheet.elements.addTask.value;
    tasks.push(x);
};

//function to add the new task in the DOM

function addToDom() {
    document.getElementsByClassName("listTasks").innerHTML += tasks[0];
};

function addTask() {

    validateForm();
    storeNewTask();
    addToDom();

};









