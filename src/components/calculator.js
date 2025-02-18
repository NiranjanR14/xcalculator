import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [answer, setAnswer] = useState('');

    const handleButtonClick = (value) => {
        setExpression(expression + value);
    };

    const handleClear = () => {
        setExpression('');
        setAnswer('');
    };

    const handleEvaluate = () => {
        try {
            setAnswer(eval(expression).toString());
        } catch {
            setExpression('Error');
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <input type='text' className="display" value={expression} readOnly />
            <div>{answer}</div>
            <div className="buttons">
                {['7', '8', '9', '+'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['4', '5', '6', '-'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                {['1', '2', '3', '*'].map((value) => (
                    <button key={value} onClick={() => handleButtonClick(value)}>{value}</button>
                ))}
                <button onClick={handleClear}>C</button>
                {['0', '=', '/'].map((value) => (
                    <button key={value} onClick={() => value === '=' ? handleEvaluate() : handleButtonClick(value)}>{value}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;