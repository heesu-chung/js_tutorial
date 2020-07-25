document.querySelector('.main').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', 
handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleSubmitForm(e) {
    let input = document.querySelector('input');
    if(input.value != ''){
        addTodo(input.value);
    }
    else   
        alert('no Input');
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    
    const name = e.target.id;
    if(name === 'checkButton'){
        console.log('check');
        let item = e.target.parentNode;
        if(item.style.textDecoration == 'line-through')
            item.style.textDecoration = 'none';
        else
            item.style.textDecoration = 'line-through';
    }

    else if(name === 'deleteButton'){
        console.log('delete');
        const item = e.target.parentNode;
        item.remove();
    }
    else {    
        console.log(name + ': ' + 'end');
    }
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}


// Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button id="checkButton"><i class="fas fa-check-square"></i></button>
        <button id="deleteButton"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-item');
    ul.appendChild(li);
}
