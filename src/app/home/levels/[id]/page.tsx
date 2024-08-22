import levelTexts from "@/utils/level-texts";

export default function Page({ params }: { params: {id: string} }) {
    const id = params.id;
    const levelText = levelTexts.filter(l => l.title.includes(id))[0];
    console.log(levelText);

    return (
        <div>
            <h1 className="font-bold text-3xl">{levelText.title}</h1>
            <p className="text-xl underline">Objectives:</p>
            <ul className="list-disc list-inside">
                {levelText.objectives.map((item, index) => (
                    <li className="px-3" key={index}>{item}</li>
                ))}
            </ul>
            <p><strong>Tasks:</strong></p>
            <ol className="list-decimal list-inside">
                {levelText.tasks.map((item, index) => (
                    <li className="px-3" key={index}><strong>{item.title}</strong>: {item.text}</li>
                ))}
            </ol>
            <p><strong>Rewards:</strong></p>
            <ul className="list-disc list-inside">
                {levelText.rewards.map((item, index) => (
                    <li className="px-3" key={index}>{item}</li>
                ))}
            </ul>
            <ul className="list-disc list-inside">
                {levelText.links.map((item, index) => (
                    <li className="px-3" key={index}><a href={item.url} target="_blank">{item.text}</a></li>
                ))}
            </ul>
        </div>
    )
}