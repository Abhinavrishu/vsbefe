import { useEffect, useState } from "react";
import { apiFetch } from "@/api/apiFetch";
import { useVakeelSetu } from "@/context/VakeelSetuContext";
import Spinner from "@/components/Spinner";

export default function LawyerDashboard() {
  const { user } = useVakeelSetu();
  const [details, setDetails] = useState({ fees: '', experience: '', specialization: '', availability: true });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await apiFetch(`/me`);
      const data = await res.json();
      if (res.ok && data.data.lawyerDetails) {
        setDetails(data.data.lawyerDetails);
      }
      setLoading(false);
    };
    fetchDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Updating...');
    try {
      const updates = [
        apiFetch('/lawyer/fees', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fees: details.fees }) }),
        apiFetch('/lawyer/experience', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ experience: details.experience }) }),
        apiFetch('/lawyer/specialization', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ specialization: details.specialization }) }),
        apiFetch('/lawyer/availability', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ availability: details.availability }) })
      ];
      await Promise.all(updates);
      setMessage('Details updated successfully!');
    } catch (error) {
      setMessage('Failed to update details.');
    }
  };
  
  if (loading) return <div className="flex justify-center mt-10"><Spinner /></div>;
  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md border text-center">
        <img src={user.profile} alt={user.username} className="w-32 h-32 rounded-full mx-auto ring-4 ring-slate-200" />
        <h2 className="text-2xl font-bold mt-4">{user.username}</h2>
        <p className="text-slate-500">{user.email}</p>
      </div>
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md border">
        <h3 className="text-xl font-bold mb-4">Manage Your Professional Details</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="specialization" placeholder="Specialization" value={details.specialization || ''} onChange={handleChange} className="w-full p-3 border rounded-md" />
          <div className="grid grid-cols-2 gap-4">
            <input type="number" name="experience" placeholder="Experience (Years)" value={details.experience || ''} onChange={handleChange} className="w-full p-3 border rounded-md" />
            <input type="number" name="fees" placeholder="Fees (₹)" value={details.fees || ''} onChange={handleChange} className="w-full p-3 border rounded-md" />
          </div>
          <div className="flex items-center space-x-3 pt-2">
            <input type="checkbox" name="availability" checked={details.availability} onChange={handleChange} className="h-5 w-5 rounded"/>
            <label>Available for new chats</label>
          </div>
          {message && <p className="text-center text-blue-600">{message}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">Save Changes</button>
        </form>
      </div>
    </div>
  );
}