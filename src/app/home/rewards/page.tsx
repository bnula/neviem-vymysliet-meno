import { levelRewards, pointRewards } from "@/app/utils/rewards";

export default function Page() {
    return (
        <section className="max-w-4xl mx-auto p-8 bg-black rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-6">Rewards</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-teal-600 mb-4">Level Rewards</h2>
                {levelRewards.map((item, index) => (
                    <div key={index} className="mb-4 p-4 bg-black-50 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-teal-600 mb-4">Point Rewards</h2>
                {pointRewards.map((item, index) => (
                    <div key={index} className="mb-4 p-4 bg-black-50 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
