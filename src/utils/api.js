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

// utility function to simulate slowness in an API call
const sleep = (time) => new Promise((res) => setTimeout(res, time));
