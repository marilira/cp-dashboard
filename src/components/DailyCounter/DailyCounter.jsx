import "./DailyCounter.css";

export default function DailyCounter(props) {
  return (
    <section className="daily-counter">
      <div className="daily-counter-info">
        <h2 className="daily-counter-label">Exercícios de hoje</h2>
        <span className="daily-counter-count">{props.count}</span>
      <p className="daily-counter-description">exercícios resolvidos</p>
      </div>
    </section>
  );
}
