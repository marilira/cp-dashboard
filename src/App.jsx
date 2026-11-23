import Header from "./components/Header.jsx"
import DailyCounter from "./components/DailyCounter.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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
