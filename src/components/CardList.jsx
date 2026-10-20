import Card from './Card.jsx'

// Компонент 2: список карточек. Внутри него используется компонент Card
function CardList() {
  return (
    <div className="container">
      <Card title="Карточка 1" text="Это первая карточка." />
      <Card title="Карточка 2" text="Это вторая карточка." />
      <Card title="Карточка 3" text="Это третья карточка." />
      <Card title="Карточка 4" text="Это четвёртая карточка." />
    </div>
  )
}

export default CardList
