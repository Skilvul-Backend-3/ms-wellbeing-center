export const verifyUser = () => {
  // Get session login
  const sesLogin = sessionStorage.getItem('login');
  if (!sesLogin) {
    location.href = './login.html';
    return 'Mohon login ke akun anda!';
  }
};