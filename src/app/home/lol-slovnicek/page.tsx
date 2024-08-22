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
            {lolVyznamy.map((text, index) => (
                <p>{text}</p>
            ))}
        </div>
    )
}