const inputTask = document.getElementById('input-task');
const submitButton = document.getElementById('submit');
const ul = document.getElementById("task-list");

submitButton.addEventListener('click', (event)=>{
    // to prevent default submission
    event.preventDefault();
    
    // check if input is empty
    if(inputTask.value === ""){
        alert('Please enter a task');
        return;
    }

    // get task from input and pass it in the add function
    const task = inputTask.value;
    addTask(task);
    
    // clear the input
    inputTask.value = "";
})




function addTask(task){
    const li = document.createElement('li');

    //span element for task
    let spanTask=document.createElement("span");
    spanTask.classList.add('task');
    spanTask.textContent=task;
    li.appendChild(spanTask);
  
    // add a edit button
   let editBtn=document.createElement("button");
   editBtn.textContent= "Edit";
   li.appendChild(editBtn);

   //add a delete button
   let deleteButton=document.createElement("button");
   deleteButton.textContent= "Delete";
   li.appendChild(deleteButton);

    //edit button functionality
    editBtn.addEventListener('click',(e)=>{
        let buttonText = "";
        if(editBtn.textContent == "Edit"){
            buttonText = "Save";
            let editInput = document.createElement('input');
            editInput.defaultValue = task;
            li.removeChild(li.childNodes[0]);
            li.insertBefore(editInput,li.childNodes[0]);
            

            editInput.addEventListener('input',(e) => {
                sessionStorage.setItem('updatedValue',e.target.value)
                task = e.target.value;
            });
        }

        if(editBtn.textContent == "Save"){
            buttonText = "Edit";
            li.removeChild(li.children[0]);
            let spantodo = document.createElement('span');
            spantodo.textContent = sessionStorage.getItem('updatedValue');
            li.insertBefore(spantodo,li.childNodes[0]);   
        }
        editBtn.textContent = buttonText;
    })

   ul.appendChild(li);
};