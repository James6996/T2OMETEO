export const baseUrl = 'https://t2o-backend.herokuapp.com';

export const getRequest = (endpoint) =>
  fetch(`${baseUrl}${endpoint}`, {
    headers: {
    'Content-Type': 'application/json',
       },
    method: 'GET',
  }).then(async (res) => {
    const response = await res.json();
    if (!res.ok) {
      throw new Error(response.message);
    }

    return response.data;
  });