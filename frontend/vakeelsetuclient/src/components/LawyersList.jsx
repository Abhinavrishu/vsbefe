import { useState, useEffect } from "react";
import { apiFetch } from "@/api/apiFetch";
import LawyerCard from "@/components/LawyerCard";
import Spinner from "./Spinner";

export default function LawyersList() {
    const [lawyers, setLawyers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                // THIS IS THE CORRECTED API CALL
                const res = await apiFetch('/lawyers');
                const data = await res.json();
                if (res.ok) {
                    setLawyers(data.data);
                } else {
                    console.error("Failed to fetch lawyers list:", data.message);
                }
            } catch (error) {
                console.error("Error fetching lawyers:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLawyers();
    }, []);

    if (loading) {
        return <div className="flex justify-center mt-10"><Spinner /></div>;
    }

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-slate-800 mb-8">Connect with an Expert</h1>
            {lawyers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {lawyers.map(lawyer => <LawyerCard key={lawyer.id} lawyer={lawyer} />)}
                </div>
            ) : (
                <p className="text-center text-slate-500 mt-10">No available lawyers at the moment. Please check back later.</p>
            )}
        </div>
    );
}