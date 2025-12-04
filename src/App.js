import React, { useState } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight, Trophy, RotateCcw, Brain } from 'lucide-react';

const InteractiveQuiz = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const quizData = {
    easy: [
      {
        question: "What does ML stand for in computer science?",
        options: ["Multiple Logic", "Machine Learning", "Manual Labor", "Memory Load"],
        correct: 1,
        hint: "It's a type of artificial intelligence that allows systems to learn from data."
      },
      {
        question: "What is the primary goal of supervised learning?",
        options: ["To cluster data", "To predict outputs from labeled data", "To reduce dimensions", "To generate new data"],
        correct: 1,
        hint: "This type of learning uses input-output pairs to train models."
      },
      {
        question: "Which of these is a common application of machine learning?",
        options: ["Text editing", "Image recognition", "File compression", "Audio mixing"],
        correct: 1,
        hint: "Think about how your phone can identify faces in photos."
      },
      {
        question: "What is a 'feature' in machine learning?",
        options: ["A bug in the code", "An input variable", "A type of algorithm", "A software update"],
        correct: 1,
        hint: "It's a measurable property or characteristic of the data being analyzed."
      },
      {
        question: "What does training a model mean?",
        options: ["Installing software", "Teaching the model using data", "Debugging code", "Optimizing hardware"],
        correct: 1,
        hint: "Similar to how students learn from textbooks, models learn from this process."
      }
    ],
    medium: [
      {
        question: "What is overfitting in machine learning?",
        options: ["Model performs poorly on all data", "Model memorizes training data but fails on new data", "Model trains too slowly", "Model uses too much memory"],
        correct: 1,
        hint: "It's like a student who memorizes answers but can't apply knowledge to new problems."
      },
      {
        question: "Which algorithm is commonly used for classification problems?",
        options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"],
        correct: 2,
        hint: "This algorithm splits data based on feature values, creating a tree-like structure."
      },
      {
        question: "What is the purpose of a validation set?",
        options: ["To train the model", "To tune hyperparameters", "To deploy the model", "To collect more data"],
        correct: 1,
        hint: "It helps you adjust model settings without touching the test data."
      },
      {
        question: "What does 'bias' mean in machine learning context?",
        options: ["Prejudice in data", "Error from oversimplification", "Speed of training", "Amount of data"],
        correct: 1,
        hint: "High bias means the model makes strong assumptions and may underfit."
      },
      {
        question: "Which metric is used to evaluate classification models?",
        options: ["Mean Squared Error", "R-squared", "Accuracy", "Correlation"],
        correct: 2,
        hint: "It measures the percentage of correct predictions."
      }
    ],
    hard: [
      {
        question: "What is the vanishing gradient problem in deep learning?",
        options: ["Gradients become too large", "Gradients become extremely small", "Model stops training", "Learning rate increases"],
        correct: 1,
        hint: "This occurs in deep networks where gradients shrink exponentially during backpropagation."
      },
      {
        question: "What is the purpose of dropout in neural networks?",
        options: ["Speed up training", "Prevent overfitting", "Increase accuracy", "Reduce parameters"],
        correct: 1,
        hint: "It randomly 'drops' neurons during training to improve generalization."
      },
      {
        question: "Which optimization algorithm adapts learning rates per parameter?",
        options: ["Gradient Descent", "Adam", "SGD", "Momentum"],
        correct: 1,
        hint: "This adaptive algorithm combines the benefits of RMSprop and momentum."
      },
      {
        question: "What is a convolutional layer primarily used for?",
        options: ["Text processing", "Image feature extraction", "Time series", "Audio generation"],
        correct: 1,
        hint: "This layer detects spatial patterns like edges and textures in images."
      },
      {
        question: "What is the purpose of batch normalization?",
        options: ["Reduce overfitting", "Stabilize and accelerate training", "Compress model", "Generate data"],
        correct: 1,
        hint: "It normalizes inputs to each layer, making training more stable and faster."
      }
    ]
  };

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    setCurrentQuestion(0);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      const isCorrect = index === quizData[difficulty][currentQuestion].correct;
      if (isCorrect) {
        setScore(score + 1);
      }
      setAnsweredQuestions([...answeredQuestions, { question: currentQuestion, correct: isCorrect }]);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData[difficulty].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowHint(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setDifficulty(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const getRemarks = () => {
    const percentage = (score / quizData[difficulty].length) * 100;
    if (percentage === 100) return "Perfect! You're an ML Master! 🌟";
    if (percentage >= 80) return "Excellent! Your ML knowledge is impressive! ⭐";
    if (percentage >= 60) return "Great work! You're getting the hang of ML! 👍";
    if (percentage >= 40) return "Good effort! Keep exploring ML concepts! 💪";
    return "Keep learning! ML is a journey, not a destination! 📚";
  };

  if (!difficulty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 mx-auto mb-4 text-cyan-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
              Machine Learning Quiz
            </h1>
            <p className="text-lg text-gray-600 mb-2">Let's dig into the world of Machine Learning!</p>
            <p className="text-sm text-gray-500">Test your knowledge and learn something new</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleDifficultySelect('easy')}
              className="bg-gradient-to-br from-emerald-400 to-teal-600 text-white p-6 rounded-xl hover:scale-105 transform transition duration-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Beginner</h3>
              <p className="text-sm opacity-90">ML Fundamentals</p>
            </button>
            
            <button
              onClick={() => handleDifficultySelect('medium')}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-xl hover:scale-105 transform transition duration-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Intermediate</h3>
              <p className="text-sm opacity-90">Core ML Concepts</p>
            </button>
            
            <button
              onClick={() => handleDifficultySelect('hard')}
              className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl hover:scale-105 transform transition duration-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">Advanced</h3>
              <p className="text-sm opacity-90">Deep Learning & Beyond</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center">
            <Trophy className="w-24 h-24 mx-auto mb-6 text-cyan-500" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Quiz Completed! 🎉
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
              <p className="text-6xl font-bold text-blue-600 mb-2">{score}/{quizData[difficulty].length}</p>
              <p className="text-xl text-gray-700 font-semibold">{getRemarks()}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-gray-600">
                You scored {((score / quizData[difficulty].length) * 100).toFixed(0)}% on {difficulty} difficulty
              </p>
            </div>
            
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:scale-105 transform transition duration-200 shadow-lg font-semibold flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              Try Another Level
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quizData[difficulty][currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
              {difficulty} Level
            </span>
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1}/{quizData[difficulty].length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-blue-600 to-cyan-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizData[difficulty].length) * 100}%` }}
            ></div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentQ.question}</h2>
        </div>

        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 font-medium ";
            
            if (selectedAnswer === null) {
              buttonClass += "border-gray-300 hover:border-cyan-500 hover:bg-cyan-50 cursor-pointer";
            } else if (index === currentQ.correct) {
              buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-800";
            } else if (index === selectedAnswer) {
              buttonClass += "border-rose-500 bg-rose-50 text-rose-800";
            } else {
              buttonClass += "border-gray-300 opacity-50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedAnswer !== null && index === currentQ.correct && (
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  )}
                  {selectedAnswer === index && index !== currentQ.correct && (
                    <XCircle className="w-6 h-6 text-rose-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-xl hover:scale-105 transform transition duration-200 shadow-lg font-semibold flex items-center justify-center gap-2"
          >
            <Lightbulb className="w-5 h-5" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          
          {selectedAnswer !== null && (
            <button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:scale-105 transform transition duration-200 shadow-lg font-semibold flex items-center justify-center gap-2"
            >
              {currentQuestion < quizData[difficulty].length - 1 ? 'Next' : 'Finish'}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {showHint && (
          <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5" />
              <p className="text-amber-800">{currentQ.hint}</p>
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Current Score: <span className="font-bold text-cyan-600">{score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuiz;
