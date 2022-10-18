import { Register } from './controllers/Auth.js';
// ! Register
const formRegis = document.getElementById('form-register');
formRegis.onsubmit = (e) => {
  e.preventDefault();
  // get input form
  const inputFullname = document.getElementById('inputFullname').value;
  const inputEmail = document.getElementById('inputEmail').value;
  const inputPassword = document.getElementById('inputPassword').value;
  const data = {
    fullname: inputFullname,
    email: inputEmail,
    password: inputPassword,
  };
  // register
  Register(data).then((result) => {
    console.log(result);
    if (result.status) {
      location.href = './login.html';
      alert('Berhasil membuat akun, silakan login');
    }
  });
};
