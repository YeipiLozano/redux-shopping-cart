export async function getData() {
  const response = await fetch('/data/products.json');
  const data = await response.json();
  return data;  
}

export async function checkout(items) {
  const modifier = Object.keys(items).length > 0 ? 'success' : 'error';
  const url = `/checkout-${modifier}.json`;
  await sleep(500);
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data;
}

const mockedUser = {
  id: '123',
  username: 'Wizeline',
};

export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}

// utility function to simulate slowness in an API call
const sleep = (time) => new Promise((res) => setTimeout(res, time));
