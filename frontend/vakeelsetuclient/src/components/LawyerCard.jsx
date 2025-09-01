import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LawyerCard({ lawyer }) {
  const navigate = useNavigate();
  const [clientCoords, setClientCoords] = useState(null);
  const [distance, setDistance] = useState(null);

  // ✅ Update client location every 1 min
  useEffect(() => {
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setClientCoords({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          (err) => {
            console.error("Error getting location", err);
          }
        );
      }
    };

    updateLocation(); // run once immediately
    const interval = setInterval(updateLocation, 60 * 1000); // every 1 minute

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // ✅ Recalculate distance whenever coords or lawyer changes
  useEffect(() => {
    if (clientCoords && lawyer.latitude && lawyer.longitude) {
      const dist = getDistanceFromLatLonInKm(
        clientCoords.latitude,
        clientCoords.longitude,
        lawyer.latitude,
        lawyer.longitude
      );
      setDistance(dist);
    }
  }, [clientCoords, lawyer]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      <img
        src={lawyer.profile}
        alt={lawyer.username}
        className="w-28 h-28 rounded-full mx-auto object-cover mb-4 ring-4 ring-slate-100"
      />
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-800">{lawyer.username}</h3>
        <p className="text-blue-600 font-semibold mb-4">
          {lawyer.lawyerDetails?.specialization}
        </p>
        <div className="flex justify-around text-sm mb-5 text-slate-600 border-y py-3">
          <div>
            <span className="font-bold text-lg block text-slate-800">
              {lawyer.lawyerDetails?.experience || 0}
            </span>{" "}
            Years Exp.
          </div>
          <div>
            <span className="font-bold text-lg block text-slate-800">
              ₹{lawyer.lawyerDetails?.fees || 0}
            </span>{" "}
            / session
          </div>
        </div>

        {/* Distance Section */}
        {distance && (
          <p className="text-green-600 font-medium mb-4">
            📍 {distance} km away
          </p>
        )}
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
        Chat Now
      </button>
    </div>
  );
}

// utility function
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
}
