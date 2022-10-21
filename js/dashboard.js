import { Me } from './controllers/Auth.js';
import { verifyUser } from './middleware/authUser.js';

if (verifyUser()) {
  location.href = './login.html';
  alert(verifyUser());
}
// mengambil data diri
let data = async () => {
  let result = await Me();
  return result
};
let my = await data();
console.log(my.data);

const welcome = document.getElementById('welcome')
welcome.innerText = `Welcome ${my.data.fullname}`;