import "./ExerciseList.css";

export default function ExerciseList(props) {
  return (
    <ul className="exercise-list">
      {props.exercises.map((exercise) => (
        <li className="exercise-item" key={exercise.id}>
          <div className="exercise-item-info">
            <h3 className="exercise-item-name">{exercise.name}</h3>
            <span className="exercise-item-platform">{exercise.platform}</span>
            <span className="exercise-item-date">{exercise.date}</span>
          </div>

          <button
            className="exercise-delete-button"
            onClick={() => props.onDelete(exercise.id)}
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}
