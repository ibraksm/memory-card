export default function Card({ card, clickHandler }) {
    return (
        <>
        <div className="card" onClick={() => clickHandler(card.id)}>
            <img src={card.src} alt={card.name}/>
        </div>
        </>
    )
}