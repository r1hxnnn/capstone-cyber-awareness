export default function Tips() {
  return (
    <div className="bg-black text-white min-h-screen p-6">

      <h1 className="text-3xl text-red-500 mb-6">Cyber Safety Tips</h1>

      <div className="grid gap-4 max-w-xl">

        <div className="bg-gray-900 p-4 rounded">
          🔑 Never share OTP with anyone
        </div>

        <div className="bg-gray-900 p-4 rounded">
          🔒 Use strong passwords (mix characters)
        </div>

        <div className="bg-gray-900 p-4 rounded">
          ⚠ Avoid clicking suspicious links
        </div>

        <div className="bg-gray-900 p-4 rounded">
          📱 Enable 2-Factor Authentication
        </div>

        <div className="bg-gray-900 p-4 rounded">
          🧠 Always verify before trusting messages
        </div>

      </div>
    </div>
  );
}