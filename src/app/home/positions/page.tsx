
import { fetchPositions } from "@/app/data/crud-operations";
import positions from "@/app/utils/types/position";

export default async function Page() {
    const pos = await fetchPositions();

    return (
        <section className="max-w-4xl mx-auto p-8 bg-black rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-6">Positions</h1>
            {positions.map((item, index) => (
                <div key={index} className="mb-6 p-4 bg-slate-700 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold underline text-teal-600 mb-2">
                        🔗 <a href={item.link.url} className="hover:text-teal-800">{item.link.text}</a>
                    </h3>
                    <p className="text-white pl-6">{item.description}</p>
                </div>
            ))}
            {pos.map((item, index) => (
                <div key={index} className="mb-6 p-4 bg-slate-700 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold underline text-teal-600 mb-2">
                        🔗 <a href={item.link.url} className="hover:text-teal-800">{item.link.text}</a>
                    </h3>
                    <p className="text-white pl-6">{item.description}</p>
                </div>
            ))}
        </section>
    );
}
