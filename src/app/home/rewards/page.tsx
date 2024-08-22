import { levelRewards, pointRewards } from "@/utils/rewards"

export default function Page() {
    return (
        <section>
            <h1 className="text-2xl">Level Rewards</h1>
                {levelRewards.map((item, index) => (
                    <div key={index} className="m-3">
                    <h2 className="text-lg py-2">{item.title}</h2>
                    <h3 className="pl-6">{item.description}</h3>
                    </div>
                ))}
            <h1 className="text-2xl">Point Rewards</h1>
                {pointRewards.map((item, index) => (
                    <div key={index} className="m-3">
                    <h2 className="text-lg py-2">{item.title}</h2>
                    <h3 className="pl-6">{item.description}</h3>
                    </div>
                ))}
        </section>
    )
}