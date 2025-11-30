export const fetchApi = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
