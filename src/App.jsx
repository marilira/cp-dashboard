import Header from "./components/Header.jsx"
import DailyCounter from "./components/DailyCounter.jsx";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const data = localStorage.getItem("count");
    return data !== null ? Number(data) : 0; 
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count])

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <main>
      <Header />
      {count === 0 ? <p>Você ainda não resolveu nenhum exercício hoje. Que tal começar?</p>
                   : <p>Boa! Você já resolveu {count} exercícios hoje. Continue assim!</p>}
      <DailyCounter count={count} onClick={handleCount} /> 
    </main>
  )
}

export default App;
