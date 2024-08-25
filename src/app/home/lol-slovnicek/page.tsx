const lolVyznamy = [
    'lol - vtipne',
    'lol? - to vazne',
    'lol! - si robis picu',
    'lol - ten clovek je kokot',
    'lol... - toto som naozaj necakal/a',
    'looool - neuveritelne',
    'no lol - jebat na to',
    'lol - uplne som nepocuval/a a nechce sa mi pytat "co?"',
    'lol.. - to ma mrzi, ze sa toto stalo'
]

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-black rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-6">Lol Slovníček</h1>
            <ul className="list-disc list-inside text-gray-700 text-lg">
                {lolVyznamy.map((text, index) => (
                    <li key={index} className="mb-2">{text}</li>
                ))}
            </ul>
        </div>
    );
}
