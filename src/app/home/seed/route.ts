// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { tasks } from '@/utils/tasks';

// const client = await db.connect();

// async function seedTasks() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     await client.sql`
//     CREATE TABLE IF NOT EXISTS tasks (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         level INT NOT NULL,
//         title VARCHAR(255) NOT NULL,
//         text VARCHAR(255) NOT NULL,
//         points INT NOT NULL,
//         completed VARCHAR(10) NOT NULL
//     );
//     `;

//     const insertedTasks = await Promise.all(
//         tasks.map((task) => {
//             return client.sql`
//                 INSERT INTO tasks (level, title, text, points, completed)
//                 VALUES (${task.level}, ${task.title}, ${task.text}, ${task.points}, ${task.completed})
//                 ON CONFLICT DO NOTHING;
//             `;
//         })
//     );

//     return insertedTasks;
// }

// async function seedProgress() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     await client.sql`
//         CREATE TABLE IF NOT EXISTS progress (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         user_id UUID NOT NULL UNIQUE,
//         points INT NOT NULL,
//         levels_completed INT NOT NULL,
//         max_level INT NOT NULL
//         );
//     `;

//     const insertedProgress = await client.sql`
//         INSERT INTO progress (user_id, points, levels_completed, max_level)
//         VALUES ('123', 0, 0, ${tasks.length})
//         ON CONFLICT (user_id) DO NOTHING;
//     `;

//     return insertedProgress;
// }

// async function seedVocabulary() {
//     await client.sql`
//         CREATE TABLE IF NOT EXISTS vocabulary (
//             id SERIAL PRIMARY KEY,
//             czech VARCHAR(255) NOT NULL,
//             english VARCHAR(255) NOT NULL
//         );
//     `;

//     const insertedVocab = await client.sql`
//         INSERT INTO vocabulary (czech, english)
//         VALUES ('ad-hoc', 'jednorazovy task pre nejaku konkretnu situaciu, opak planovanych veci')
//         ON CONFLICT DO NOTHING;
//     `;

//     return insertedVocab;
// }

// export async function GET() {
//     try {
//         await client.sql`BEGIN`;
//         await seedTasks();
//         await seedProgress(); // Should seed the progress, not seedTasks twice
//         await seedVocabulary();
//         await client.sql`COMMIT`;

//         return new Response(JSON.stringify({ message: 'Database seeded successfully' }), { status: 200 });
//     } catch (error) {
//         await client.sql`ROLLBACK`;
//         return new Response(JSON.stringify({ error }), { status: 500 });
//     }
// }
