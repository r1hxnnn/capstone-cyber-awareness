import { useState } from "react";

export default function PhishingTest() {
  const questions = [
    {
      message: "URGENT: Your bank account will be blocked in 24 hours. Click here to verify: http://secure-bank-login.xyz",
      answer: "fake",
      explanation: [
        "Creates urgency",
        "Suspicious link (not official domain)",
        "Asks for sensitive info"
      ]
    },
    {
      message: "Your Amazon order has been shipped. Track here: https://amazon.in/orders",
      answer: "real",
      explanation: [
        "Official domain",
        "No sensitive info asked",
        "Normal transactional message"
      ]
    },
    {
      message: "You won ₹50,000! Claim now by entering OTP sent to your phone.",
      answer: "fake",
      explanation: [
        "Too good to be true",
        "Requests OTP",
        "Unknown source"
      ]
    },
    {
      message: "Instagram: New login detected. Was this you? Check activity in app.",
      answer: "real",
      explanation: [
        "No suspicious link",
        "Asks to check inside official app",
        "Common security alert"
      ]
    }
  ];

  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (ans) => {
    const correct = questions[current].answer;

    if (ans === correct) {
      setResult("✅ Correct");
      setScore(score + 1);
    } else {
      setResult("❌ Wrong");
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setResult("");
    setShowExplanation(false);
    setCurrent(current + 1);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 flex flex-col items-center">

      <h1 className="text-3xl text-green-500 mb-4">Phishing Simulator</h1>

      <p className="mb-2">Score: {score}</p>

      {current < questions.length ? (
        <>
          {/* Question Box */}
          <div className="bg-gray-900 p-6 rounded max-w-xl">
            <p>{questions[current].message}</p>
          </div>

          {/* Buttons */}
          {!showExplanation && (
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => handleAnswer("real")}
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
              >
                Real
              </button>

              <button
                onClick={() => handleAnswer("fake")}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Fake
              </button>
            </div>
          )}

          {/* Result */}
          {result && <p className="mt-4 text-lg">{result}</p>}

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 bg-gray-800 p-4 rounded max-w-xl">
              <h2 className="text-yellow-400 mb-2">Why?</h2>
              <ul className="list-disc ml-6 text-gray-300">
                {questions[current].explanation.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <button
                onClick={nextQuestion}
                className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl text-green-500">Test Completed</h2>
          <p className="mt-2">Final Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}