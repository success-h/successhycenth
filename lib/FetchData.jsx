const { BACKEND_URL } = process.env;

export async function fetchData(url, options) {
  const response = await fetch(`${BACKEND_URL}/${url}`, options);
  const data = await response.json();
  return data;
}
