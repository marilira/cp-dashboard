import Header from "./components/Header/Header.jsx";
import DailyCounter from "./components/DailyCounter/DailyCounter.jsx";
import ExerciseForm from "./components/ExerciseForm/ExerciseForm.jsx";
import ExerciseList from "./components/ExerciseList/ExerciseList.jsx";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const today = new Date().toLocaleDateString("en-CA");
  
  const [exercises, setExercises] = useState(() => {
    const data = localStorage.getItem("exercises");
    return data !== null ? JSON.parse(data) : [];
  });
  
  const todayCount = exercises.filter((exercise) => exercise.date === today).length;

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  function handleDeleteExercise(id) {
    setExercises((prev) => prev.filter((exercise) => exercise.id !== id));
  }

  return (
    <main className="app-container">
      <div className="app-content">
        <Header />
        <section className="app-section">
          <h2 className="section-title">Daily Counter</h2>
          {todayCount === 0 ? (
            <p>
              Você ainda não resolveu nenhum exercício hoje. Que tal começar?
            </p>
          ) : (
            <p>
              Boa! Você já resolveu {todayCount} exercícios hoje. Continue assim!
            </p>
          )}
          <DailyCounter count={todayCount} />
        </section>
        <section className="app-section">
          <h2 className="section-title">Adicionar exercícios</h2>
          <ExerciseForm setExercises={setExercises} />
        </section>

        <section className="app-section">
          <h2 className="section-title">Seus exercícios</h2>
          <ExerciseList exercises={exercises} onDelete={handleDeleteExercise} />
        </section>
      </div>
    </main>
  );
}

export default App;
