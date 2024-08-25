import { CatsExplanation } from "@/app/utils/types/cats-explanation";

const catsExplanation: CatsExplanation[] = [
    {
        level: 1,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">
        Imagine you have two cats, Indy and Grey (random names, not specific AT ALL 😏). They want to build a cat house together.
        </h2>

        <h3 class="text-xl font-semibold text-gray-300 mb-3">SDLC (Software Development Life Cycle):</h3>
        <p class="text-gray-200 mb-4">
            This is like the plan Indy and Grey make to build their cat house. They decide what they need (requirements), draw a blueprint (design), gather materials (development), build the house (implementation), make sure it's sturdy (testing), and then move in (deployment and maintenance).
        </p>

        <h3 class="text-xl font-semibold text-gray-300 mb-3">STLC (Software Testing Life Cycle):</h3>
        <p class="text-gray-200 mb-6">
            Now, Indy wants to make sure the cat house is perfect. So, he checks the blueprint (requirement analysis), plans how he will test each part (test planning), gets his testing tools ready (test case development), tests each part as they build it (test execution), checks if there are any issues (test reporting), makes sure all issues are fixed (retesting and regression testing), and finally declares the house ready (test closure).
        </p>`
    },
    {
        level: 2,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">
            Imagine Indy and Grey are now in their cat house, and they want to make sure all the rooms are perfect.
        </h2>

        <h3 class="text-xl font-semibold text-gray-300 mb-3">Writing Test Cases:</h3>
        <p class="text-gray-300 mb-2">
            Indy and Grey sit down and think about everything that needs to be checked to ensure the cat house is comfy and safe.
        </p>
        <p class="text-gray-300 mb-4">Test Case Structure: Each test case will have:</p>

        <ul class="list-disc list-inside pl-6 mb-6">
            <li>
                <em class="font-semibold">Title</em>: A short description of what is being tested, like "Check Bed Comfiness."
            </li>
            <li>
                <em class="font-semibold">Steps</em>: Detailed steps on how to perform the test. For example, "1. Jump on the bed, 2. Lie down for 5 minutes."
            </li>
            <li>
                <em class="font-semibold">Expected Result</em>: What should happen if everything is okay, like "The bed should feel soft and cozy."
            </li>
            <li>
                <em class="font-semibold">Actual Result</em>: What actually happened during the test.
            </li>
            <li>
                <em class="font-semibold">Status</em>: Whether the test passed or failed.
            </li>
        </ul>

        <h4 class="text-lg font-semibold text-gray-300 mb-3">
            Indy writes a test case for each important aspect of the cat house. Here are five examples:
        </h4>

        <ul class="list-disc list-inside pl-6 mb-8">
            <li>
                <span class="font-semibold">Test Case 1: Check Bed Comfiness</span>
                <ul class="list-disc list-inside pl-6">
                    <li>Steps:
                        <ol class="list-decimal pl-6">
                            <li>Jump on the bed</li>
                            <li>Lie down for 5 minutes.</li>
                        </ol>
                    </li>
                    <li>Expected Result:
                        <ul class="list-disc list-inside pl-6">
                            <li>The bed should feel soft and cozy.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 2: Check Food Bowl</span>
                <ul class="list-disc list-inside pl-6">
                    <li>Steps:
                        <ol class="list-decimal pl-6">
                            <li>Look at the food bowl</li>
                            <li>Check if it's full.</li>
                        </ol>
                    </li>
                    <li>Expected Result:
                        <ul class="list-disc list-inside pl-6">
                            <li>The food bowl should be full.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 3: Check Scratching Post Strength</span>
                <ul class="list-disc list-inside pl-6">
                    <li>Steps:
                        <ol class="list-decimal pl-6">
                            <li>Scratch the post for 3 minutes.</li>
                        </ol>
                    </li>
                    <li>Expected Result:
                        <ul class="list-disc list-inside pl-6">
                            <li>The post should not wobble or break.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 4: Check Window View</span>
                <ul class="list-disc list-inside pl-6">
                    <li>Steps:
                        <ol class="list-decimal pl-6">
                            <li>Look out the window</li>
                            <li>Observe the view for 5 minutes.</li>
                        </ol>
                    </li>
                    <li>Expected Result:
                        <ul class="list-disc list-inside pl-6">
                            <li>The view should be interesting and have birds or other fun things to watch.</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 5: Check Litter Box Cleanliness</span>
                <ul class="list-disc list-inside pl-6">
                    <li>Steps:
                        <ol class="list-decimal pl-6">
                            <li>Inspect the litter box</li>
                            <li>Smell to check for odors.</li>
                        </ol>
                    </li>
                    <li>Expected Result:
                        <ul class="list-disc list-inside pl-6">
                            <li>The litter box should be clean and odor-free.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-300 mb-3">Executing Test Cases</h3>
        <ul class="list-disc list-inside pl-6 mb-6">
            <li>Grey takes Indy's list and starts performing the tests one by one.</li>
            <li>Execution Process: For each test case, Grey follows the steps exactly as written and observes the results.</li>
            <li>Documenting Results: After each test, Grey writes down whether the actual result matched the expected result.</li>
            <li>For example, when testing the bed, if it feels soft and cozy, Grey writes "Passed." If it feels hard, he writes "Failed" and notes the issue.</li>
            <li>Handling Failures: If any test fails, Grey notes what went wrong. For instance, if the scratching post wobbles, he writes that the post needs to be fixed or replaced.</li>
        </ul>

        <h4 class="text-lg font-semibold text-gray-300 mb-4">Here are the results Grey documented:</h4>

        <ul class="list-disc list-inside pl-6 mb-8">
            <li>
                <span class="font-semibold">Test Case 1: Check Bed Comfiness</span>
                <ul class="list-decimal list-inside pl-6">
                    <li>Actual Result: The bed was soft and cozy.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 2: Check Food Bowl</span>
                <ul class="list-decimal list-inside pl-6">
                    <li>Actual Result: The food bowl was half-empty.</li>
                    <li>Status: Failed (Needs more food)</li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 3: Check Scratching Post Strength</span>
                <ul class="list-decimal list-inside pl-6">
                    <li>Actual Result: The post was sturdy and strong.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 4: Check Window View</span>
                <ul class="list-decimal list-inside pl-6">
                    <li>Actual Result: The view showed birds flying by.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
            <li>
                <span class="font-semibold">Test Case 5: Check Litter Box Cleanliness</span>
                <ul class="list-decimal list-inside pl-6">
                    <li>Actual Result: The litter box was clean with no odors.</li>
                    <li>Status: Passed</li>
                </ul>
            </li>
        </ul>`
    },
    {
        level: 3,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Now, Indy and Grey need to manage the defects (problems) they found in their cat house.</h2>
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
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Now, Indy and Grey are curious about how the different parts of their cat house talk to each other. They want to test the communication between these parts, just like how APIs (Application Programming Interfaces) work in software.</h2>

        <ol class="list-decimal list-inside pl-4 space-y-8">
            <li>
                <p class="font-semibold text-lg">Understanding APIs:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Imagine Indy wants to ask Grey if the food bowl is full. Indy sends a message, "Is the food bowl full?" and Grey replies, "Yes, it is!" This message exchange is similar to how APIs work.</li>
                    <li><span class="font-semibold">API (Application Programming Interface):</span> It’s a way for different parts of a system to communicate. For example, a weather app talks to a weather service API to get the latest weather data.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Setting Up Postman:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey install Postman on their computer. They open it and explore its interface.</li>
                    <li><span class="font-semibold">Postman Interface:</span> It has different sections like the request builder (where you create and send messages) and the response viewer (where you see the replies).</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Creating and Sending Basic API Requests:</p>
                <ul class="list-disc list-inside pl-6 space-y-4">
                    <li>
                        <span class="font-semibold">GET Request:</span> Indy sends a message to Grey asking for the current status of the food bowl. In Postman, this is done by creating a GET request.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Example:</span> Indy types the message "GET /foodbowl/status" and sends it. Grey replies with "The food bowl is full," which Indy sees in the response viewer.</li>
                        </ul>
                    </li>
                    <li>
                        <span class="font-semibold">POST Request:</span> Grey sends a message to Indy to update the status of the scratching post. In Postman, this is done by creating a POST request.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Example:</span> Grey types the message "POST /scratchingpost/update" with details like "new status: stable" and sends it. Indy confirms the update in the response viewer.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">API Testing Challenge:</p>
                <ul class="list-disc list-inside pl-6 space-y-4">
                    <li>Indy and Grey take on a challenge to test a sample API. They create test cases for different API endpoints (places where they send messages).
                        <ul class="list-disc list-inside pl-6 space-y-4">
                            <li><span class="font-semibold">Test Case 1: Check Food Bowl Status</span>
                                <ul class="list-disc list-inside pl-6 space-y-2">
                                    <li><span class="font-semibold">Request:</span> GET /foodbowl/status</li>
                                    <li><span class="font-semibold">Expected Result:</span> Response should be "The food bowl is full."</li>
                                </ul>
                            </li>
                            <li><span class="font-semibold">Test Case 2: Update Scratching Post Status</span>
                                <ul class="list-disc list-inside pl-6 space-y-2">
                                    <li><span class="font-semibold">Request:</span> POST /scratchingpost/update</li>
                                    <li><span class="font-semibold">Data:</span> { "new status": "stable" }</li>
                                    <li><span class="font-semibold">Expected Result:</span> Response should confirm "Scratching post status updated to stable."</li>
                                </ul>
                            </li>
                            <li><span class="font-semibold">Test Case 3: Get Window View</span>
                                <ul class="list-disc list-inside pl-6 space-y-2">
                                    <li><span class="font-semibold">Request:</span> GET /window/view</li>
                                    <li><span class="font-semibold">Expected Result:</span> Response should be "Birds are visible."</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Documenting Findings:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey document their API testing process and findings.</li>
                    <li>
                        <span class="font-semibold">Documentation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">API Endpoints Tested:</span> List of endpoints they tested.</li>
                            <li><span class="font-semibold">Test Cases:</span> Details of each test case, including the request, expected result, actual result, and status (passed/failed).</li>
                            <li><span class="font-semibold">Issues Found:</span> Any problems they discovered during testing.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 5,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Now, Indy and Grey want to understand how to look inside the database of their cat house system, where all their activities and statuses are stored.</h2>

        <ol class="list-decimal list-inside pl-4 space-y-8">
            <li>
                <p class="font-semibold text-lg">Understanding SQL (Structured Query Language):</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Imagine Indy and Grey have a big book where they write down everything that happens in the cat house. This book is like a database.</li>
                    <li><span class="font-semibold">SQL:</span> SQL is like a special language they use to ask questions about what’s in the book or to write new things in the book.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Watching Tutorials:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey watch a tutorial to learn how to use SQL. They learn that SQL helps them find specific information, add new information, or change existing information in the database.</li>
                    <li><span class="font-semibold">Tutorial Example:</span> They see examples of simple commands like:
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">SELECT:</span> To find things in the book.</li>
                            <li><span class="font-semibold">INSERT:</span> To add new things to the book.</li>
                            <li><span class="font-semibold">UPDATE:</span> To change things that are already in the book.</li>
                            <li><span class="font-semibold">DELETE:</span> To remove things from the book.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Practicing Basic SQL Queries:</p>
                <ul class="list-disc list-inside pl-6 space-y-4">
                    <li><span class="font-semibold">SELECT:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li>Indy wants to find out all the activities logged in the database.</li>
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">SELECT * FROM activities;</code></li>
                            <li><span class="font-semibold">Explanation:</span> This query asks the database to show all the entries in the "activities" table.</li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">INSERT:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li>Grey wants to add a new entry about finding a new toy.</li>
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">INSERT INTO activities (description, date) VALUES ('Found a new toy', '2024-08-04');</code></li>
                            <li><span class="font-semibold">Explanation:</span> This query adds a new entry with the description "Found a new toy" and the date "2024-08-04."</li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">UPDATE:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li>Indy wants to update the status of the food bowl.</li>
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">UPDATE activities SET status = 'full' WHERE activity = 'food bowl';</code></li>
                            <li><span class="font-semibold">Explanation:</span> This query changes the status of the activity "food bowl" to "full."</li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">DELETE:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li>Grey wants to delete an old entry about a broken toy.</li>
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">DELETE FROM activities WHERE description = 'Broken toy';</code></li>
                            <li><span class="font-semibold">Explanation:</span> This query removes the entry with the description "Broken toy."</li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">SELECT with Condition:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li>Indy wants to find all the activities that happened today.</li>
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">SELECT * FROM activities WHERE date = '2024-08-04';</code></li>
                            <li><span class="font-semibold">Explanation:</span> This query asks for all the entries in the "activities" table where the date is "2024-08-04."</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Database Challenge:</p>
                <ul class="list-disc list-inside pl-6 space-y-4">
                    <li><span class="font-semibold">Challenge Task 1:</span> Find all the activities related to toys.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">SELECT * FROM activities WHERE description LIKE '%toy%';</code></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Challenge Task 2:</span> Add a new activity about catching a mouse.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">INSERT INTO activities (description, date) VALUES ('Caught a mouse', '2024-08-04');</code></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Challenge Task 3:</span> Update the status of the scratching post activity to "repaired."
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">UPDATE activities SET status = 'repaired' WHERE description = 'Scratching post';</code></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Challenge Task 4:</span> Delete the entry about a spilled water bowl.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">DELETE FROM activities WHERE description = 'Spilled water bowl';</code></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Challenge Task 5:</span> Find all activities logged in the past week.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Query:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">SELECT * FROM activities WHERE date >= '2024-07-28';</code></li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Documenting Findings:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey document their database testing process and findings.</li>
                    <li><span class="font-semibold">Documentation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">SQL Queries Used:</span> List of all the queries they wrote.</li>
                            <li><span class="font-semibold">Results:</span> What each query returned or affected in the database.</li>
                            <li><span class="font-semibold">Issues Found:</span> Any problems they encountered during testing, like incorrect entries or errors in the database.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 6,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Now, Indy and Grey want to learn how to think like programmers and write simple scripts to automate their tasks.</h2>

        <ol class="list-decimal list-inside pl-4 space-y-8">
            <li>
                <p class="font-semibold text-lg">Understanding Basic Programming Concepts:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Imagine Indy wants to find all the balls scattered around the house. Instead of looking everywhere at once, he follows a set of steps: look in the living room, then the kitchen, then the bedroom, and so on. This set of steps is like an algorithm.</li>
                    <li><span class="font-semibold">Algorithm:</span> A series of steps or instructions to solve a problem.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Loops:</span> If Indy wants to look under each piece of furniture in the living room, he repeats the same action (looking under furniture) for each piece. This repetition is a loop.</li>
                            <li><span class="font-semibold">Conditions:</span> If Indy only wants to look for balls when it’s not nap time, he checks the condition, "Is it nap time?" If the answer is "No," he continues; if "Yes," he stops and naps.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Learning Git Basics:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey decide to learn Git to keep track of changes in their scripts and work together on projects.</li>
                    <li><span class="font-semibold">Git:</span> A tool to manage and track changes in code.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Pull:</span> Fetching the latest changes from the repository.</li>
                            <li><span class="font-semibold">Push:</span> Sending your changes to the repository.</li>
                            <li><span class="font-semibold">Merge:</span> Combining changes from different branches (versions) of the code.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Understanding HTML Basics:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey learn HTML to understand how websites are made.</li>
                    <li><span class="font-semibold">HTML (HyperText Markup Language):</span> The language used to create webpages.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Tags:</span> HTML uses tags like <code class="bg-gray-400 px-1 py-0.5 rounded">&lt;p&gt;</code> for paragraphs, <code class="bg-gray-400 px-1 py-0.5 rounded">&lt;h1&gt;</code> for headings, and <code class="bg-gray-400 px-1 py-0.5 rounded">&lt;a&gt;</code> for links to structure content on a webpage.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Mini Project - Writing a Script:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey write a simple script to display their names letter by letter on the console.</li>
                    <li><span class="font-semibold">Example Script:</span>
                        <pre class="bg-gray-400 p-4 rounded overflow-x-auto"><code>name = "Indy"
        for letter in name:
            print(letter)</code></pre>
                    </li>
                    <li><span class="font-semibold">Explanation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Variable:</span> <code class="bg-gray-400 px-1 py-0.5 rounded">name</code> stores the string "Indy."</li>
                            <li><span class="font-semibold">Loop:</span> The <code class="bg-gray-400 px-1 py-0.5 rounded">for</code> loop goes through each letter in the name and prints it.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Documenting Findings:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey document their learning and practice with basic programming concepts.</li>
                    <li><span class="font-semibold">Documentation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Concepts Learned:</span> List of programming concepts they explored.</li>
                            <li><span class="font-semibold">Scripts Written:</span> Examples of scripts they wrote, like the one displaying their names.</li>
                            <li><span class="font-semibold">Challenges Faced:</span> Any difficulties they encountered and how they overcame them.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 7,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Indy and Grey are curious about making their testing work easier and faster. They discover that automation tools can help them with repetitive tasks, and they decide to learn how to use these tools, starting with the Robot Framework.</h2>

        <ol class="list-decimal list-inside pl-4 space-y-8">
            <li>
                <p class="font-semibold text-lg">Introductory Video on Selenium and Gherkin:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li><span class="font-semibold">Selenium:</span> Indy and Grey learn that Selenium is a tool that lets them control a web browser automatically. It's like getting a robot to do their clicking and typing for them.</li>
                    <li><span class="font-semibold">Gherkin:</span> Gherkin is a way to write down what they want the robot to do in plain language. It’s like giving the robot a to-do list.</li>
                    <li><span class="font-semibold">Why Learn This:</span> Just like how Indy and Grey can train themselves to do the same things every day, they can train a robot to handle routine testing tasks, freeing up time for more important work.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Tool Exploration with Robot Framework:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey decide to explore the Robot Framework, which uses Selenium to automate web testing.</li>
                    <li><span class="font-semibold">Robot Framework:</span> It’s a tool that helps them write test cases in a simple, human-readable language, making it easier to automate tests.</li>
                    <li><span class="font-semibold">Installation:</span> They install Robot Framework on their computer, along with the necessary libraries to start automating tasks in a web browser.</li>
                    <li><span class="font-semibold">Example Task:</span> Indy and Grey create a simple script to automate checking if their favorite cat toy website is up and running.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><code class="bg-gray-400 p-2 block rounded">*** Settings ***<br>Library SeleniumLibrary<br>*** Test Cases ***<br>Check Cat Toy Website<br>&nbsp;&nbsp;Open Browser&nbsp;&nbsp;https://www.cat-toys.com&nbsp;&nbsp;chrome<br>&nbsp;&nbsp;Title Should Be&nbsp;&nbsp;Cat Toys - Home of the Best Cat Toys<br>&nbsp;&nbsp;Close Browser</code></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Explanation:</span> This script opens a web browser, goes to the cat toy website, checks the title of the page to make sure they’re on the right site, and then closes the browser. It’s a simple automation that helps Indy and Grey check the website without having to do it manually.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Mini Project - Automating a Simple Test Case:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey decide to write a slightly more advanced script using the Robot Framework.</li>
                    <li><span class="font-semibold">Task:</span> Automate a login process on the website.
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><code class="bg-gray-400 p-2 block rounded">*** Settings ***<br>Library SeleniumLibrary<br>*** Variables ***<br>{USERNAME} IndyGrey<br>{PASSWORD} Paws123<br>*** Test Cases ***<br>Log In to Cat Toy Website<br>&nbsp;&nbsp;Open Browser&nbsp;&nbsp;https://www.cat-toys.com/login&nbsp;&nbsp;chrome<br>&nbsp;&nbsp;Input Text&nbsp;&nbsp;id=username&nbsp;&nbsp;{USERNAME}<br>&nbsp;&nbsp;Input Text&nbsp;&nbsp;id=password&nbsp;&nbsp;{PASSWORD}<br>&nbsp;&nbsp;Click Button&nbsp;&nbsp;id=loginButton<br>&nbsp;&nbsp;Title Should Be&nbsp;&nbsp;Cat Toys - User Dashboard<br>&nbsp;&nbsp;Close Browser</code></li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Explanation:</span> In this script, Indy and Grey automate logging into the website. They enter a username and password, click the login button, and check if they successfully land on the user dashboard page. This script saves them time, as they no longer need to log in manually each time they want to check their account.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Understanding the Concepts:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li><span class="font-semibold">Automation Tools:</span> Like how a toy can keep a cat entertained for hours without needing human interaction, automation tools like Robot Framework keep the testing process running without Indy and Grey having to do it all manually.</li>
                    <li><span class="font-semibold">Scripting:</span> Writing scripts is like setting up a series of dominoes; once you push the first one, everything follows. Indy and Grey set up the scripts, and the tests run automatically, just like the dominoes falling.</li>
                    <li><span class="font-semibold">Robot Framework:</span> Think of Robot Framework as the cat’s toy launcher. It does the work of throwing the toy (running the test) so Indy and Grey can focus on other things.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Project Reflection:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>After completing their mini-project, Indy and Grey reflect on how automation can make their lives easier by handling repetitive tasks. They recognize the importance of understanding the tools, learning to write clear scripts, and thinking logically to automate effectively.</li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 8,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Now, Indy and Grey want to organize their testing activities and keep track of their progress using test management tools.</h2>

        <ol class="list-decimal list-inside pl-4 space-y-8">
            <li>
                <p class="font-semibold text-lg">Understanding Test Management Tools:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Imagine Indy and Grey have many different tests to run every day, like checking the food bowl, scratching post, and litter box. Keeping track of all these tests can be confusing.</li>
                    <li><span class="font-semibold">Test Management Tools:</span> These tools help them organize and manage all their test cases and track their progress.</li>
                    <li><span class="font-semibold">Example:</span> Tools like TestRail help them create test plans, run tests, and report results in a systematic way.</li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Reading User Guides:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey read guides to understand how to use TestRail.</li>
                    <li><span class="font-semibold">User Guide Example:</span> They learn about key features like:
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Creating Test Cases:</span> Writing detailed test cases for each task.</li>
                            <li><span class="font-semibold">Test Runs:</span> Organizing test cases into test runs for execution.</li>
                            <li><span class="font-semibold">Reporting:</span> Generating reports to see which tests passed or failed.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Setting Up a Test Project:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey set up a test project in TestRail.</li>
                    <li><span class="font-semibold">Project Setup:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Creating a Project:</span> They create a new project called "Cat House Tests."</li>
                            <li><span class="font-semibold">Adding Test Cases:</span> They add test cases for different tasks like checking the food bowl, scratching post, and litter box.</li>
                            <li><span class="font-semibold">Test Suite:</span> They organize test cases into a test suite, a collection of related test cases.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Simulating a Test Cycle:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey simulate a test cycle to see how their tests are managed.</li>
                    <li><span class="font-semibold">Test Cycle Simulation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Creating a Test Run:</span> They create a test run for the daily checks.</li>
                            <li><span class="font-semibold">Executing Tests:</span> They follow the steps in each test case and mark the results (pass or fail).</li>
                            <li><span class="font-semibold">Logging Results:</span> They log the results in TestRail, noting any issues or defects they find.</li>
                            <li><span class="font-semibold">Generating Reports:</span> They generate a report to see the overall test results and identify areas that need improvement.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Documenting Findings:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey document their experience with test management tools.</li>
                    <li><span class="font-semibold">Documentation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Test Cases:</span> List of all test cases they created.</li>
                            <li><span class="font-semibold">Test Run Results:</span> Details of each test run and the results.</li>
                            <li><span class="font-semibold">Reports:</span> Summary reports showing which tests passed or failed.</li>
                            <li><span class="font-semibold">Challenges Faced:</span> Any difficulties they encountered and how they resolved them.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 9,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Indy and Grey now want to learn how to communicate better and work as a team to make their cat house testing activities more effective.</h2>

        <ol class="list-decimal list-inside pl-4 space-y-8">
            <li>
                <p class="font-semibold text-lg">Role-Playing for Defect Reporting:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Imagine Indy finds a problem with the food bowl. Instead of just telling Grey, he practices describing the problem clearly and politely.</li>
                    <li><span class="font-semibold">Role-Playing Exercise:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Scenario:</span> Indy reports a defect where the food bowl isn’t filling up correctly.</li>
                            <li><span class="font-semibold">Steps:</span>
                                <ul class="list-disc list-inside pl-6 space-y-2">
                                    <li><span class="font-semibold">Describe the Problem:</span> Indy explains what went wrong, “The food bowl isn’t refilling when we press the button.”</li>
                                    <li><span class="font-semibold">Provide Details:</span> Indy includes details like when the problem happened and any steps that led to the issue.</li>
                                    <li><span class="font-semibold">Propose a Solution:</span> Indy suggests checking if the button is stuck or if the food dispenser is broken.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Group Project - Teamwork Description:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey work together to describe how they would handle a project.</li>
                    <li><span class="font-semibold">Group Project Example:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Project:</span> Organizing a new play area for the cat house.</li>
                            <li><span class="font-semibold">Steps:</span>
                                <ul class="list-disc list-inside pl-6 space-y-2">
                                    <li><span class="font-semibold">Roles:</span> Indy and Grey assign roles, like who will design the play area and who will gather materials.</li>
                                    <li><span class="font-semibold">Planning:</span> They plan how they will work together, communicate updates, and handle any problems that arise.</li>
                                    <li><span class="font-semibold">Execution:</span> They follow their plan, keeping in touch and helping each other as needed.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Feedback Session:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey practice giving and receiving feedback on their test cases and reports.</li>
                    <li><span class="font-semibold">Feedback Example:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Receiving Feedback:</span> Indy receives feedback from Grey on a test case he wrote, “The test case was clear, but you should add more details about the expected result.”</li>
                            <li><span class="font-semibold">Providing Feedback:</span> Grey provides feedback to Indy on a report, “Your report is good, but it would be better with more explanation of the issues found.”</li>
                        </ul>
                    </li>
                    <li><span class="font-semibold">Constructive Feedback:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Be Specific:</span> Focus on specific areas for improvement, like adding details or clarifying steps.</li>
                            <li><span class="font-semibold">Be Respectful:</span> Offer feedback in a friendly and supportive way to help the other person improve.</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <p class="font-semibold text-lg">Documenting Findings:</p>
                <ul class="list-disc list-inside pl-6 space-y-2">
                    <li>Indy and Grey document their experiences in improving their behavioral and soft skills.</li>
                    <li><span class="font-semibold">Documentation:</span>
                        <ul class="list-disc list-inside pl-6 space-y-2">
                            <li><span class="font-semibold">Role-Playing Scenarios:</span> List of scenarios they practiced and any feedback received.</li>
                            <li><span class="font-semibold">Teamwork Experiences:</span> Examples of how they worked together on the group project.</li>
                            <li><span class="font-semibold">Feedback Notes:</span> Notes on feedback received and given, including any improvements made.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>`
    },
    {
        level: 10,
        content: `<h2 class="text-2xl font-bold text-teal-600 mb-4">Indy and Grey are saying:</h2>
        <h1 class="text-4xl font-bold text-red-600 mb-2">To dáš mamiiiiiii ❤️ mňau</h1>`
    }
]

export default catsExplanation;