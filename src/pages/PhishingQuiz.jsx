import React, { useState } from 'react';

const PhishingQuiz = () => {
  const questions = [
    {
      question: "What is phishing?",
      options: ["A type of fish", "A cyber attack that tricks you into giving sensitive information", "A secure way to send emails"],
      answer: 1
    },
    {
      question: "Which of these is a common phishing tactic?",
      options: ["Urgent requests for information", "Friendly reminders from known contacts", "Both A and B"],
      answer: 2
    },
    {
      question: "What should you do if you receive a suspicious email?",
      options: ["Click on all links to check", "Delete it immediately", "Verify the sender and hover over links before clicking"],
      answer: 2
    },
    {
      question: "Phishing attacks often come through:",
      options: ["Email only", "Phone calls (vishing)", "Text messages (smishing)", "All of the above"],
      answer: 3
    },
    {
      question: "A secure website should have:",
      options: ["A padlock icon", "HTTPS in the URL", "Both A and B"],
      answer: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 page-shell">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 rounded-[2rem] border border-slate-700 bg-slate-950/85 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <h1 className="text-4xl font-bold text-blue-500 neon-blue mb-3 text-center">Phishing Awareness Quiz</h1>
          <p className="text-gray-300 text-center leading-relaxed">
            Test your phishing intuition with real-world style questions. Learn to recognise fake messages before you click.
          </p>
        </div>

        {!showResult ? (
          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-1">{questions[currentQuestion].question}</h2>
                <p className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
              <span className="accent-chip">Phishing Check</span>
            </div>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-900/95 p-4 text-left text-gray-200 hover:bg-slate-800 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="card p-8 text-center">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-white mb-2">Quiz Complete!</h2>
              <p className="text-gray-400">You answered {score} out of {questions.length} correctly.</p>
            </div>
            <div className="rounded-3xl border border-slate-700 bg-slate-900/90 p-6 mb-6">
              <p className="text-lg text-gray-300">
                {score === questions.length ? "Perfect! You're phishing-proof!" :
                 score >= 3 ? "Good job! Keep learning about online safety." :
                 "Keep practicing! Knowledge is your best defense."}
              </p>
            </div>
            <button
              onClick={resetQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition"
            >
              Take Quiz Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhishingQuiz;