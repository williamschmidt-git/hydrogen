/* eslint-disable @typescript-eslint/naming-convention */
export const loginRequest = async (username: string, password: string) => {
  const response = await fetch('http://localhost:3001/login', {
    body: JSON.stringify({username, password}),
    method: 'POST',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  return response.json();
};
