import { useState } from "react";
import "./ExerciseForm.css";

export default function ExerciseForm(props) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("beecrowd");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlePlatformChange(e) {
    setPlatform(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newExercise = {
      id: Date.now(),
      name,
      platform,
      date: new Date().toLocaleDateString("en-CA"),
    };
    props.setExercises((prev) => [...prev, newExercise]);

    setName("");
    setPlatform("beecrowd");
  }
  return (
    <form className="exercise-form" onSubmit={handleSubmit}>
      <div className="exercise-form-group">
        <label htmlFor="exercise-name">Nome do exercício</label>
        <input
          id="exercise-name"
          className="exercise-form-input"
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Ex: Soma Simples"
        />
      </div>

      <div className="exercise-form-group">
        <label htmlFor="exercise-platform">Plataforma</label>
        <select
          id="exercise-platform"
          className="exercise-form-input"
          name="platforms"
          value={platform}
          onChange={handlePlatformChange}
        >
          <option value="beecrowd">Beecrowd</option>
        </select>
      </div>
      <button className="exercise-form-button" type="submit">+ Adicionar exercício</button>
    </form>
  );
}
