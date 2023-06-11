export const workoutRequests = async () => {
  const response = await fetch('http://localhost:3001/workout', {
    method: 'GET',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  return response.json();
};
