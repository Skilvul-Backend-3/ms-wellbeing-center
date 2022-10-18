export const verifyUser = () => {
  // Get session login
  const sesLogin = sessionStorage.getItem('login');
  const sesId = sessionStorage.getItem('id');
  if (!sesLogin || !sesId) {
    location.href = './login.html';
    return 'Mohon login ke akun anda!';
  }
};