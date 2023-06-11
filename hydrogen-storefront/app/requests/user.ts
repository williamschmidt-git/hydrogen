/* eslint-disable @typescript-eslint/naming-convention */
export const createUserRequest = async (username: string, password: string) => {
  const response = await fetch('http://localhost:3001/user/create', {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
