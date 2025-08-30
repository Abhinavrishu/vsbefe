import { useNavigate } from "react-router-dom";


export default function LawyerCard({ lawyer }) {
  const navigate = useNavigate();

    const handleStartChat = async () => {
    const success = await startChatWithLawyer(lawyer.id);
    if (success) {
      navigate(`/chat/${lawyer.id}`);
    } else {
      alert("Unable to start chat, please try again.");
    }
  };
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      <img src={lawyer.profile} alt={lawyer.username} className="w-28 h-28 rounded-full mx-auto object-cover mb-4 ring-4 ring-slate-100" />
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{lawyer.username}</h3>
        <p className="text-blue-600 font-semibold mb-4">{lawyer.lawyerDetails?.specialization}</p>
        <div className="flex justify-around text-sm mb-5 text-slate-600 border-y py-3">
          <div><span className="font-bold text-lg block text-slate-800">{lawyer.lawyerDetails?.experience || 0}</span> Years Exp.</div>
          <div><span className="font-bold text-lg block text-slate-800">₹{lawyer.lawyerDetails?.fees || 0}</span> / session</div>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
        Chat Now
      </button>
    </div>
  );
}