const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
    console.log(`Making API request to ${API_URL}${endpoint} with options:`, options);
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(
      error?.message || "An unexpected error occurred"
    );
  }

  return response.json();
}