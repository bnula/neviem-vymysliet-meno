import { Question } from "./types/quiz-question";

export const questions: Question[] = [
    {
        question: 'What does SDLC stand for?',
        options: [
        ' Software Development Life Cycle',
        ' System Design Life Cycle',
        ' Software Design Life Cycle',
        ' System Development Life Cycle',
        ],
        answer: 0,
    },
    {
        question: 'Which of the following is NOT a phase of SDLC?',
        options: [' Requirement Analysis', ' Design', ' Implementation/Development', ' Usability Testing'],
        answer: 3,
    },
    {
        question: 'What is the main goal of the STLC?',
        options: [
        ' To manage software development',
        ' To ensure software meets requirements',
        ' To systematically test software and ensure quality',
        ' To design software architecture',
        ],
        answer: 2,
    },
    {
        question: 'What does STLC stand for?',
        options: [
        ' Software Testing Life Cycle',
        ' System Testing Life Cycle',
        ' Software Technique Life Cycle',
        ' Systematic Testing Life Cycle',
        ],
        answer: 0,
    },
    {
        question: 'Which phase comes immediately after the "Design" phase in SDLC?',
        options: [' Implementation/Development', ' Testing', ' Deployment', ' Maintenance'],
        answer: 0,
    },
    {
        question: 'During which phase of STLC are test cases developed?',
        options: [
        ' Requirement Analysis',
        ' Test Planning',
        ' Test Case Development',
        ' Test Execution',
        ],
        answer: 2,
    },
    {
        question: 'What is the purpose of the "Requirement Analysis" phase in SDLC?',
        options: [
        ' To develop test cases',
        ' To gather and analyze the software requirements',
        ' To design the system architecture',
        ' To maintain the software',
        ],
        answer: 1,
    },
    {
        question: 'Which of the following activities is performed during the "Test Planning" phase of STLC?',
        options: [
        ' Executing test cases',
        ' Writing test cases',
        ' Identifying test strategy and scope',
        ' Reporting bugs',
        ],
        answer: 2,
    },
    {
        question: 'What is the primary objective of functional testing?',
        options: [
        ' To test the performance of the software',
        ' To ensure the software functions according to the requirements',
        ' To test the security of the software',
        ' To find usability issues',
        ],
        answer: 1,
    },
    {
        question: 'Which of the following is a type of non-functional testing?',
        options: ['Regression Testing', 'Smoke Testing', 'Performance Testing', 'Unit Testing'],
        answer: 2,
    },
    {
        question: 'What is the difference between smoke testing and sanity testing?',
        options: [
        ' Smoke testing is performed to check critical functionalities; sanity testing is a subset of regression testing.',
        ' Smoke testing is a detailed testing; sanity testing is a broad testing.',
        ' Smoke testing is performed after deployment; sanity testing is performed before deployment.',
        ' Smoke testing is performed to ensure stability; sanity testing checks new functionalities after changes.',
        ],
        answer: 0,
    },
    {
        question: 'What is regression testing?',
        options: [
        ' Testing new features',
        ' Testing to ensure that new changes have not adversely affected existing functionalities',
        ' Testing to ensure the software meets performance standards',
        ' Testing to find security vulnerabilities',
        ],
        answer: 1,
    },
    {
        question: 'What is a test case?',
        options: [
        ' A document outlining the test strategy',
        ' A set of conditions under which a tester determines if a feature of an application is working correctly',
        ' A report detailing defects found',
        ' A plan for test execution',
        ],
        answer: 1,
    },
    {
        question: 'Which tool is commonly used for tracking and managing defects?',
        options: [' JIRA', ' Selenium', ' Postman', ' Git'],
        answer: 0,
    },
    {
        question: 'What is the main purpose of the "Test Execution" phase in STLC?',
        options: [
        ' To write test cases',
        ' To plan the testing activities',
        ' To execute the test cases and log defects',
        ' To analyze the test requirements',
        ],
        answer: 2,
    },
];