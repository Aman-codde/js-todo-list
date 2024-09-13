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

   ul.appendChild(li);

    //edit button functionality
    editBtn.addEventListener('click',(e)=>{
        let buttonText = "";
        // when edit button is clicked
        if(editBtn.textContent == "Edit"){
            buttonText = "Save";
            //add input field with task value and remove task text
            let editInput = document.createElement('input');
            editInput.defaultValue = task;
            li.removeChild(li.childNodes[0]);
            li.insertBefore(editInput,li.childNodes[0]);
            
            // event occurs whenever input element is changed
            editInput.addEventListener('input',(e) => {
                //update the task value
                task = e.target.value;
            });
        }

        //when save button is clicked
        if(editBtn.textContent == "Save"){
            buttonText = "Edit";
            //remove input field and add task text
            li.removeChild(li.children[0]);
            let spantodo = document.createElement('span');
            //get updated value from task variable 
            spantodo.textContent = task;
            li.insertBefore(spantodo,li.childNodes[0]);   
        }

        //change the edit button value after click
        editBtn.textContent = buttonText;
    })

    //Adding delete functionality::
    deleteButton.addEventListener('click', ({target}) => target.parentElement.remove());    
    console.log("deletebutton with action");

    
};