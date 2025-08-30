import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useVakeelSetu } from "@/context/VakeelSetuContext";

export default function VerifyOTPPage() {
  const { verifyOTP } = useVakeelSetu();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!email) return setError("Email not found. Please register again.");
    
    setLoading(true);
    const res = await verifyOTP(email, otp);
    setLoading(false);
    if (res.success) {
      alert("Registration Complete! Please login.");
      navigate("/login");
    } else {
      setError(res.message || "OTP verification failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Verify Your Email</h2>
      <p className="text-center text-slate-600 mb-6">An OTP has been sent to <strong>{email}</strong>.</p>
      {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text" placeholder="Enter 6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
          className="w-full p-4 border rounded-md text-center text-2xl tracking-[.5em]" required maxLength={6}
        />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-slate-400">
          {loading ? 'Verifying...' : 'Verify Account'}
        </button>
      </form>
    </div>
  );
}