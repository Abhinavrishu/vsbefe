export async function apiFetch(url, options = {}) {
  // Base URL for all API calls, read from environment variables
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://vsbefe.onrender.com/api'              //'https://vsbefe.onrender.com/api';

  // Construct the full URL for the request
  const absoluteUrl = `${API_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

  // Default options for every request
  const finalOptions = {
    credentials: "include", // This is CRUCIAL for sending auth cookies
    ...options,
  };
  console.log("Fetching:", absoluteUrl, finalOptions);
  try {
    // Make the initial request
    let response = await fetch(absoluteUrl, finalOptions);

    // If the token is expired (status 401), attempt to refresh it
    if (response.status === 401) {
      console.log("Access token expired. Attempting refresh...");
      
      // Call the refresh token endpoint
      const refreshResponse = await fetch(`${API_BASE_URL}/auth/refresh-token`, {
        method: "POST",
        credentials: "include",
      });

      if (refreshResponse.ok) {
        console.log("Token refreshed successfully. Retrying original request.");
        // If refresh was successful, automatically retry the original request
        response = await fetch(absoluteUrl, finalOptions);
      } else {
        console.error("Failed to refresh token. Logging out.");
        // If refresh fails, the session is invalid. Clear user data and redirect to login.
        localStorage.removeItem("vakeelUser");
        window.location.href = "/login";
        return new Response(null, { status: 401, statusText: "Unauthorized" });
      }
    }
    return response;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}