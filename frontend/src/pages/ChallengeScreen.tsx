import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Sidebar from "../components/Sidebar";
import Confetti from "react-confetti";

const defaultCode = `function greet() {
  return "Hello World!";
}`;

const expectedOutput = "Hello World!";

export default function ChallengeScreen() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | "error" | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-new-func
      const result = new Function(`${code}; return greet();`)();
      setOutput(String(result));

      if (result === expectedOutput) {
        setResult("correct");
        setShowConfetti(true);
        setShowAlert(true);
        setTimeout(() => setShowConfetti(false), 10000);
        setTimeout(() => setShowAlert(false), 6000);
      } else {
        setResult("incorrect");
      }
    } catch (err: any) {
      setOutput(err.message);
      setResult("error");
    }
  };

  const resultColor = {
    correct: "text-green-400",
    incorrect: "text-yellow-400",
    error: "text-red-400",
  }[result || ""];

  return (
    <div className="flex min-h-screen bg-[#f5ebff] text-white relative overflow-hidden">
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}

      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#f5ebff] shadow-sm">
          <h1 className="text-lg font-semibold tracking-wide text-purple-400">
            My Learning
          </h1>
          <span className="bg-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
            Tuesday March 26th 2025
          </span>
        </div>

        {/* Alert */}
        {showAlert && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all">
            🎉 You completed today’s challenge and reached Rank 720!
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Challenge Info */}
          <div className="w-[35%] p-6 overflow-y-auto border-r border-gray-800 bg-[#1a1a2e]">
            <p className="text-sm uppercase font-bold text-purple-300 mb-1">Challenge</p>
            <h2 className="text-2xl font-bold mb-4">Write a greet() Function</h2>
            <p className="text-sm leading-relaxed text-gray-300 mb-2">
              Create a function named <code className="text-yellow-400">greet</code> that returns the string <strong>"Hello World!"</strong>.
            </p>
            <div className="mt-4 text-xs text-gray-400 bg-gray-900 p-3 rounded">
              ✅ Output should be: <span className="text-green-400">Hello World!</span>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-[#1e1e2f] flex flex-col">
            <div className="p-4 flex-1">
              <div className="rounded border border-gray-700 overflow-hidden h-full">
                <CodeMirror
                  value={code}
                  height="100%"
                  theme={oneDark}
                  extensions={[javascript()]}
                  onChange={(value) => setCode(value)}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-gray-700 bg-[#12121c]">
              <button
                onClick={handleRunCode}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded shadow"
              >
                Run Code
              </button>
              {result && (
                <div className={`text-sm font-medium ${resultColor}`}>
                  {result === "correct" && "✅ Correct output!"}
                  {result === "incorrect" && "⚠️ Incorrect output!"}
                  {result === "error" && "❌ Error running code"}
                </div>
              )}
            </div>

            {/* Output */}
            <div className="bg-black p-4 border-t border-gray-700 text-sm text-white font-mono min-h-[120px]">
              <div className="text-gray-400 mb-2">Console Output:</div>
              <pre className="whitespace-pre-wrap">{output || "No output yet..."}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
