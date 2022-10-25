export const editUser = 'editUser';
export const changePassword = 'changePassword';

export const baseURL = 'https://webaccounting.herokuapp.com/account';
export const createToken = (login: string, password: string) => `Basic ${window.btoa(login + ':' + password)}`;
