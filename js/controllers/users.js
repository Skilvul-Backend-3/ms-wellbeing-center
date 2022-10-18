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

export const getUserById = async (id) => {
  try {
    const URL = `https://6348abae0b382d796c75343e.mockapi.io/users/${id}`;
    let response = await fetch(URL);
    let result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const createUser = async (data) => {
  try {
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
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};
