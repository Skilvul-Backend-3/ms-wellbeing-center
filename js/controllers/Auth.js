export const Login = async(username, password) => {
    try {
        // get data
        const URL = 'https://6348abae0b382d796c75343e.mockapi.io/users';
        let response = await fetch(URL);
        let result = await response.json();
        console.log(result);
        // find user
        let findUser = result.find(item => item.username == username)
        console.log(findUser);
        if (!findUser) {
            return 'User tidak ditemukan'
        } else if (findUser.password != password) {
            return 'Password anda salah'
        }
      } catch (error) {
        console.log(error);
        return null;
      }
}