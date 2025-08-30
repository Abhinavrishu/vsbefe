import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useVakeelSetu } from '@/context/VakeelSetuContext';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '', email: '', password: '', confirmpassword: '', role: 'CLIENT', profile: null,
        specialization: '', experience: '', fees: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, user } = useVakeelSetu();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmpassword) return setError("Passwords do not match.");
        
        setLoading(true);
        const formPayload = new FormData();
        Object.keys(formData).forEach(key => formPayload.append(key, formData[key]));

        const res = await register(formPayload);
        setLoading(false);
        if (res.success) {
            navigate(`/verify-otp?email=${formData.email}`);
        } else {
            setError(res.message || 'Registration failed.');
        }
    };

    if (user) return <Navigate to="/" replace />;

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Create Your Account</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                <div>
                    <label className="font-semibold text-slate-700">Profile Picture</label>
                    <input type="file" name="profile" onChange={handleChange} className="w-full mt-1 text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" required />
                </div>
                <select name="role" value={formData.role} onChange={handleChange} className="w-full p-3 border rounded-md bg-white">
                    <option value="CLIENT">I am a Client</option>
                    <option value="LAWYER">I am a Lawyer</option>
                </select>

                {formData.role === 'LAWYER' && (
                    <div className="space-y-4 border-t pt-4">
                        <input name="specialization" placeholder="Specialization (e.g. Family Law)" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                        <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                        <input type="number" name="fees" placeholder="Fees per session (₹)" onChange={handleChange} className="w-full p-3 border rounded-md" required />
                    </div>
                )}
                
                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-slate-400">
                    {loading ? 'Creating Account...' : 'Register'}
                </button>
            </form>
            <p className="text-center mt-6 text-slate-600">Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link></p>
        </div>
    );
}