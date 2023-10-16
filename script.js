const erase = document.querySelector("#eraser");
const groceryItems = document.querySelector("#groceryItems");
const userInput = document.querySelector("#userInput");
const addTask = document.querySelector(".add");


erase.addEventListener("click", () => {
    groceryItems.textContent = "";
  })
  let counter = 1;

  addTask.addEventListener('click',addItem)
  
  userInput.addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem();
  });
  function addItem() {
    const taskText = userInput.value.trim();
    if (taskText !== ''){
        const taskListItem = document.createElement('li');
        taskListItem.classList.add('list-group-item');
        taskListItem.innerHTML = `
        <span class="task-text"> ${counter} : ${taskText}</span>
        <button class = "btn btn-danger btn-delete remove">X</button>`;
        groceryItems.appendChild(taskListItem);
        counter++;
        userInput.value = '';
        

    }
    userInput.focus();
  }

  groceryItems.addEventListener('click', function (event) {
    const target = event.target;
    if(target.classList.contains('btn-delete')) {
        const listItem = target.closest('li');
        listItem.remove();
        
    }
  })


  

  
  
    