export const Login = async (username, password) => {
  try {
    // get data
    const URL = 'https://6348abae0b382d796c75343e.mockapi.io/users';
    let response = await fetch(URL);
    let result = await response.json();
    // find user
    let findUser = result.find((item) => item.username == username);
    // if user not found, if wrong pass, else login
    if (!findUser) {
      return 'User tidak ditemukan';
    } else if (findUser.password != password) {
      return 'Password anda salah';
    } else {
      sessionStorage.setItem('login', true);
      location.href = './dashboard.html';
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
