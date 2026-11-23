import Header from "./components/Header.jsx"
import DailyCounter from "./components/DailyCounter.jsx";
import ExerciseForm from "./components/ExerciseForm.jsx";
import { useEffect, useState } from "react";

function App() {
  const [dailyCounts, setDailyCounts] = useState(() => {
    const data = localStorage.getItem("counts");
    return data !== null ? JSON.parse(data) : {}; 
  });
  const today = new Date().toLocaleDateString("en-CA");
  const count = dailyCounts[today] || 0;

  // eslint-disable-next-line no-unused-vars
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(dailyCounts));
  }, [dailyCounts])
  
  function handleCount() {
    setDailyCounts((prev) => ({
      ...prev,
      [today]: (prev[today] || 0) + 1
    }));
  }

  return (
    <main>
      <Header />
      {count === 0 ? <p>Você ainda não resolveu nenhum exercício hoje. Que tal começar?</p>
                   : <p>Boa! Você já resolveu {count} exercícios hoje. Continue assim!</p>}
      <DailyCounter count={count} onClick={handleCount} /> 
      <ExerciseForm setExercises={setExercises}/>
    </main>
  )
}

export default App;
