document.querySelector('.main').addEventListener('submit',submitList);
document.querySelector('ul').addEventListener('click', checkList);



// function

function submitList(e) {
    
    let content = document.querySelector('input');
    e.preventDefault();
    if(content.value != '')
        addList(content.value);
    else
        alert('No Content');
     
    console.log('No Content');
    content.value = '';
}

function checkList(e) {
    if(e.target.name == 'checkButton')
        checkTodo(e);
    if(e.target.name == 'deleteButton')
        deleteTodo(e);
}


// helper
function addList(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-item');
    ul.appendChild(li);   
}

function checkTodo(e) {
    let item = e.target.parentNode;

    if(item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else   
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {

}