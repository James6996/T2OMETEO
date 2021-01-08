export const baseUrl = 'http://localhost:4000';

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