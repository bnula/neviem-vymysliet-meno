import SiteLogo from "./site-logo";
import { lusitana } from "./fonts";

export default function PointsCounter() {
    return (
        <div className="flex flex-row">
            <SiteLogo />
            <span className={`text-2xl pl-5 ${lusitana.className}`}>🪙 30</span>
        </div>
    )
}