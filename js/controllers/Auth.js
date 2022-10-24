import { getUserById, getUsers } from './users.js';

export const Login = async (email, password) => {
  try {
    // get data
    let result = await getUsers();
    // find user
    let findUser = result.find((item) => item.email == email);
    // if user not found, if wrong pass, else login
    if (!findUser) {
      return 'User tidak ditemukan';
    } else if (findUser.password != password) {
      return 'Password anda salah';
    } else {
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('id', findUser.id);
      location.href = './dashboard.html';
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const Me = async () => {
  const sesId = sessionStorage.getItem('id');
  if (!sesId) {
    return 'Mohon login ke akun anda!';
  }
  const user = await getUserById(sesId);
  if (!user) return 'User tidak ditemukan';
  return {
    status: true,
    data: user
  };
};

export const Logout = () => {
  sessionStorage.clear();
  location.href = './login.html';
};

export const Register = async (data) => {
  try {
    // get data
    let getData = await getUsers();
    // find email
    let findUser = getData.find((item) => item.email == data.email);
    // jika findusernya ada, berarti emailnya sudah terdaftar
    if (findUser) {
      console.log('Email sudah terdaftar');
      alert('email sudah terdaftar');
      return {
        status: false,
        msg: 'email sudah terdaftar',
      };
    } else {
      // get data
      let response = await fetch(
        'https://6348abae0b382d796c75343e.mockapi.io/users',
        {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      let result = await response.json();
      return { status: true, msg: 'berhasil membuat akun, silakan login' };
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
