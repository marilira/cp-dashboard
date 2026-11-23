export default function ExerciseList(props) {
    return (
        <ul>
            {props.exercises.map((exercise) => (
                <li key={exercise.id}>
                    {exercise.name} - {exercise.platform}
                    <button onClick={() => props.onDelete(exercise.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    )
}