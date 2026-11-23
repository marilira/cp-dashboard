import Header from "./components/Header/Header.jsx";
import StatsCards from "./components/StatsCards/StatsCards.jsx";
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

  const todayCount = exercises.filter(
    (exercise) => exercise.date === today,
  ).length;

  const totalCount = exercises.length;

  const activeDaysCount = new Set(
    exercises.map((exercise) => exercise.date)
  ).size;

  const platformsCount = new Set(
    exercises.map((exercise) => exercise.platform)
  ).size;

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

        <section className="welcome-banner">
          <div className="welcome-content">
            <h1 className="welcome-title">Olá, dev! 👋</h1>

            <p className="welcome-description">
              Pequenos passos todos os dias constroem grandes habilidades.
            </p>
          </div>
        </section>

        <StatsCards todayCount={todayCount} totalCount={totalCount} activeDaysCount={activeDaysCount} platformsCount={platformsCount} />

        <div className="app-dashboard-grid">
          <section className="app-section">
            <h2 className="section-title">Adicionar exercício</h2>

            <ExerciseForm setExercises={setExercises} />
          </section>

          <section className="app-section">
            <h2 className="section-title">Últimos exercícios</h2>

            <ExerciseList
              exercises={exercises}
              onDelete={handleDeleteExercise}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
