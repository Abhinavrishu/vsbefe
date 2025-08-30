import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { VakeelSetuProvider, useVakeelSetu } from "@/context/VakeelSetuContext"; 

import Navbar from "@/components/Navbar";                                             
import Spinner from "@/components/Spinner";                                          
// Page Imports
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import VerifyOTPPage from "@/pages/VerifyOTP";
import ClientDashboard from "@/pages/ClientDashboard";
import LawyerDashboard from "@/pages/LawyerDashboard";
import LawyerHome from "@/pages/LawyerHome";

// Higher-Order Component for route protection
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isLoading } = useVakeelSetu();
  if (isLoading) return <div className="mt-20 flex justify-center"><Spinner /></div>;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
};

export default function App() {
  return (
    <VakeelSetuProvider>
      <Router>
        <Navbar />
        <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/verify-otp" element={<VerifyOTPPage />} />

            {/* Client-Only Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute allowedRoles={["CLIENT"]}>
                  <ClientDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Lawyer-Only Routes */}
            <Route 
              path="/lawyer/dashboard" 
              element={
                <ProtectedRoute allowedRoles={["LAWYER"]}>
                  <LawyerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/lawyer/chat" 
              element={
                <ProtectedRoute allowedRoles={["LAWYER"]}>
                  <LawyerHome />
                </ProtectedRoute>
              } 
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </VakeelSetuProvider>
  );
}
