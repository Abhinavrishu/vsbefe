import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useVakeelSetu } from '@/context/VakeelSetuContext';

export default function LoginPage() {
  const [formData, setFormData] = useState({ usernameOrEmail: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useVakeelSetu();

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(formData);
    setLoading(false);
    if (res.success) {
      navigate(res.user.role === 'LAWYER' ? '/lawyer/chat' : '/');
    } else {
      setError(res.message || 'Login failed.');
    }
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Welcome Back</h2>
      {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <input name="usernameOrEmail" placeholder="Email or Username" onChange={handleChange} className="w-full p-3 border rounded-md" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border rounded-md" required />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-slate-400">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="text-center mt-6 text-slate-600">Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register here</Link></p>
    </div>
  );
}