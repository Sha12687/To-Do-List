// Get required elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('total-tasks');

// Initialize task counter
let totalTasks = 0;

// Function to create a new todo item
function createTodoItem(text) {
  const listItem = document.createElement('li');
  listItem.style.display='flex';
  listItem.style.alignItems='center'
  const checkbox = document.createElement('input');
  checkbox.type = 'radio';
  checkbox.style.height='45px';
  const label = document.createElement('label');
  label.style.marginLeft = '10px';

  label.innerText = text;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '✖';
  deleteButton.style.marginLeft='auto';
  deleteButton.style.backgroundColor="transparent";
  deleteButton.style.color='white';
  deleteButton.style.border='none';
  deleteButton.style.cursor='pointer';
  deleteButton.style.fontSize='16px'
  deleteButton.style.lineHeight='1rem';
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  // Event listener for checkbox
  checkbox.addEventListener('change', function () {
    label.classList.toggle('checked');
  });

  // Event listener for delete button
  deleteButton.addEventListener('click', function () {
    listItem.remove();
    totalTasks--;
    taskCount.innerText = totalTasks;
  });

  return listItem;
}

// Event listener for add button
addButton.addEventListener('click', function () {
  const inputValue = todoInput.value.trim();
  if (inputValue !== '') {
    const newTodoItem = createTodoItem(inputValue);
    todoList.appendChild(newTodoItem);
    todoInput.value = '';
    totalTasks++;
    taskCount.innerText = totalTasks;
  }
});
