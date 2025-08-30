import { useState } from "react";
import { apiFetch } from "@/api/apiFetch";
import { useVakeelSetu } from "@/context/VakeelSetuContext";
import Spinner from "@/components/Spinner";

export default function ClientDashboard() {
  const { user } = useVakeelSetu();
  const [formData, setFormData] = useState({ currentPassword: '', newPassword: '' });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setLoading(true);
    try {
      const res = await apiFetch('/password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: 'success', text: data.message });
        setFormData({ currentPassword: '', newPassword: '' });
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An unexpected error occurred.' });
    } finally { setLoading(false); }
  };
  
  if (!user) return <div className="flex justify-center mt-10"><Spinner /></div>;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="bg-white p-6 rounded-xl shadow-md border text-center">
          <img src={user.profile} alt={user.username} className="w-32 h-32 rounded-full mx-auto ring-4 ring-slate-200" />
          <h2 className="text-2xl font-bold mt-4">{user.username}</h2>
          <p className="text-slate-500">{user.email}</p>
        </div>
      </div>
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md border">
        <h3 className="text-xl font-bold mb-4">Update Password</h3>
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <input name="currentPassword" type="password" placeholder="Current Password" value={formData.currentPassword} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          <input name="newPassword" type="password" placeholder="New Password" value={formData.newPassword} onChange={handleChange} className="w-full p-3 border rounded-md" required />
          {message.text && (
            <p className={`text-center p-2 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message.text}
            </p>
          )}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition disabled:bg-slate-400">
            {loading ? 'Updating...' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  );
}