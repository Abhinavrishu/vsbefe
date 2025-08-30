import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { apiFetch } from "@/api/apiFetch"; // This import is crucial

// Create the context
export const VakeelSetuContext = createContext();

// Create a custom hook for easy access to the context
export const useVakeelSetu = () => useContext(VakeelSetuContext);

// Create the Provider component that will wrap your app
export function VakeelSetuProvider({ children }) {
  // State to hold the current user object
  const [user, setUserState] = useState(() => {
    try {
      const storedUser = localStorage.getItem("vakeelUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      // If parsing fails, return null
      return null;
    }
  });

  // State to track if we are still loading the initial user state
  const [isLoading, setIsLoading] = useState(true);

  // Effect to sync user state with localStorage and manage loading state
  useEffect(() => {
    if (user) {
      localStorage.setItem("vakeelUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("vakeelUser");
    }
    // We are done with the initial load once this effect runs
    setIsLoading(false);
  }, [user]);

  // --- API Functions ---

  const login = async (credentials) => {
    const res = await apiFetch(`/login`, {
      method: "POST",
       credentials:"include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (res.ok) {
      setUserState(data.data.user);
      return { success: true, user: data.data.user };
    }
    return { success: false, message: data.message };
  };

  const register = async (formData) => {
    const res = await apiFetch(`/register`, {
      method: "POST",
       credentials:"include",
      body: formData,
    });
    return await res.json();
  };

  const verifyOTP = async (email, otp) => {
    const res = await apiFetch(`/verify-otp`, {
      method: "POST",
      credentials:"include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (res.ok) {
      // Don't set user state here, just confirm success.
      // The user will be redirected to login.
      return { success: true };
    }
    return { success: false, message: data.message };
  };

  const logout = async () => {
    try {
      await apiFetch(`/logout`);
    } catch (err) {
      // Log the error but proceed with client-side logout anyway
      console.warn("Logout API call failed, but proceeding with client-side logout.");
    } finally {
      // Clear user state, which will trigger the useEffect to clear localStorage
      setUserState(null);
    }
  };

  // Memoize the context value to prevent unnecessary re-renders of consuming components
  const contextValue = useMemo(() => ({
    user,
    isLoading,
    login,
    register,
    verifyOTP,
    logout
  }), [user, isLoading]);

  return (
    <VakeelSetuContext.Provider value={contextValue}>
      {/* Don't render children until the initial user state is loaded */}
      {!isLoading && children}
    </VakeelSetuContext.Provider>
  );
}