import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black border-b border-gray-800 text-white px-6 py-3 flex justify-between items-center">
      
      <h1 className="text-green-500 font-bold text-xl">
        CyberSafe
      </h1>

      <div className="flex gap-6 text-sm items-center">
        <Link to="/" className="hover:text-green-400 transition">Home</Link>
        <Link to="/phishing" className="hover:text-green-400 transition">Phishing</Link>
        <Link to="/quiz" className="hover:text-green-400 transition">Quiz</Link>
        <Link to="/tips" className="hover:text-green-400 transition">Tips</Link>

        {/* Your name */}
        <span className="text-gray-500 text-xs ml-4">
          by Rihan Khan
        </span>
      </div>
    </div>
  );
}