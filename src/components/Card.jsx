// Компонент 1: одна карточка
function Card({ title, text }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <button>Подробнее</button>
    </div>
  )
}

export default Card
