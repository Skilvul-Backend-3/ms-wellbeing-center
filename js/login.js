import { Login } from "./controllers/Auth.js";

// ! Login
const formLogin = document.getElementById('form-login');

formLogin.onsubmit = (e) => {
  e.preventDefault();
  // menghapus alert login supaya tidak menumpuk
  const alertLogin = document.getElementById('alert-login');
  if (alertLogin) {
    alertLogin.remove();
  }
  // get input form
  const inputEmail = document.getElementById('inputEmail').value;
  const inputPassword = document.getElementById('inputPassword').value;
  // login
  Login(inputEmail, inputPassword).then((result) => {
    console.log(result);
    if (result) {
      // Create a element alert before form
      const div = document.createElement('div');
      div.id = 'alert-login';
      div.className += 'alert';
      div.className += ' alert-danger';
      div.innerHTML = `${result}`;
      formLogin.before(div);
    }
  });
};
