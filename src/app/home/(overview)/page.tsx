import GetProgress from "@/app/ui/get-progress";
import { SessionProvider } from "next-auth/react";

export default function Page() {
    return (
        <SessionProvider>
            <GetProgress  />
        </SessionProvider>
    )
}