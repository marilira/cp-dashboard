export default function DailyCounter(props) {
  return (
    <section>
      <h2>Exercícios de hoje</h2>
      <p>{props.count} exercícios resolvidos</p>

      <button onClick={props.onClick}>Adicionar exercício</button>
    </section>
  );
}
