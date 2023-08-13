const current = new Date();
const hourZero = current.getHours() < 10 ? 0 : null;
const minutesZero = current.getMinutes() < 10 ? 0 : null;

export const time = `${hourZero}${current.getHours()}:${minutesZero}${current.getMinutes()}`;
export const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;