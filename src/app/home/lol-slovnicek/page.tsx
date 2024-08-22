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
        <div>
            <h1 className="text-2xl font-bold">Lol slovnicek</h1>
            <ul className="list-inside list-disc">
                {lolVyznamy.map((text, index) => (
                    <li>{text}</li>
                ))}
            </ul>
        </div>
    )
}