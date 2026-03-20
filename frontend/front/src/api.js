const API_BASE = "http://localhost:8080";

export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "API Error");
  }

  return res.json();
};
