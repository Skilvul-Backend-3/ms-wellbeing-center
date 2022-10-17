import { verifyUser } from './middleware/authUser.js';

if (verifyUser()) {
    location.href = './login.html';
    alert(verifyUser())
}
