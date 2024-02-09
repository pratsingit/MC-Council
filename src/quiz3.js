import React, { useState } from 'react';
import './quiz.css';
import Header from './Header';

const QuizForm3 = () => {
    const questions = [
    {
        id: 1,
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'High-level Text Manipulation Language', 'Hyperlink and Text Management Language', 'Home Tool Markup Language'],
        correctAnswer: 'Hyper Text Markup Language',
    },
    {
        id: 2,
        question: 'Which programming language is commonly used for client-side scripting in web development?',
        options: ['Java', 'Python', 'JavaScript', 'C#'],
        correctAnswer: 'JavaScript',
    },
    {
        id: 3,
        question: 'What is the purpose of CSS (Cascading Style Sheets) in web development?',
        options: ['To define the structure of a web page', 'To provide database connectivity', 'To style and layout web pages', 'To handle server-side logic'],
        correctAnswer: 'To style and layout web pages',
    },
    {
        id: 4,
        question: 'Which of the following is a server-side scripting language?',
        options: ['JavaScript', 'HTML', 'CSS', 'PHP'],
        correctAnswer: 'PHP',
    },
    {
        id: 5,
        question: 'What does the acronym AJAX stand for in web development?',
        options: ['Asynchronous JavaScript and XML', 'Advanced JavaScript and XML', 'Automated JavaScript and XHTML', 'Asynchronous JavaScript and XHTML'],
        correctAnswer: 'Asynchronous JavaScript and XML',
    },
    {
        id: 6,
        question: 'What is the purpose of the viewport meta tag in HTML?',
        options: ['To set the background color of a webpage', 'To define the character encoding of a webpage', 'To control the layout and scaling on different devices', 'To embed external scripts into the webpage'],
        correctAnswer: 'To control the layout and scaling on different devices',
    },
    {
        id: 7,
        question: 'Which HTTP status code indicates a successful request in web development?',
        options: ['200 OK', '404 Not Found', '500 Internal Server Error', '302 Found (Moved Temporarily)'],
        correctAnswer: '200 OK',
    },
    {
        id: 8,
        question: 'What is the primary function of a web server?',
        options: ['To manage databases', 'To store client-side scripts', 'To host and serve web pages to users', 'To handle client-side events'],
        correctAnswer: 'To host and serve web pages to users',
    },
    {
        id: 9,
        question: 'What is the purpose of a cookie in web development?',
        options: ['To store user session data on the server', 'To store user preferences on the client side', 'To execute server-side code', 'To compress images on the web page'],
        correctAnswer: 'To store user preferences on the client side',
    },
    {
        id: 10,
        question: 'Which of the following is not a version control system used in web development?',
        options: ['Git', 'Subversion (SVN)', 'Mercurial', 'Java'],
        correctAnswer: 'Java',
    },
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [showScore, setShowScore] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleOptionChange = (questionIndex, selectedOption) => {
        // Checking if the quiz has already been submitted
        if (!submitted) {
            const newAnswers = [...answers];
            newAnswers[questionIndex] = selectedOption;
            setAnswers(newAnswers);
        }
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });
        return score;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowScore(true);
        setSubmitted(true);
    };

    const handleTryAgain = () => {
        setAnswers(Array(questions.length).fill(''));
        setShowScore(false);
        setSubmitted(false);
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit} style={{ background: 'black', color: 'white', padding: '20px' }}>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <h1>Test Yourself on the Web Development Course!</h1>
                </div>
                <div className='content form-container'>
                    <p style={{ justifyContent: 'center', display: 'flex', fontWeight: 'bold', fontSize: '23px' }}>Answer the following questions to complete the Web Development module!</p>
                    <br></br>
                    {questions.map((question, index) => (
                        <div key={question.id} className="question-container" style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '18px' }}><span>{index + 1}. </span>{question.question}</p>
                            <div className="options-container" style={{ display: 'flex', flexDirection: 'column' }}>
                                {question.options.map((option) => (
                                    <label key={option} style={{ marginRight: '20px', marginBottom: '5px' }}>
                                        <input
                                            type="radio"
                                            required
                                            name={`question${index}`}
                                            value={option}
                                            checked={answers[index] === option}
                                            onChange={() => handleOptionChange(index, option)}
                                            disabled={submitted} // Disable options after submission
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    {submitted ? (
                        <div>
                            <button className='button' onClick={handleTryAgain}>
                                Try Again
                            </button>
                            <div className="score-container" style={{ marginTop: '20px' }}>
                                <h2 style={{ color: '#4fdb56', fontWeight: 'bolder', justifyContent: 'center', display: 'flex' }}>
                                    Your Score = ({calculateScore()} out of {questions.length})
                                </h2>
                            </div>
                        </div>
                    ) : (
                        <button className='button' type="submit">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </>
    );
};

export default QuizForm3;
