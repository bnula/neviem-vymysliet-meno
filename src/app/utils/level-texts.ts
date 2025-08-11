import { LevelSectionProps } from "./types/level-selection-props";
import { tasks } from "./tasks";

const levelTexts: LevelSectionProps[] = [
    {
        title: "Level 1: Introduction to Testing",
        objectives: [
            "Understand the basics of SDLC and STLC.",
            "Learn fundamental testing concepts."
        ],
        tasks: tasks.filter(t => t.level === 1),
        rewards: [
            'Badge: 👩‍🎓 "Testing Novice"',
            "🪙 60 pts"
        ],
        links: [
            {
                url: "https://www.baeldung.com/cs/sdlc-vs-stlc",
                text: "📖 Software Development and Testing Life Cycles"
            },
            {
                url: "https://www.tutorialspoint.com/sdlc/sdlc_overview.htm",
                text: "📖 SDLC - Overview"
            },
            {
                url: "https://clockwise.software/blog/software-testing-lifecycle/",
                text: "📖 A Complete Guide to the Software Testing Lifecycle (STLC)"
            },
            {
                url: "https://www.youtube.com/watch?v=5b36UTNRmtI&ab_channel=Simplilearn",
                text: "📺 What Is SDLC? | Introduction to Software Development Life Cycle"
            },
            {
                url: "https://www.youtube.com/watch?v=u6QfIXgjwGQ&ab_channel=Fireship",
                text: "📺 Software Testing Explained in 100 Seconds"
            },
            {
                url: "/home/quiz",
                text: "❔ Testicek"
            },
            {
                url: "/home/decka/1",
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
        tasks: tasks.filter(t => t.level === 2),
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
                url: "https://ucime-sa-veci.atlassian.net/jira/software/projects/TP/boards/2",
                text: "👾 Jira practice site"
            },
            {
                url: "/home/decka/2",
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
        tasks: tasks.filter(t => t.level === 3),
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
                url: "https://ucime-sa-veci.atlassian.net/jira/software/projects/TP/boards/2",
                text: "👾 Jira practice site"
            },
            {
                url: "/home/decka/3",
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
        tasks: tasks.filter(t => t.level === 4),
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
                url: "/home/decka/4",
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
        tasks: tasks.filter(t => t.level === 5),
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
                url: "/home/decka/5",
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
        tasks: tasks.filter(t => t.level === 6),
        rewards: [
            'Badge: 👩‍💻 "Programming Novice"',
            "🪙 400 pts"
        ],
        links: [
            {
                url: "https://www.makeuseof.com/tag/a-beginners-guide-to-the-windows-command-line/",
                text: "📋 Command Line Introduction"
            },
            {
                url: "https://imgv2-1-f.scribdassets.com/img/document/265250372/original/540a9ac768/1590308961?v=1",
                text: "🃏 CLI cheatsheet"
            },
            {
                url: "https://www.w3schools.com/git/default.asp",
                text: "✏️ Git Tutorial"
            },
            {
                url: "https://www.youtube.com/watch?v=mJ-qvsxPHpY&ab_channel=NickWhite",
                text: "🎦 Git Video Tutorial"
            },
            {
                url: "https://github.com/bnula/git-exercise/blob/main/pomocnicek.txt",
                text: "📎 Git exercise"
            },
            {
                url: "https://i.etsystatic.com/42159906/r/il/67295b/4829654914/il_1140xN.4829654914_evqb.jpg",
                text: "🃏 Git cheatsheet"
            },
            {
                url: "https://www.w3schools.com/html/html_intro.asp",
                text: "✏️ HTML Introduction"
            },
            {
                url: "https://www.youtube.com/watch?v=it1rTvBcfRg&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s&ab_channel=w3schools.com",
                text: "📹 HTML tutorial playlist"
            },
            {
                url: "https://www.w3schools.com/Css/css_intro.asp",
                text: "🎨 Introduction to CSS"
            },
            {
                url: "https://www.youtube.com/watch?v=1PnVor36_40&ab_channel=WebDevSimplified",
                text: "🎥 CSS video tutorial"
            },
            {
                url: "/home/decka/6",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 7: Javascript Basics",
        objectives: [
            "Gain foundational knowledge of Javascript.",
            "Understand the basics of writing scripts."
        ],
        tasks: tasks.filter(t => t.level === 7),
        rewards: [
            'Badge: 👩‍💻 "Javascript Novice"',
            "🪙 400 pts"
        ],
        links: [
            {
                url: "https://http.cat/",
                text: "😼 http status codes in cat 😹"
            },
            {
                url: "https://www.programiz.com/javascript/online-compiler/",
                text: "💻 Online editor"
            },
            {
                url: "https://www.tutorialrepublic.com/javascript-tutorial/javascript-syntax.php",
                text: "📜 JS Tutorial (+ zvysok toho tutorialu, mozes vynechat JS introduction, getting started a events)"
            },
            {
                url: "https://www.guru99.com/node-js-tutorial.html",
                text: "📜 Node.js Tutorial (prve 3 lekcie by mali stacit)"
            },
            {
                url: "https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org",
                text: "📺 freecodecamp tutorial, ma to 3 a pol hod + maju k tomu aj testik na stranke kde dostanes certifikatik 😅"
            },
            {
                url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code",
                text: "✅ testik s certifikatom, ide to od uplnych zakladov a konci to pri rekurzivnych funkciach"
            },
            {
                url: "https://www.youtube.com/watch?v=lkIFF4maKMU&ab_channel=Fireship",
                text: "📺 crash course na zakladne JS koncepty, ma to 12 min a je to nice na taky rychly overview"
            },
            {
                url: "https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship",
                text: "📺 crash course na typescript, podobne jak to video na JS"
            },
            {
                url: "https://www.youtube.com/watch?v=zQnBQ4tB3ZA&ab_channel=Fireship",
                text: "📺 typescript in 100 seconds"
            },
            {
                url: "https://www.youtube.com/watch?v=-MTSQjw5DrM&ab_channel=Fireship",
                text: "📺 rest api in 100 seconds + potom 10 minut kde typek vytvara API, ak chces vidiet, ako to funguje z tej 2. strany"
            }
        ]
    },
    {
        title: "Level 8: Basic Automation Awareness",
        objectives: [
            "Gain awareness of automation tools.",
            "Understand the basics of Selenium."
        ],
        tasks: tasks.filter(t => t.level === 8),
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
                url: "https://auto-test-app-kappa.vercel.app/",
                text: "🤖 Automation Test Site"
            },
            {
                url: "/home/decka/7",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 9: Test Management Tools",
        objectives: [
            "Learn to use test management tools.",
            "Understand the role of these tools in organizing test cases and test cycles."
        ],
        tasks: tasks.filter(t => t.level === 9),
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
                url: "/home/decka/8",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "Level 10: Behavioral and Soft Skills",
        objectives: [
            "Enhance communication and teamwork skills.",
            "Develop critical thinking and adaptability."
        ],
        tasks: tasks.filter(t => t.level === 10),
        rewards: [
            'Badge: 👯 "Team Player"',
            "🪙 150 pts"
        ],
        links: [
            {
                url: "/home/decka/9",
                text: "🐈‍⬛🐈"
            }
        ]
    },
    {
        title: "11 Boss Level: Final Challenge",
        objectives: [
            "Apply all learned skills in a mock interview.",
            "Demonstrate proficiency in manual testing."
        ],
        tasks: tasks.filter(t => t.level === 11),
        rewards: [
            'Badge: 🥳 "Certified Interview-ready Manual Tester"',
            "🪙 500 pts",
            "🥇 Certificate of Completion 🏅"
        ],
        links: [
            {
                url: "/home/decka/10",
                text: "🐈‍⬛🐈"
            }
        ]
    }
]

export default levelTexts