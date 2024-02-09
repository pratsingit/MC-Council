import React, { useState } from 'react';
import './quiz.css';
import Header from './Header';

const QuizForm = () => {
    const questions = [
    {
        id: 1,
        question: 'What is the primary goal of Ethical Hacking?',
        options: ['To gain unauthorized access', 'To exploit vulnerabilities for personal gain', 'To identify and fix security vulnerabilities', 'To disrupt computer systems'],
        correctAnswer: 'To identify and fix security vulnerabilities',
    },
    {
        id: 2,
        question: 'Which of the following is NOT a phase in the ethical hacking process?',
        options: ['Reconnaissance', 'Exploitation', 'Mitigation', 'Reporting'],
        correctAnswer: 'Mitigation',
    },
    {
        id: 3,
        question: 'What is social engineering in the context of ethical hacking?',
        options: ['Exploiting software vulnerabilities', 'Manipulating people to disclose confidential information', 'Analyzing network traffic', 'Performing penetration testing'],
        correctAnswer: 'Manipulating people to disclose confidential information',
    },
    {
        id: 4,
        question: 'Which type of testing involves assessing the security of a system with no prior knowledge of its architecture or code?',
        options: ['White-box testing', 'Black-box testing', 'Gray-box testing', 'Blue-box testing'],
        correctAnswer: 'Black-box testing',
    },
    {
        id: 5,
        question: 'What is the main purpose of penetration testing?',
        options: ['Identifying vulnerabilities and weaknesses', 'Developing secure software', 'Network monitoring', 'Denial-of-service attacks'],
        correctAnswer: 'Identifying vulnerabilities and weaknesses',
    },
    {
        id: 6,
        question: 'What is the difference between vulnerability scanning and penetration testing?',
        options: ['They are synonymous terms', 'Vulnerability scanning is automated, while penetration testing involves manual testing', 'Penetration testing is only performed by external entities', 'Vulnerability scanning is only performed internally'],
        correctAnswer: 'Vulnerability scanning is automated, while penetration testing involves manual testing',
    },
    {
        id: 7,
        question: 'Which encryption protocol is commonly used to secure wireless networks?',
        options: ['WEP', 'WPA', 'SSL', 'AES'],
        correctAnswer: 'AES',
    },
    {
        id: 8,
        question: 'What is a "zero-day exploit"?',
        options: ['An attack that occurs at midnight', 'An exploit that targets previously unknown vulnerabilities', 'An attack with zero consequences', 'A type of social engineering attack'],
        correctAnswer: 'An exploit that targets previously unknown vulnerabilities',
    },
    {
        id: 9,
        question: 'What is the purpose of a firewall in network security?',
        options: ['To identify and block malicious traffic', 'To encrypt data in transit', 'To store sensitive information', 'To improve network performance'],
        correctAnswer: 'To identify and block malicious traffic',
    },
    {
        id: 10,
        question: 'What is the role of a security patch in the context of Ethical Hacking?',
        options: ['Exploiting vulnerabilities', 'Enhancing system performance', 'Closing security holes and fixing vulnerabilities', 'Monitoring network traffic'],
        correctAnswer: 'Closing security holes and fixing vulnerabilities',
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
                    <h1>Test Yourself on the Ethical Hacking Course!</h1>
                </div>
                <div className='content form-container'>
                    <p style={{ justifyContent: 'center', display: 'flex', fontWeight: 'bold', fontSize: '23px' }}>Answer the following questions to complete the Ethical Hacking module!</p>
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
                                            disabled={submitted} 
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

export default QuizForm;
