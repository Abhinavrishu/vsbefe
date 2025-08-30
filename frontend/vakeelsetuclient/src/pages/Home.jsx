import { useVakeelSetu } from "@/context/VakeelSetuContext";
import LawyersList from "@/components/LawyersList"; // Corrected import
import LawyerHome from "./LawyerHome";

export default function HomePage() {
  const { user } = useVakeelSetu();

  // If user is a logged-in lawyer, show their chat dashboard
  if (user?.role === 'LAWYER') {
    return <LawyerHome />;
  }

  // If user is a logged-in client, show the list of lawyers
  if (user?.role === 'CLIENT') {
    return <LawyersList />;
  }

  // Otherwise, show the public landing page for logged-out users
  return (
    <div className="text-center pt-10 pb-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
        Connect with Legal Experts, <br/> Instantly and Securely.
      </h1>
      <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
        VakeelSetu is your trusted platform for finding, chatting, and consulting with professional lawyers. Get the legal help you need, right when you need it.
      </p>
      <div className="mt-10">
          <a href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-transform hover:scale-105 inline-block">
            Get Started Now
          </a>
      </div>
    </div>
  );
}