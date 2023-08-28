export const taskReducer = (tasks, action) => {
  switch(action.type) {
    case "added": {
      return [...tasks, {...action.payload, done: false}];
    }

    case "doneChanged": {
      return tasks.map(task => task.id === action.payload.taskId 
        ? {...task, done: !task.done}
        : task
      );
    }

    case "renamed": {
      return tasks.map(task => task.id === action.payload.id 
        ? {...task, title: action.payload.title}
        : task
      );
    }

    case "deleted": {
      return tasks.filter(task => task.id !== action.payload.taskId);
    }

    default: throw Error(`Unknown action type: ${action.type}`)
  };
};