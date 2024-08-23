import { CatsExplanation } from "@/app/utils/types/cats-explanation";

const catsExplanation: CatsExplanation[] = [
    {
        level: 1,
        content: `<h2>Imagine you have two cats, Indy and Grey (random names, not specific AT ALL 😏). They want to build a cat house together.</h2>
        <h3><br /> SDLC (Software Development Life Cycle):</h3>
        <p>This is like the plan Indy and Grey make to build their cat house. They decide what they need (requirements), draw a blueprint (design), gather materials (development), build the house (implementation), make sure it's sturdy (testing), and then move in (deployment and maintenance).</p>
        <h3>STLC (Software Testing Life Cycle):</h3>
        <p>Now, Indy wants to make sure the cat house is perfect. So, he checks the blueprint (requirement analysis), plans how he will test each part (test planning), gets his testing tools ready (test case development), tests each part as they build it (test execution), checks if there are any issues (test reporting), makes sure all issues are fixed (retesting and regression testing), and finally declares the house ready (test closure).</p>`
    },
    {
        level: 2,
        content: `<h2>Imagine Indy and Grey are now in their cat house, and they want to make sure all the rooms are perfect.</h2>
        <br>
        <h3>Writing Test Cases:</h3>
        <p>Indy and Grey sit down and think about everything that needs to be checked to ensure the cat house is comfy and safe.</p>
        <p>Test Case Structure: Each test case will have:</p>
        <ul class="list-disc list-inside">
            <li><em>Title</em>: A short description of what is being tested, like &quot;Check Bed Comfiness.&quot;</li>
            <li><em>Steps</em>: Detailed steps on how to perform the test. For example, &quot;1. Jump on the bed, 2. Lie down for 5 minutes.&quot;</li>
            <li><em>Expected Result</em>: What should happen if everything is okay, like &quot;The bed should feel soft and cozy.&quot;</li>
            <li><em>Actual Result</em>: What actually happened during the test.</li>
            <li><em>Status</em>: Whether the test passed or failed.</li>
        </ul>
        <h4><br>Indy writes a test case for each important aspect of the cat house. Here are five examples:</h4>
        <ul class="list-disc list-inside">
            <li>Test Case 1: Check Bed Comfiness<ul class="list-disc list-inside">
                    <li>Steps:<ol>
                            <li>Jump on the bed</li>
                            <li>Lie down for 5 minutes.</li>
                        </ol>
                    </li>
                    <li>Expected Result:<ul class="list-disc list-inside">
                            <li>The bed should feel soft and cozy.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Test Case 2: Check Food Bowl<ul class="list-disc list-inside">
                    <li>Steps:<ol>
                            <li>Look at the food bowl</li>
                            <li>Check if it&apos;s full.</li>
                        </ol>
                    </li>
                    <li>Expected Result:<ul class="list-disc list-inside">
                            <li>The food bowl should be full.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Test Case 3: Check Scratching Post Strength<ul class="list-disc list-inside">
                    <li>Steps:<ol>
                            <li>Scratch the post for 3 minutes.</li>
                        </ol>
                    </li>
                    <li>Expected Result:<ul class="list-disc list-inside">
                            <li>The post should not wobble or break.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Test Case 4: Check Window View<ul class="list-disc list-inside">
                    <li>Steps:<ol>
                            <li>Look out the window</li>
                            <li>Observe the view for 5 minutes.</li>
                        </ol>
                    </li>
                    <li>Expected Result:<ul class="list-disc list-inside">
                            <li>The view should be interesting and have birds or other fun things to watch.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Test Case 5: Check Litter Box Cleanliness<ul class="list-disc list-inside">
                    <li>Steps:<ol>
                            <li>Inspect the litter box</li>
                            <li>Smell to check for odors.</li>
                        </ol>
                    </li>
                    <li>Expected Result:<ul class="list-disc list-inside">
                            <li>The litter box should be clean and odor-free.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <br>
        <h3>Executing Test Cases</h3>
        <ul class="list-disc list-inside">
            <li>Grey takes Indy&apos;s list and starts performing the tests one by one.</li>
            <li>Execution Process: For each test case, Grey follows the steps exactly as written and observes the results.</li>
            <li>Documenting Results: After each test, Grey writes down whether the actual result matched the expected result.</li>
            <li>For example, when testing the bed, if it feels soft and cozy, Grey writes &quot;Passed.&quot; If it feels hard, he writes &quot;Failed&quot; and notes the issue.</li>
            <li>Handling Failures: If any test fails, Grey notes what went wrong. For instance, if the scratching post wobbles, he writes that the post needs to be fixed or replaced.</li>
        </ul>
        <h4>Here are the results Grey documented:</h4>
        <ul class="list-disc list-inside">
            <li>Test Case 1: Check Bed Comfiness<ul class="list-decimal list-inside">
                    <li>Actual Result: The bed was soft and cozy.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
            <li>Test Case 2: Check Food Bowl<ul class="list-decimal list-inside">
                    <li>Actual Result: The food bowl was half-empty.</li>
                    <li>Status: Failed (Needs more food)</li>
                </ul>
            </li>
            <li>Test Case 3: Check Scratching Post Strength<ul class="list-decimal list-inside">
                    <li>Actual Result: The post was sturdy and strong.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
            <li>Test Case 4: Check Window View<ul class="list-decimal list-inside">
                    <li>Actual Result: The view showed birds flying by.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
            <li>Test Case 5: Check Litter Box Cleanliness<ul class="list-decimal list-inside">
                    <li>Actual Result: The litter box was clean with no odors.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
        </ul>`
    },
    {
        level: 3,
        content: `<p>Now, Indy and Grey need to manage the defects (problems) they found in their cat house.</p>
        <br>
        <ol class="list-decimal list-inside">
            <li>
                <p><strong>Defect Life Cycle:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Imagine Indy finds a crack in the wall of their cat house. He needs to tell Grey about it so they can fix it.</li>
                    <li><strong>Defect Life Cycle:</strong>This is the journey of a defect from when it&rsquo;s found to when it&rsquo;s fixed.<ul class="list-disc list-inside">
                            <li><strong>New:</strong> Indy finds the crack and reports it.</li>
                            <li><strong>Assigned:</strong> Grey sees the report and decides to fix it.</li>
                            <li><strong>Open:</strong> Grey starts fixing the crack.</li>
                            <li><strong>Fixed:</strong> Grey repairs the crack.</li>
                            <li><strong>Retest:</strong> Indy checks to make sure the crack is really fixed.</li>
                            <li><strong>Closed:</strong> Indy confirms it&rsquo;s fixed and marks the defect as closed.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Reporting Defects:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy needs to give Grey all the details about the crack so Grey can fix it.</li>
                    <li><strong>Defect Report Components:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Title:</strong> A short description of the defect, like &quot;Crack in Living Room Wall.&quot;</li>
                            <li><strong>Description:</strong> Details about the defect, &quot;There is a visible crack on the left side of the living room wall.&quot;</li>
                            <li><strong>Steps to Reproduce:</strong> How to find the defect, &quot;1. Go to the living room, 2. Look at the left wall.&quot;</li>
                            <li><strong>Expected Result:</strong> What should be there instead, &quot;The wall should be smooth and crack-free.&quot;</li>
                            <li><strong>Actual Result:</strong> What&rsquo;s actually there, &quot;A visible crack is present.&quot;</li>
                            <li><strong>Severity:</strong> How bad the defect is, &quot;Medium&quot; or &quot;High&quot; depending on how serious it is.</li>
                            <li><strong>Attachments:</strong> Any pictures or videos showing the defect.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Using a Bug Tracking Tool:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey decide to use a tool to keep track of all the defects in their cat house.</li>
                    <li><strong>Setting Up the Tool:</strong>
                        <ul class="list-disc list-inside">
                            <li>They choose a tool like JIRA and set up a project called &quot;Cat House Defects.&quot;</li>
                            <li>Indy reports the crack in the wall, an empty food bowl, and a wobbly scratching post as defects in the tool.</li>
                        </ul>
                    </li>
                    <li><strong>Reporting Sample Defects:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Defect 1: Crack in Living Room Wall</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Title:</strong> Crack in Living Room Wall</li>
                                    <li><strong>Description:</strong> Visible crack on the left side of the living room wall.</li>
                                    <li><strong>Steps to Reproduce:</strong> 1. Go to the living room, 2. Look at the left wall.</li>
                                    <li><strong>Expected Result:</strong> The wall should be smooth and crack-free.</li>
                                    <li><strong>Actual Result:</strong> A visible crack is present.</li>
                                    <li><strong>Severity:</strong> Medium</li>
                                    <li><strong>Attachments:</strong> Picture of the crack.</li>
                                </ul>
                            </li>
                            <li><strong>Defect 2: Empty Food Bowl</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Title:</strong> Empty Food Bowl</li>
                                    <li><strong>Description:</strong> The food bowl is not filled to the top.</li>
                                    <li><strong>Steps to Reproduce:</strong> 1. Go to the kitchen, 2. Look at the food bowl.</li>
                                    <li><strong>Expected Result:</strong> The food bowl should be full.</li>
                                    <li><strong>Actual Result:</strong> The food bowl is half-empty.</li>
                                    <li><strong>Severity:</strong> High</li>
                                    <li><strong>Attachments:</strong> Picture of the food bowl.</li>
                                </ul>
                            </li>
                            <li><strong>Defect 3: Wobbly Scratching Post</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Title:</strong> Wobbly Scratching Post</li>
                                    <li><strong>Description:</strong> The scratching post wobbles when scratched.</li>
                                    <li><strong>Steps to Reproduce:</strong> 1. Scratch the post for 3 minutes.</li>
                                    <li><strong>Expected Result:</strong> The post should be sturdy and stable.</li>
                                    <li><strong>Actual Result:</strong> The post wobbles.</li>
                                    <li><strong>Severity:</strong> Medium</li>
                                    <li><strong>Attachments:</strong> Video of the wobbly post.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 4,
        content: `<p>Now, Indy and Grey are curious about how the different parts of their cat house talk to each other. They want to test the communication between these parts, just like how APIs (Application Programming Interfaces) work in software.</p>
        <br>
        <ol class="list-decimal list-inside">
            <li>
                <p><strong>Understanding APIs:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Imagine Indy wants to ask Grey if the food bowl is full. Indy sends a message, &quot;Is the food bowl full?&quot; and Grey replies, &quot;Yes, it is!&quot; This message exchange is similar to how APIs work.</li>
                    <li><strong>API (Application Programming Interface):</strong> It&rsquo;s a way for different parts of a system to communicate. For example, a weather app talks to a weather service API to get the latest weather data.</li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Setting Up Postman:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey install Postman on their computer. They open it and explore its interface.</li>
                    <li><strong>Postman Interface:</strong> It has different sections like the request builder (where you create and send messages) and the response viewer (where you see the replies).</li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Creating and Sending Basic API Requests:</strong></p>
                <ul class="list-disc list-inside">
                    <li><strong>GET Request:</strong>Indy sends a message to Grey asking for the current status of the food bowl. In Postman, this is done by creating a GET request.<ul class="list-disc list-inside">
                            <li><strong>Example:</strong> Indy types the message &quot;GET /foodbowl/status&quot; and sends it. Grey replies with &quot;The food bowl is full,&quot; which Indy sees in the response viewer.</li>
                        </ul>
                    </li>
                    <li><strong>POST Request:</strong>Grey sends a message to Indy to update the status of the scratching post. In Postman, this is done by creating a POST request.<ul class="list-disc list-inside">
                            <li><strong>Example:</strong> Grey types the message &quot;POST /scratchingpost/update&quot; with details like &quot;new status: stable&quot; and sends it. Indy confirms the update in the response viewer.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>API Testing Challenge:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey take on a challenge to test a sample API. They create test cases for different API endpoints (places where they send messages).<ul class="list-disc list-inside">
                            <li><strong>Test Case 1: Check Food Bowl Status</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Request:</strong> GET /foodbowl/status</li>
                                    <li><strong>Expected Result:</strong> Response should be &quot;The food bowl is full.&quot;</li>
                                </ul>
                            </li>
                            <li><strong>Test Case 2: Update Scratching Post Status</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Request:</strong> POST /scratchingpost/update</li>
                                    <li><strong>Data:</strong> { &quot;new status&quot;: &quot;stable&quot; }</li>
                                    <li><strong>Expected Result:</strong> Response should confirm &quot;Scratching post status updated to stable.&quot;</li>
                                </ul>
                            </li>
                            <li><strong>Test Case 3: Get Window View</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Request:</strong> GET /window/view</li>
                                    <li><strong>Expected Result:</strong> Response should be &quot;Birds are visible.&quot;</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Documenting Findings:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey document their API testing process and findings.</li>
                    <li><strong>Documentation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>API Endpoints Tested:</strong> List of endpoints they tested.</li>
                            <li><strong>Test Cases:</strong> Details of each test case, including the request, expected result, actual result, and status (passed/failed).</li>
                            <li><strong>Issues Found:</strong> Any problems they discovered during testing.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 5,
        content: `<h2>Now, Indy and Grey want to understand how to look inside the database of their cat house system, where all their activities and statuses are stored.</h2>
        <br>
        <ol class="list-decimal list-inside>
            <li>
                <p><strong>Understanding SQL (Structured Query Language):</strong></p>
                <ul class="list-disc list-inside">
                    <li>Imagine Indy and Grey have a big book where they write down everything that happens in the cat house. This book is like a database.</li>
                    <li><strong>SQL:</strong> SQL is like a special language they use to ask questions about what&rsquo;s in the book or to write new things in the book.</li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Watching Tutorials:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey watch a tutorial to learn how to use SQL. They learn that SQL helps them find specific information, add new information, or change existing information in the database.</li>
                    <li><strong>Tutorial Example:</strong>They see examples of simple commands like:<ul class="list-disc list-inside">
                            <li><strong>SELECT:</strong> To find things in the book.</li>
                            <li><strong>INSERT:</strong> To add new things to the book.</li>
                            <li><strong>UPDATE:</strong> To change things that are already in the book.</li>
                            <li><strong>DELETE:</strong> To remove things from the book.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Practicing Basic SQL Queries:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey practice writing and executing SQL queries. They try out five basic queries:<ul class="list-disc list-inside">
                            <li><strong>SELECT:</strong>
                                <ul class="list-disc list-inside">
                                    <li>Indy wants to find out all the activities logged in the database.</li>
                                    <li><strong>Query:</strong><code>SELECT * FROM activities;</code></li>
                                    <li><strong>Explanation:</strong> This query asks the database to show all the entries in the &quot;activities&quot; table.</li>
                                </ul>
                            </li>
                            <li><strong>INSERT:</strong>
                                <ul class="list-disc list-inside">
                                    <li>Grey wants to add a new entry about finding a new toy.</li>
                                    <li><strong>Query:</strong><code>INSERT INTO activities (description, date) VALUES (&apos;Found a new toy&apos;, &apos;2024-08-04&apos;);</code></li>
                                    <li><strong>Explanation:</strong> This query adds a new entry with the description &quot;Found a new toy&quot; and the date &quot;2024-08-04.&quot;</li>
                                </ul>
                            </li>
                            <li><strong>UPDATE:</strong>
                                <ul class="list-disc list-inside">
                                    <li>Indy wants to update the status of the food bowl.</li>
                                    <li><strong>Query:</strong><code>UPDATE activities SET status = &apos;full&apos; WHERE activity = &apos;food bowl&apos;;</code></li>
                                    <li><strong>Explanation:</strong> This query changes the status of the activity &quot;food bowl&quot; to &quot;full.&quot;</li>
                                </ul>
                            </li>
                            <li><strong>DELETE:</strong>
                                <ul class="list-disc list-inside">
                                    <li>Grey wants to delete an old entry about a broken toy.</li>
                                    <li><strong>Query:</strong><code>DELETE FROM activities WHERE description = &apos;Broken toy&apos;;</code></li>
                                    <li><strong>Explanation:</strong> This query removes the entry with the description &quot;Broken toy.&quot;</li>
                                </ul>
                            </li>
                            <li><strong>SELECT with Condition:</strong>
                                <ul class="list-disc list-inside">
                                    <li>Indy wants to find all the activities that happened today.</li>
                                    <li><strong>Query:</strong><code>SELECT * FROM activities WHERE date = &apos;2024-08-04&apos;;</code></li>
                                    <li><strong>Explanation:</strong> This query asks for all the entries in the &quot;activities&quot; table where the date is &quot;2024-08-04.&quot;</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Database Challenge:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey take on a challenge to test the database. They perform various tasks like finding, adding, updating, and deleting entries.<ul class="list-disc list-inside">
                            <li><strong>Challenge Task 1:</strong>Find all the activities related to toys.<ul class="list-disc list-inside">
                                    <li><strong>Query:</strong><code>SELECT * FROM activities WHERE description LIKE &apos;%toy%&apos;;</code></li>
                                </ul>
                            </li>
                            <li><strong>Challenge Task 2:</strong>Add a new activity about catching a mouse.<ul class="list-disc list-inside">
                                    <li><strong>Query:</strong><code>INSERT INTO activities (description, date) VALUES (&apos;Caught a mouse&apos;, &apos;2024-08-04&apos;);</code></li>
                                </ul>
                            </li>
                            <li><strong>Challenge Task 3:</strong>Update the status of the scratching post activity to &quot;repaired.&quot;<ul class="list-disc list-inside">
                                    <li><strong>Query:</strong><code>UPDATE activities SET status = &apos;repaired&apos; WHERE description = &apos;Scratching post&apos;;</code></li>
                                </ul>
                            </li>
                            <li><strong>Challenge Task 4:</strong>Delete the entry about a spilled water bowl.<ul class="list-disc list-inside">
                                    <li><strong>Query:</strong><code>DELETE FROM activities WHERE description = &apos;Spilled water bowl&apos;;</code></li>
                                </ul>
                            </li>
                            <li><strong>Challenge Task 5:</strong>Find all activities logged in the past week.<ul class="list-disc list-inside">
                                    <li><strong>Query:</strong><code>SELECT * FROM activities WHERE date &gt;= &apos;2024-07-28&apos;;</code></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Documenting Findings:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey document their database testing process and findings.</li>
                    <li><strong>Documentation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>SQL Queries Used:</strong> List of all the queries they wrote.</li>
                            <li><strong>Results:</strong> What each query returned or affected in the database.</li>
                            <li><strong>Issues Found:</strong> Any problems they encountered during testing, like incorrect entries or errors in the database.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 6,
        content: `<p>Now, Indy and Grey want to learn how to think like programmers and write simple scripts to automate their tasks.</p>
        <br>
        <ol class="list-decimal list-inside>
            <li>
                <p><strong>Understanding Basic Programming Concepts:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Imagine Indy wants to find all the balls scattered around the house. Instead of looking everywhere at once, he follows a set of steps: look in the living room, then the kitchen, then the bedroom, and so on. This set of steps is like an algorithm.</li>
                    <li><strong>Algorithm:</strong>A series of steps or instructions to solve a problem.<ul class="list-disc list-inside">
                            <li><strong>Loops:</strong> If Indy wants to look under each piece of furniture in the living room, he repeats the same action (looking under furniture) for each piece. This repetition is a loop.</li>
                            <li><strong>Conditions:</strong> If Indy only wants to look for balls when it&rsquo;s not nap time, he checks the condition, &quot;Is it nap time?&quot; If the answer is &quot;No,&quot; he continues; if &quot;Yes,&quot; he stops and naps.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Learning Git Basics:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey decide to learn Git to keep track of changes in their scripts and work together on projects.</li>
                    <li><strong>Git:</strong>A tool to manage and track changes in code.<ul class="list-disc list-inside">
                            <li><strong>Pull:</strong> Fetching the latest changes from the repository.</li>
                            <li><strong>Push:</strong> Sending your changes to the repository.</li>
                            <li><strong>Merge:</strong> Combining changes from different branches (versions) of the code.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Understanding HTML Basics:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey learn HTML to understand how websites are made.</li>
                    <li><strong>HTML (HyperText Markup Language):</strong>The language used to create webpages.<ul class="list-disc list-inside">
                            <li><strong>Tags:</strong> HTML uses tags like <code>&lt;p&gt;</code> for paragraphs, <code>&lt;h1&gt;</code> for headings, and <code>&lt;a&gt;</code> for links to structure content on a webpage.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Mini Project - Writing a Script:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey write a simple script to display their names letter by letter on the console.</li>
                    <li><strong>Example Script:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>python:</strong></li>
                            <br>
                                <pre><div><div><code>name = &quot;Indy&quot;
for letter in name:
print(letter)
        </code></div></div></pre>
                        </ul>
                    </li>
                    <li><strong>Explanation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Variable:</strong> <code>name</code> stores the string &quot;Indy.&quot;</li>
                            <li><strong>Loop:</strong> The <code>for</code> loop goes through each letter in the name and prints it.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Documenting Findings:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey document their learning and practice with basic programming concepts.</li>
                    <li><strong>Documentation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Concepts Learned:</strong> List of programming concepts they explored.</li>
                            <li><strong>Scripts Written:</strong> Examples of scripts they wrote, like the one displaying their names.</li>
                            <li><strong>Challenges Faced:</strong> Any difficulties they encountered and how they overcame them.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 7,
        content: `<p>Indy and Grey are curious about making their testing work easier and faster. They discover that automation tools can help them with repetitive tasks, and they decide to learn how to use these tools, starting with the Robot Framework.</p>
        <br>
    <ol class="list-decimal list-inside">
        <li>
            <p><strong>Introductory Video on Selenium and Gherkin:</strong></p>
            <ul class="list-disc list-inside">
                <li><strong>Selenium:</strong> Indy and Grey learn that Selenium is a tool that lets them control a web browser automatically. It&apos;s like getting a robot to do their clicking and typing for them.</li>
                <li><strong>Gherkin:</strong> Gherkin is a way to write down what they want the robot to do in plain language. It&rsquo;s like giving the robot a to-do list.</li>
                <li><strong>Why Learn This:</strong> Just like how Indy and Grey can train themselves to do the same things every day, they can train a robot to handle routine testing tasks, freeing up time for more important work.</li>
            </ul>
        </li>
        <br>
        <li>
            <p><strong>Tool Exploration with Robot Framework:</strong></p>
            <ul class="list-disc list-inside">
                <li>Indy and Grey decide to explore the Robot Framework, which uses Selenium to automate web testing.</li>
                <li><strong>Robot Framework:</strong> It&rsquo;s a tool that helps them write test cases in a simple, human-readable language, making it easier to automate tests.</li>
                <li><strong>Installation:</strong> They install Robot Framework on their computer, along with the necessary libraries to start automating tasks in a web browser.</li>
                <li><strong>Example Task:</strong>Indy and Grey create a simple script to automate checking if their favorite cat toy website is up and running.<ul class="list-disc list-inside">
                        <li>*** Settings *** Library &nbsp; &nbsp;SeleniumLibrary *** Test Cases *** Check Cat Toy Website &nbsp; &nbsp;Open Browser &nbsp; &nbsp;https://www.cat-toys.com &nbsp; &nbsp;chrome &nbsp; &nbsp;Title Should Be &nbsp; &nbsp;Cat Toys - Home of the Best Cat Toys &nbsp; &nbsp;Close Browser</li>
                    </ul>
                </li>
                <li><strong>Explanation:</strong> This script opens a web browser, goes to the cat toy website, checks the title of the page to make sure they&rsquo;re on the right site, and then closes the browser. It&rsquo;s a simple automation that helps Indy and Grey check the website without having to do it manually.</li>
            </ul>
        </li>
        <br>
        <li>
            <p><strong>Mini Project - Automating a Simple Test Case:</strong></p>
            <ul class="list-disc list-inside">
                <li>Indy and Grey decide to write a slightly more advanced script using the Robot Framework.</li>
                <li><strong>Task:</strong>Automate a login process on the website.<ul class="list-disc list-inside">
                        <li>*** Settings *** Library &nbsp; &nbsp;SeleniumLibrary *** Variables *** {USERNAME} &nbsp; &nbsp;IndyGrey {PASSWORD} &nbsp; &nbsp;Paws123 *** Test Cases *** Log In to Cat Toy Website &nbsp; &nbsp;Open Browser &nbsp; &nbsp;https://www.cat-toys.com/login &nbsp; &nbsp;chrome &nbsp; &nbsp;Input Text &nbsp; &nbsp;id=username &nbsp; &nbsp;{USERNAME} &nbsp; &nbsp;Input Text &nbsp; &nbsp;id=password &nbsp; &nbsp;{PASSWORD} &nbsp; &nbsp;Click Button &nbsp; &nbsp;id=loginButton &nbsp; &nbsp;Title Should Be &nbsp; &nbsp;Cat Toys - User Dashboard &nbsp; &nbsp;Close Browser</li>
                    </ul>
                </li>
                <li><strong>Explanation:</strong> In this script, Indy and Grey automate logging into the website. They enter a username and password, click the login button, and check if they successfully land on the user dashboard page. This script saves them time, as they no longer need to log in manually each time they want to check their account.</li>
            </ul>
        </li>
        <br>
        <li>
            <p><strong>Understanding the Concepts:</strong></p>
            <ul class="list-disc list-inside">
                <li><strong>Automation Tools:</strong> Like how a toy can keep a cat entertained for hours without needing human interaction, automation tools like Robot Framework keep the testing process running without Indy and Grey having to do it all manually.</li>
                <li><strong>Scripting:</strong> Writing scripts is like setting up a series of dominoes; once you push the first one, everything follows. Indy and Grey set up the scripts, and the tests run automatically, just like the dominoes falling.</li>
                <li><strong>Robot Framework:</strong> Think of Robot Framework as the cat&rsquo;s toy launcher. It does the work of throwing the toy (running the test) so Indy and Grey can focus on other things.</li>
            </ul>
        </li>
        <br>
        <li>
            <p><strong>Project Reflection:</strong></p>
            <ul class="list-disc list-inside">
                <li>After completing their mini-project, Indy and Grey reflect on how automation can make their lives easier by handling repetitive tasks. They recognize the importance of understanding the tools, learning to write clear scripts, and thinking logically to automate effectively.</li>
            </ul>
        </li>
    </ol>`
    },
    {
        level: 8,
        content: `<p>Now, Indy and Grey want to organize their testing activities and keep track of their progress using test management tools.</p>
        <br>
        <ol class="list-decimal list-inside">
            <li>
                <p><strong>Understanding Test Management Tools:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Imagine Indy and Grey have many different tests to run every day, like checking the food bowl, scratching post, and litter box. Keeping track of all these tests can be confusing.</li>
                    <li><strong>Test Management Tools:</strong> These tools help them organize and manage all their test cases and track their progress.</li>
                    <li><strong>Example:</strong> Tools like TestRail help them create test plans, run tests, and report results in a systematic way.</li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Reading User Guides:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey read guides to understand how to use TestRail.</li>
                    <li><strong>User Guide Example:</strong>They learn about key features like:<ul class="list-disc list-inside">
                            <li><strong>Creating Test Cases:</strong> Writing detailed test cases for each task.</li>
                            <li><strong>Test Runs:</strong> Organizing test cases into test runs for execution.</li>
                            <li><strong>Reporting:</strong> Generating reports to see which tests passed or failed.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Setting Up a Test Project:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey set up a test project in TestRail.</li>
                    <li><strong>Project Setup:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Creating a Project:</strong> They create a new project called &quot;Cat House Tests.&quot;</li>
                            <li><strong>Adding Test Cases:</strong> They add test cases for different tasks like checking the food bowl, scratching post, and litter box.</li>
                            <li><strong>Test Suite:</strong> They organize test cases into a test suite, a collection of related test cases.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Simulating a Test Cycle:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey simulate a test cycle to see how their tests are managed.</li>
                    <li><strong>Test Cycle Simulation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Creating a Test Run:</strong> They create a test run for the daily checks.</li>
                            <li><strong>Executing Tests:</strong> They follow the steps in each test case and mark the results (pass or fail).</li>
                            <li><strong>Logging Results:</strong> They log the results in TestRail, noting any issues or defects they find.</li>
                            <li><strong>Generating Reports:</strong> They generate a report to see the overall test results and identify areas that need improvement.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Documenting Findings:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey document their experience with test management tools.</li>
                    <li><strong>Documentation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Test Cases:</strong> List of all test cases they created.</li>
                            <li><strong>Test Run Results:</strong> Details of each test run and the results.</li>
                            <li><strong>Reports:</strong> Summary reports showing which tests passed or failed.</li>
                            <li><strong>Challenges Faced:</strong> Any difficulties they encountered and how they resolved them.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 9,
        content: `<p>Indy and Grey now want to learn how to communicate better and work as a team to make their cat house testing activities more effective.</p>
        <br>
        <ol class="list-decimal list-inside">
            <li>
                <p><strong>Role-Playing for Defect Reporting:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Imagine Indy finds a problem with the food bowl. Instead of just telling Grey, he practices describing the problem clearly and politely.</li>
                    <li><strong>Role-Playing Exercise:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Scenario:</strong> Indy reports a defect where the food bowl isn&rsquo;t filling up correctly.</li>
                            <li><strong>Steps:</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Describe the Problem:</strong> Indy explains what went wrong, &ldquo;The food bowl isn&rsquo;t refilling when we press the button.&rdquo;</li>
                                    <li><strong>Provide Details:</strong> Indy includes details like when the problem happened and any steps that led to the issue.</li>
                                    <li><strong>Propose a Solution:</strong> Indy suggests checking if the button is stuck or if the food dispenser is broken.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Group Project - Teamwork Description:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey work together to describe how they would handle a project.</li>
                    <li><strong>Group Project Example:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Project:</strong> Organizing a new play area for the cat house.</li>
                            <li><strong>Steps:</strong>
                                <ul class="list-disc list-inside">
                                    <li><strong>Roles:</strong> Indy and Grey assign roles, like who will design the play area and who will gather materials.</li>
                                    <li><strong>Planning:</strong> They plan how they will work together, communicate updates, and handle any problems that arise.</li>
                                    <li><strong>Execution:</strong> They follow their plan, keeping in touch and helping each other as needed.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Feedback Session:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey practice giving and receiving feedback on their test cases and reports.</li>
                    <li><strong>Feedback Example:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Receiving Feedback:</strong> Indy receives feedback from Grey on a test case he wrote, &ldquo;The test case was clear, but you should add more details about the expected result.&rdquo;</li>
                            <li><strong>Providing Feedback:</strong> Grey provides feedback to Indy on a report, &ldquo;Your report is good, but it would be better with more explanation of the issues found.&rdquo;</li>
                        </ul>
                    </li>
                    <li><strong>Constructive Feedback:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Be Specific:</strong> Focus on specific areas for improvement, like adding details or clarifying steps.</li>
                            <li><strong>Be Respectful:</strong> Offer feedback in a friendly and supportive way to help the other person improve.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <p><strong>Documenting Findings:</strong></p>
                <ul class="list-disc list-inside">
                    <li>Indy and Grey document their experiences in improving their behavioral and soft skills.</li>
                    <li><strong>Documentation:</strong>
                        <ul class="list-disc list-inside">
                            <li><strong>Role-Playing Scenarios:</strong> List of scenarios they practiced and any feedback received.</li>
                            <li><strong>Teamwork Experiences:</strong> Examples of how they worked together on the group project.</li>
                            <li><strong>Feedback Notes:</strong> Notes on feedback received and given, including any improvements made.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 10,
        content: `<h2>Indy and Grey are saying:</h2>
            <h1>To d&aacute;&scaron; mamiiiiiii ❤️ mňau</h1>`
    }
]

export default catsExplanation;