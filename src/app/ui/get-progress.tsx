import { fetchProgress } from "../data/crud-operations"

export default async function GetProgress() {
    const userId = "410544b2-4001-4271-9855-fec4b6a6442a"
    const progress = await fetchProgress(userId);

    return (
        <div>
            Bodiky: {progress.points}
            <br />
            Tasky: {progress.levelsCompleted} / {progress.maxLevels}
        </div>
    )
}