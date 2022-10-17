export const getUsers = async () => {
    try {
      const URL = 'https://6348abae0b382d796c75343e.mockapi.io/users';
      let response = await fetch(URL);
      let result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };