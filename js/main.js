let taskInput = document.getElementById('taskInput');
let taskAddBtn = document.getElementById('taskAddBtn');
let noTask = document.getElementById('noTask');
let allTasks = document.getElementById('allTasks');
let invalidMessage = document.getElementById('invalidMessage');
let closeInvalidMessage = document.getElementById('closeInvalidMessage');

let closeInvalidMessageFunc =()=>{
    invalidMessage.classList.add('none');
}
closeInvalidMessage.addEventListener('click',closeInvalidMessageFunc);

let addTask = ()=>{

    taskData = taskInput.value;

    if(taskData.trim() == '' || taskInput.value.length < 2){

        invalidMessage.classList.remove('none');

    }else{
        noTask.classList.add('none');

        allTasks.innerHTML += `
        <div class="task alert alert-info">
        ${taskData}
        <button class="close btn btn-danger float-end">Done</button>
        </div>
       `;
       taskInput.value = "";
    }
}

allTasks.addEventListener('click',function(e){
    if(e.target.classList.contains('task')){
        e.target.classList.toggle("checked");
    }
});

taskAddBtn.addEventListener('click' , addTask);

document.addEventListener('click' , function(e){
    if(e.target.classList.contains('close')){
        e.target.parentElement.remove();
        if(allTasks.children.length==0){
            noTask.classList.remove('none')
        }
    }
});

checkbox.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
  });
  inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value;
    if(userEnteredValue.trim() != 0){
      addbtn.classList.add("active");
    }else{
      addbtn.classList.remove("active");
    }
  }