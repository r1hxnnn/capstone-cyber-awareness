import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.08)_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-green-500 mb-4 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">
          Stay Safe Online
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Learn how hackers use social engineering to trick people and how you can protect yourself from cyber attacks.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/phishing"
            className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 transition transform hover:scale-105"
          >
            Try Phishing Test
          </Link>

          <Link
            to="/quiz"
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 transition transform hover:scale-105"
          >
            Take Quiz
          </Link>

          <Link
            to="/tips"
            className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition transform hover:scale-105"
          >
            Learn Safety Tips
          </Link>
        </div>
      </div>
    </div>
  );
}