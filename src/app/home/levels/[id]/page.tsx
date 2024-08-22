import levelTexts from "@/utils/level-texts";

export default function Page({ params }: { params: {id: string} }) {
    const id = params.id;
    const levelText = levelTexts.filter(l => l.title.includes(id))[0];
    console.log(levelText);

    return (
        <div>
            <h3>{levelText.title}</h3>
            <p><strong>Objectives:</strong></p>
            <ul>
                {levelText.objectives.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p><strong>Tasks:</strong></p>
            <ol>
                {levelText.tasks.map((item, index) => (
                    <li key={index}><strong>{item.title}</strong>: {item.text}</li>
                ))}
            </ol>
            <p><strong>Rewards:</strong></p>
            <ul>
                {levelText.rewards.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {levelText.links.map((item, index) => (
                    <li key={index}><a href={item.url} target="_blank">{item.text}</a></li>
                ))}
            </ul>
        </div>
    )
}