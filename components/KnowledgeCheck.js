import { useState } from 'react';

export default function KnowledgeCheck({ question, options, correctAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const handleCheck = () => {
    setIsChecked(true);
    setIsCorrect(selectedOption === correctAnswer);
  };
  
  const handleReset = () => {
    setSelectedOption(null);
    setIsChecked(false);
  };
  
  return (
    <div className="knowledge-check">
      <h3>Knowledge Check</h3>
      <p>{question}</p>
      
      <div className="quiz-options">
        {options.map((option, index) => (
          <label key={index} className="quiz-option">
            <input
              type="radio"
              name="quiz-option"
              value={index}
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
              disabled={isChecked}
            />
            {option}
          </label>
        ))}
      </div>
      
      {!isChecked ? (
        <button 
          className="btn" 
          onClick={handleCheck}
          disabled={selectedOption === null}
        >
          Check Answer
        </button>
      ) : (
        <>
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect 
              ? 'Correct! Well done.' 
              : `Incorrect. The correct answer is: ${options[correctAnswer]}`}
          </div>
          <button className="btn btn-outline" onClick={handleReset}>
            Try Again
          </button>
        </>
      )}
    </div>
  );
}
