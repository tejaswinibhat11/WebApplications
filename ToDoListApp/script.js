const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask(){

    if(taskInput.value.trim()===""){
        alert("Please enter a task");
        return;
    }

    createTask(taskInput.value);

    saveTasks();

    taskInput.value="";
}

function createTask(text){

    const li=document.createElement("li");

    li.innerHTML=`
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector("span").onclick=function(){
        li.classList.toggle("completed");
        saveTasks();
    };

    li.querySelector(".delete-btn").onclick=function(){
        li.remove();
        saveTasks();
    };

    taskList.appendChild(li);
}

function saveTasks(){
    localStorage.setItem("tasks",taskList.innerHTML);
}

function loadTasks(){
    taskList.innerHTML=localStorage.getItem("tasks") || "";

    document.querySelectorAll("li").forEach(li=>{

        li.querySelector("span").onclick=function(){
            li.classList.toggle("completed");
            saveTasks();
        };

        li.querySelector(".delete-btn").onclick=function(){
            li.remove();
            saveTasks();
        };

    });
}