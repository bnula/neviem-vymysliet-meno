import positions from "@/app/utils/types/position"

export default function Page() {
    return (
        <section>
            <h1 className="text-2xl font-bold">Positions</h1>
                {positions.map((item, index) => (
                    <div key={index} className="m-3">
                    <h3 className="text-lg py-2 underline">🔗 <a href={item.link.url}>{item.link.text}</a></h3>
                    <p className="pl-6">{item.description}</p>
                    </div>
                ))}
        </section>
    )
}