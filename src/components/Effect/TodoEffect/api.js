const url = "https://jsonplaceholder.typicode.com";
const userId = 1;

const getTodos = async() => {
  try {
    const response = await fetch(`${url}/todos?_limit=5`);
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.log("error: ", error.message);
    return [];
  };
};

const addTodo = async(todoTitle) => {
  try {
    const response = await fetch(`${url}/todos`, {
      method: 'POST',
      body: JSON.stringify({
        // id: todo.id,
        title: todoTitle,
        completed: false,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const newTodo = await response.json();
    return { addStatus: response.ok, newTodo };
  } catch (error) {
    console.log("error: ", error.message);
    return {error};     
  };
};

const updateTodo = async(todo) => {
  try {
    const response = await fetch(`${url}/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const updTodo = await response.json();
    return { updStatus: response.ok, updTodo };
  } catch (error) {
    console.log("error: ", error.message);
    return {error}; 
  };
};

const deleteTodo = async(todoId) => {
  try {
    const response = await fetch(`${url}/todos/${todoId}`, {
      method: 'DELETE'
    });
    return { deleteStatus: response.ok };
  } catch (error) {
    console.log("error: ", error.message);
    return {error};     
  };
};

export {getTodos, addTodo, updateTodo, deleteTodo};