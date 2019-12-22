
export const LOGIN = 'LOGIN';

export function login(email, password ) {
   return{
      type: LOGIN,
      email,
      password
   }
}

export const SET_USER = 'SET_USER';

export function setUser(user ) {
   return{
      type: LOGIN,
      user
   }
}

