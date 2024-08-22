import { LevelSectionProps } from "./types/level-selection-props"

const levelTexts: LevelSectionProps[] = [
    {
        title: "Level 1: Introduction to Testing",
        objectives: [
            "Understand the basics of SDLC and STLC.",
            "Learn fundamental testing concepts."
        ],
        tasks: [
            {
                title: "👀 Read Articles",
                text: "Complete three beginner articles on SDLC and STLC."
            },
            {
                title: "📺 Watch Videos",
                text: "Watch two YouTube tutorials on basic testing concepts."
            },
            {
                title: "❔ Quiz",
                text: "Pass a quiz with at least 80% score on the learned concepts."
            }
        ],
        rewards: [
            'Badge: 👩‍🎓 "Testing Novice"',
            "🪙 60 pts"
        ],
        links: [
            {
                url: "https://www.baeldung.com/cs/sdlc-vs-stlc",
                text: "📖 Software Development and Testing Life Cycles (🪙 10)"
            },
            {
                url: "https://www.tutorialspoint.com/sdlc/sdlc_overview.htm",
                text: "📖 SDLC - Overview (🪙 10)"
            },
            {
                url: "https://clockwise.software/blog/software-testing-lifecycle/",
                text: "📖 A Complete Guide to the Software Testing Lifecycle (STLC) (🪙 10)"
            },
            {
                url: "https://www.youtube.com/watch?v=5b36UTNRmtI&ab_channel=Simplilearn",
                text: "📺 What Is SDLC? | Introduction to Software Development Life Cycle (🪙 10)"
            },
            {
                url: "https://www.youtube.com/watch?v=u6QfIXgjwGQ&ab_channel=Fireship",
                text: "📺 Software Testing Explained in 100 Seconds (🪙 10)"
            },
            {
                url: "/sdlc-quiz",
                text: "❔ Testicek (🪙 10)"
            },
            {
                url: "/decka/1",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 2: Writing and Executing Test Cases",
        objectives: [
            "Learn to write and execute test cases.",
            "Understand test case structure and components."
        ],
        tasks: [
            {
                title: "📖 Read Boring Ass theory",
                text: "Read on the theory of creating test cases. (🪙 40)"
            },
            {
                title: "✏️ Create a Few Test Cases",
                text: "Write 5 test cases for a sample application. (🪙 40)"
            },
            {
                title: "📝 Execute Test Cases",
                text: "Execute your test cases and document the results. (🪙 40)"
            }
        ],
        rewards: [
            'Badge: 🗺️ "Test Case Creator"',
            "🪙 120 pts"
        ],
        links: [
            {
                url: "https://www.guru99.com/test-case.html",
                text: "📖 How to Write Test Cases with Examples"
            },
            {
                url: "https://academybugs.com/find-bugs/",
                text: "🌐 Practice Site"
            },
            {
                url: "/decka/2",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 3: Defect Reporting and Management",
        objectives: [
            "Understand how to report and manage defects.",
            "Learn to use a defect tracking tool."
        ],
        tasks: [
            {
                title: "📖 Read Articles",
                text: "Read articles on defect life cycle and defect reporting. (🪙 40)"
            },
            {
                title: "🛠️ Tool Setup",
                text: "Set up a bug tracking tool (e.g., JIRA) and report 3 sample defects. (🪙 40)"
            },
            {
                title: "🗣️ Role-Playing",
                text: "Participate in a role-playing exercise to practice reporting and tracking defects. (🪙 40)"
            }
        ],
        rewards: [
            '🪳 "Bug Hunter"',
            "🪙 120 pts"
        ],
        links: [
            {
                url: "https://www.browserstack.com/guide/how-to-write-a-bug-report",
                text: "📖 Write Good Bug Reports Effortlessly"
            },
            {
                url: "https://www.bandicam.com/downloads/",
                text: "🛠️ Bandicam Screen Recorder"
            },
            {
                url: "/decka/3",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 4: API Testing",
        objectives: [
            "Understand the basics of API testing.",
            "Learn to use tools like Postman for API testing."
        ],
        tasks: [
            {
                title: "📖 Read Articles",
                text: "Read articles on the fundamentals of API testing. (🪙 40)"
            },
            {
                title: "📺 Watch Tutorials",
                text: "Watch video tutorials on using Postman for API testing. (🪙 40)"
            },
            {
                title: "🛠️ Tool Setup",
                text: "Install Postman and explore its interface. (🪙 40)"
            },
            {
                title: "🖨️ Basic API Requests",
                text: "Create and send basic GET and POST requests using Postman. (🪙 50)"
            },
            {
                title: "🏇 API Testing Challenge",
                text: "Perform testing on a sample API, including creating test cases for different endpoints. (🪙 50)"
            },
            {
                title: "📃 Document Findings",
                text: "Document your API testing process and findings. (🪙 40)"
            }
        ],
        rewards: [
            'Badge: 🖱️ "API Tester"',
            "🪙 260 pts"
        ],
        links: [
            {
                url: "https://testsigma.com/guides/api-testing/",
                text: "📖 API Testing : What It is, How to Test & Best Practices"
            },
            {
                url: "https://medium.com/@S3Curiosity/http-requests-and-responses-a-beginners-guide-fc215b9ea741",
                text: "📖 HTTP Requests and Responses: A Beginner's Guide"
            },
            {
                url: "https://www.youtube.com/watch?v=ypKHnRmPOUk&ab_channel=TomDoesTech",
                text: "📺 Learn Postman in 15 Minutes"
            },
            {
                url: "/decka/4",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 5: SQL for Testers",
        objectives: [
            "Learn basic SQL queries.",
            "Understand how to use SQL for database testing."
        ],
        tasks: [
            {
                title: "📺 Watch Tutorials",
                text: "Watch SQL tutorial for beginners. (🪙 40)"
            },
            {
                title: "📝 Practice Queries",
                text: "Write and execute 5 basic SQL queries (e.g., SELECT, INSERT). (🪙 60)"
            },
            {
                title: "🏇 Database Challenge",
                text: "Complete a database testing challenge using your SQL skills. (🪙 100)"
            }
        ],
        rewards: [
            'Badge: 📅 "SQL Explorer"',
            "🪙 200 pts"
        ],
        links: [
            {
                text: "📺 Learn Basic SQL in 15 Minutes",
                url: "https://www.youtube.com/watch?v=kbKty5ZVKMY&ab_channel=AdamFiner-LearnBIOnline"
            },
            {
                url: "/decka/5",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 6: Basic Algorythmic Thinking",
        objectives: [
            "Gain awareness of basic algorythmic tools.",
            "Understand the basics of writing scripts."
        ],
        tasks: [
            {
                title: "🗣️ Introductory Talk",
                text: "Suffer through me trying to teach you about for loops and stuff.  (🪙 tolko bodov na svete neexistuje, ale 100 I guess 😅😅)"
            },
            {
                title: "🪢 Git basics",
                text: "Get basic understanding of git - what it is, basic commands (pull, push, merge). (🪙 75)"
            },
            {
                title: "🌐 Learn how websites are made",
                text: "Go over basics of HTML. (🪙 75)"
            },
            {
                title: "🛠️ Tool Exploration",
                text: "Install VS Code and write a simple script. (🪙 50)"
            },
            {
                title: "🏇 Mini Project",
                text: "Write your name to a console letter by letter. (🪙 100)"
            }
        ],
        rewards: [
            'Badge: 👩‍💻 "Programming Novice"',
            "🪙 400 pts"
        ],
        links: [
            {
                url: "https://www.w3schools.com/git/default.asp",
                text: "✏️ Git Tutorial"
            },
            {
                url: "https://www.w3schools.com/html/html_intro.asp",
                text: "✏️ HTML Introduction"
            },
            {
                url: "/decka/6",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 7: Basic Automation Awareness",
        objectives: [
            "Gain awareness of automation tools.",
            "Understand the basics of Selenium."
        ],
        tasks: [
            {
                title: "📺 Introductory Video",
                text: "Watch an introductory video on Selenium and Gherkin. (🪙 50)"
            },
            {
                title: "🛠️ Tool Exploration",
                text: "Install Selenium and run a simple test script. (🪙 50)"
            },
            {
                title: "🏇 Mini Project",
                text: "Write a basic script to automate a simple test case. (🪙 50)"
            }
        ],
        rewards: [
            'Badge: 🏧 "Automation Beginner"',
            "🪙 200 pts"
        ],
        links: [
            {
                url: "https://www.youtube.com/watch?v=4hCegUxWKBQ&list=PLSK6YK5OGX1AuQy0tbvdKBV9mrKi46kKH&index=4&ab_channel=RobotFramework",
                text: "Robot Framework Tutorial Episode 5 - Test case example"
            },
            {
                url: "https://www.youtube.com/watch?v=Twx4MtrfuSg&ab_channel=QAUnderground",
                text: "Intro to Gherkin | How To Write A Test In Gherkin"
            },
            {
                url: "/decka/7",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 8: Test Management Tools",
        objectives: [
            "Learn to use test management tools.",
            "Understand the role of these tools in organizing test cases and test cycles."
        ],
        tasks: [
            {
                title: "📖 Read Guides",
                text: "Read user guides for tools like TestRail. (🪙 50)"
            },
            {
                title: "🛠️ Tool Setup",
                text: "Set up a test project in TestRail or a similar tool. (🪙 50)"
            },
            {
                title: "🏇 Project Simulation",
                text: "Simulate a test cycle using the tool. (🪙 50)"
            }
        ],
        rewards: [
            'Badge: 👩‍💼 "Test Manager"',
            "🪙 150 pts"
        ],
        links: [
            {
                url: "https://www.youtube.com/watch?v=YrCRx232XI4&t=75s&ab_channel=TestRail",
                text: "TestRail Product Demo"
            },
            {
                url: "/decka/8",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 9: Behavioral and Soft Skills",
        objectives: [
            "Enhance communication and teamwork skills.",
            "Develop critical thinking and adaptability."
        ],
        tasks: [
            {
                title: "🗣️ Role-Playing",
                text: "Participate in a role-playing session to simulate defect reporting. (🪙 50)"
            },
            {
                title: "🎭 Group Project",
                text: "Describe how you work in a team setting. (🪙 50)"
            },
            {
                title: "📝 Feedback Session",
                text: "Receive and provide feedback on test cases and reports. (🪙 50)"
            }
        ],
        rewards: [
            'Badge: 👯 "Team Player"',
            "🪙 150 pts"
        ],
        links: [
            {
                url: "/decka/9",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Boss Level: Final Challenge",
        objectives: [
            "Apply all learned skills in a mock interview.",
            "Demonstrate proficiency in manual testing."
        ],
        tasks: [
            {
                title: "🗣️ Capstone Project",
                text: "Complete a full mock interview, including requirement analysis, test case writing, execution, defect reporting, and test management. (🪙 200)"
            },
            {
                title: "🎞️ Presentation",
                text: "Present yourself in the best light in a stressful situation. (🪙 150)"
            },
            {
                title: "🤔 Reflection",
                text: "Write a reflection on your learning journey and areas for improvement. (🪙 150)"
            }
        ],
        rewards: [
            'Badge: 🥳 "Certified Interview-ready Manual Tester"',
            "🪙 500 pts",
            "🥇 Certificate of Completion 🏅"
        ],
        links: [
            {
                url: "/decka/10",
                text: "🐈‍⬛🐈"
            }
        ]
    }
]

export default levelTexts