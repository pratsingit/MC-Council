import React, { useState } from 'react';
import './quiz.css';
import Header from './Header';

const QuizForm2 = () => {
    const questions = [
    {
        id: 1,
        question: 'What does the term "AI" stand for in the context of computer science?',
        options: ['Advanced Intelligence', 'Automated Interaction', 'Artificial Intelligence', 'Algorithmic Integration'],
        correctAnswer: 'Artificial Intelligence',
    },
    {
        id: 2,
        question: 'Which branch of AI focuses on developing systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making?',
        options: ['Natural Language Processing (NLP)', 'Machine Learning', 'Computer Vision', 'Expert Systems'],
        correctAnswer: 'Computer Vision',
    },
    {
        id: 3,
        question: 'What is the main goal of supervised learning in machine learning?',
        options: ['To maximize accuracy without labeled data', 'To minimize errors with labeled data', 'To learn from reward signals', 'To perform unsupervised tasks'],
        correctAnswer: 'To minimize errors with labeled data',
    },
    {
        id: 4,
        question: 'Which algorithm is commonly used for reinforcement learning?',
        options: ['Decision Trees', 'K-Means Clustering', 'Q-Learning', 'Support Vector Machines (SVM)'],
        correctAnswer: 'Q-Learning',
    },
    {
        id: 5,
        question: 'What is the Turing Test used for in the field of AI?',
        options: ['To assess the computational power of a machine', 'To determine if a machine can exhibit human-like intelligence', 'To evaluate the efficiency of algorithms', 'To measure the processing speed of a computer'],
        correctAnswer: 'To determine if a machine can exhibit human-like intelligence',
    },
    {
        id: 6,
        question: 'Which programming language is often used for implementing machine learning algorithms?',
        options: ['Java', 'Python', 'C++', 'Ruby'],
        correctAnswer: 'Python',
    },
    {
        id: 7,
        question: 'What is the purpose of deep learning in artificial intelligence?',
        options: ['To simulate human emotions', 'To create complex neural networks with multiple layers', 'To generate random data for training models', 'To optimize search algorithms'],
        correctAnswer: 'To create complex neural networks with multiple layers',
    },
    {
        id: 8,
        question: 'What does the acronym "NLP" stand for in the context of artificial intelligence?',
        options: ['Natural Language Processing', 'Neural Learning Platform', 'Networked Logic Programming', 'Numerical Language Prediction'],
        correctAnswer: 'Natural Language Processing',
    },
    {
        id: 9,
        question: 'What is the role of a neural network in machine learning?',
        options: ['To represent complex mathematical functions', 'To store and retrieve information from databases', 'To execute decision-making processes', 'To compress images for better storage'],
        correctAnswer: 'To represent complex mathematical functions',
    },
    {
        id: 10,
        question: 'What is the concept of "unsupervised learning" in machine learning?',
        options: ['Learning from labeled data', 'Learning without explicit supervision or labeled outputs', 'Learning through reinforcement signals', 'Learning from a teacher or mentor'],
        correctAnswer: 'Learning without explicit supervision or labeled outputs',
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
                    <h1>Test Yourself on the Artificial Intelligence Course!</h1>
                </div>
                <div className='content form-container'>
                    <p style={{ justifyContent: 'center', display: 'flex', fontWeight: 'bold', fontSize: '23px' }}>Answer the following questions to complete the Artificial Intelligence module!</p>
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

export default QuizForm2;
