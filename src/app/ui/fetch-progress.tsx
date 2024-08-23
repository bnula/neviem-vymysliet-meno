import { fetchProgress } from "../data/crud-operations"

export default async function FetchProgress(userId :string){
    const progress = await fetchProgress(userId);
    console.log(progress)
    const currentTasks = progress.levelsCompleted;
    console.log(progress.points)
    console.log(progress.userId);

    return(
        <div>
            Bodiky: {progress?.points} <br></br>
            Tasky: {progress?.levelsCompleted} / {progress?.maxLevels}
        </div>
    )
}