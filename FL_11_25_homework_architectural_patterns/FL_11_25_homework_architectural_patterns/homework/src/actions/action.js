export const REMOVE_USER = 'REMOVE_USER';
export const ADD_USERS = 'ADD_USERS';
export const FILTER_USERS = 'FILTER_USERS';

export function removeUser(id) {
  return {
    type: REMOVE_USER,
    payload: id
  };
}
export function addUser(data) {
  return {
    type: ADD_USERS,
    payload: data
  }
}
export function filterUsers(someFilter) {
  return {
    type: FILTER_USERS,
    payload: someFilter
  }
}