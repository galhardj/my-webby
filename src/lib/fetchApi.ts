export const fetchApi = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url, { cache: "force-cache" });
    console.log("this is data", res);

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
