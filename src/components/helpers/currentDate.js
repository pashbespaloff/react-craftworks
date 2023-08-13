const current = new Date();
const optionalZero = current.getHours() < 10 ? 0 : null;
export const time = `${optionalZero}${current.getHours()}:${optionalZero}${current.getMinutes()}`;
export const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;