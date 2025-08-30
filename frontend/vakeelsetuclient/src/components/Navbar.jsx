import { NavLink, useNavigate } from "react-router-dom";
import { useVakeelSetu } from "@/context/VakeelSetuContext";

export default function Navbar() {
  const { user, logout } = useVakeelSetu();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const getDashboardPath = () => user?.role === "LAWYER" ? "/lawyer/dashboard" : "/dashboard";
  const getHomePath = () => user?.role === "LAWYER" ? "/lawyer/chat" : "/";

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to={getHomePath()} className="text-3xl font-bold text-slate-800">
            Vakeel<span className="text-blue-600">Setu</span>
          </NavLink>
          <nav className="flex items-center space-x-4">
            {!user ? (
              <>
                <NavLink to="/login" className="text-slate-600 hover:text-blue-600 font-medium text-lg">Login</NavLink>
                <NavLink to="/register" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">Register</NavLink>
              </>
            ) : (
              <div className="flex items-center space-x-6">
                <NavLink to={getDashboardPath()} className="text-slate-600 hover:text-blue-600 font-medium">Dashboard</NavLink>
                <div className="flex items-center space-x-3">
                  <img src={user.profile} alt="profile" className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"/>
                  <button onClick={handleLogout} className="bg-slate-200 text-slate-800 px-4 py-2 rounded-md font-semibold hover:bg-slate-300 transition">Logout</button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}