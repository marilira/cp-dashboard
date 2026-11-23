import "./StatsCards.css"
import {
  CalendarCheck,
  Code2,
  CalendarDays,
  Layers
} from "lucide-react";

export default function StatsCards(props) {
  return (
    <section className="stats-cards">
      <div className="stats-card">
        <CalendarCheck />
        <h3 className="stats-card-title">Exercícios hoje</h3>
        <p className="stats-card-value">{props.todayCount}</p>
      </div>

      <div className="stats-card">
        <Code2 />
        <h3 className="stats-card-title">Total resolvidos</h3>
        <p className="stats-card-value">{props.totalCount}</p>
      </div>

      <div className="stats-card">
        <CalendarDays />
        <h3 className="stats-card-title">Dias praticando</h3>
        <p className="stats-card-value">{props.activeDaysCount}</p>
      </div>

      <div className="stats-card">
        <Layers />
        <h3 className="stats-card-title">Plataformas usadas</h3>
        <p className="stats-card-value">{props.platformsCount}</p>
      </div>
    </section>
  );
}
