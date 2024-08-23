import SiteLogo from "./site-logo";
import { lusitana } from "./fonts";
import { CircleStackIcon } from "@heroicons/react/24/outline";

export default function PointsCounter() {
    return (
        <div className="flex flex-row">
            <SiteLogo />
            <CircleStackIcon />
            <span className={`text-2xl pl-5 ${lusitana.className}`}>🪙 30</span>
        </div>
    )
}