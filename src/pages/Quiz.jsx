import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      q: "Is it safe to share OTP with anyone?",
      options: ["Yes", "No"],
      answer: "No",
    },
    {
      q: "What is phishing?",
      options: ["Fishing technique", "Cyber attack to steal data"],
      answer: "Cyber attack to steal data",
    },
    {
      q: "Strong password should contain?",
      options: ["Only numbers", "Mix of letters, numbers, symbols"],
      answer: "Mix of letters, numbers, symbols",
    },
    {
      q: "Clicking unknown links is safe?",
      options: ["Yes", "No"],
      answer: "No",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 flex flex-col items-center">

      <h1 className="text-3xl text-blue-500 mb-4">Cyber Quiz</h1>

      {current < questions.length ? (
        <>
          <p className="mb-4">{questions[current].q}</p>

          <div className="flex gap-4">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-2xl">Final Score: {score}/{questions.length}</h2>

          <p className="mt-2">
            {score === questions.length
              ? "Excellent! You are highly aware."
              : score >= 2
              ? "Good, but stay cautious."
              : "You need more awareness."}
          </p>
        </div>
      )}
    </div>
  );
  
}