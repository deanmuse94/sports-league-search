interface Fetcher {
  path: string;
  method?: string;
  body?: { [key: string]: unknown };
}

export async function fetcher({ path, method, body }: Fetcher) {
  const API_URL = "https://www.thesportsdb.com/api/v1/json/3";

  const response = await fetch(`${API_URL}${path}`, {
    method: method || "GET",
    body: body ? JSON.stringify(body) : null,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}
