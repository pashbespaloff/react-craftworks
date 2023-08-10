const current = new Date();
export const time = `${current.getHours()}:${current.getMinutes()}`;
export const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;