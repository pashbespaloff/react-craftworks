export const chatReducer = (chat, action) => {
  switch(action.type) {
    case "messageEdit": {
      return chat.map(user => user.id === action.payload.activeUserId 
        ? {...user, message: action.payload.message}
        : user
      );
    }

    case "userSelect": {
      return chat.map(user => {
        return {
          ...user,
          active: user.id === action.payload
        }
      });
    }

    case "setNewMessage": {
      return chat.map(user => user.id === action.payload
        ? {...user, message: ""}
        : user
      );
    }

    default: throw Error(`unknown action type: ${action.type}`)
  };
};