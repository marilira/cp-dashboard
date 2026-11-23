import Header from "./components/Header.jsx";
import DailyCounter from "./components/DailyCounter.jsx";
import ExerciseForm from "./components/ExerciseForm.jsx";
import ExerciseList from "./components/ExerciseList.jsx";
import { useEffect, useState } from "react";

function App() {
  const [dailyCounts, setDailyCounts] = useState(() => {
    const data = localStorage.getItem("counts");
    return data !== null ? JSON.parse(data) : {};
  });
  const today = new Date().toLocaleDateString("en-CA");
  const count = dailyCounts[today] || 0;

  const [exercises, setExercises] = useState(() => {
    const data = localStorage.getItem("exercises");
    return data !== null ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(dailyCounts));
  }, [dailyCounts]);

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  function handleCount() {
    setDailyCounts((prev) => ({
      ...prev,
      [today]: (prev[today] || 0) + 1,
    }));
  }

  function handleDeleteExercise(id) {
    setExercises((prev) => prev.filter((exercise) => exercise.id !== id));
  }

  return (
    <main>
      <Header />
      {count === 0 ? (
        <p>Você ainda não resolveu nenhum exercício hoje. Que tal começar?</p>
      ) : (
        <p>Boa! Você já resolveu {count} exercícios hoje. Continue assim!</p>
      )}
      <DailyCounter count={count} onClick={handleCount} />
      <ExerciseForm setExercises={setExercises} />
      <ExerciseList exercises={exercises} onDelete={handleDeleteExercise} />
    </main>
  );
}

export default App;
