<<<<<<< HEAD
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const counter = document.getElementById('counter');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = '';

    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');
  const todos = [];

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
  updateCounter();
}

function updateCounter() {
  const total = document.querySelectorAll('li').length;
  const completed = document.querySelectorAll('li.completed').length;
  counter.innerText = `${total - completed} task(s) left`;
}

document.getElementById('clearAll').addEventListener('click', () => {
  todosUL.innerHTML = '';
  updateLS();
});

document.getElementById('clearCompleted').addEventListener('click', () => {
  document.querySelectorAll('li.completed').forEach(el => el.remove());
  updateLS();
});
=======
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');
const counter = document.getElementById('counter');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);
    input.value = '';

    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('li');
  const todos = [];

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
  updateCounter();
}

function updateCounter() {
  const total = document.querySelectorAll('li').length;
  const completed = document.querySelectorAll('li.completed').length;
  counter.innerText = `${total - completed} task(s) left`;
}

document.getElementById('clearAll').addEventListener('click', () => {
  todosUL.innerHTML = '';
  updateLS();
});

document.getElementById('clearCompleted').addEventListener('click', () => {
  document.querySelectorAll('li.completed').forEach(el => el.remove());
  updateLS();
});
>>>>>>> c3ded1c010cf035f6da479065ad8e3ba95b8b439
