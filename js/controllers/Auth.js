import { getUsers } from './users.js';

export const Login = async (username, password) => {
  try {
    // get data
    let result = await getUsers();
    // find user
    let findUser = result.find((item) => item.username == username);
    // if user not found, if wrong pass, else login
    if (!findUser) {
      return 'User tidak ditemukan';
    } else if (findUser.password != password) {
      return 'Password anda salah';
    } else {
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('email', username);
      location.href = './dashboard.html';
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
