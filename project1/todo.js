const inputTask = document.getElementById('myInput');
const submitButton = document.getElementById('addBtn');
const ul = document.getElementById("my_ordered_list");
const deleteButton = document.getElementById('delBtn');


submitButton.addEventListener('click', (event)=>{
    // to prevent default submission
    event.preventDefault();    
    // check if input is empty
    if(inputTask.value === ""){
        alert('please add lists!!!');
        return;
    }
    
    // get task from input and pass it in the add function
    const task = inputTask.value;
    addTextToList(task);

    
    // clear the input
    inputTask.value = "";
})

function addTextToList(task){    
    const subList = document.createElement('input');    
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const listField = document.createElement("div");



    listField.appendChild(subList);
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText='Delete';
    deleteBtn.className='deleteBtn';
    editBtn.classList.add('editBtn');
    editBtn.innerText='Edit';
    editBtn.className='editBtn';   
    subList.type='text';
    subList.value = task;
    subList.setAttribute('readonly', 'readonly');
    listField.appendChild(editBtn);
    listField.appendChild(deleteBtn);
    editBtn.addEventListener('click', (e) =>{
        if(editBtn.innerText.toLowerCase() == "edit"){
            editBtn.innerText="Save";
            subList.removeAttribute("readonly");
            subList.focus();
        }
        else{
            editBtn.innerText = "Edit";
            subList.setAttribute('readonly', 'readonly');
        }       
        });
    deleteBtn.addEventListener('click', ({target}) => target.parentElement.remove());    
    console.log("deletebutton with action");
    ul.appendChild(listField);
}


      
  










