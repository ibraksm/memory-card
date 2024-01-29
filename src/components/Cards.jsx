import { useEffect, useState } from "react"
import Card from "./Card"

export default function Cards({ score, setScore, bestScore, setBestScore}) {
    const animals = [
        {id : 0, name : "Bear", src : "images/bear.jpg"},
        {id : 1, name : "Wolf", src : "images/wolf.jpg"},
        {id : 2, name : "Cat", src : "images/cat.jpg"},
        {id : 3, name : "Eagle", src : "images/eagle.jpeg"},
        {id : 4, name : "Crocodile", src : "images/crocodile.jpg"},
        {id : 5, name : "Spider", src : "images/spider.jpg"},
        {id : 6, name : "Dog", src : "images/dog.jpg"},
        {id : 7, name : "Monkey", src : "images/monkey.jpg"}
    ]

    const shuffleCards = (cards) => {
        return cards.sort(() => Math.random() - 0.5)
    }

    const [cards, setCards] = useState(shuffleCards(animals));

    const [previousCardsId, setPreviousCardId] = useState([]);

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
        if (score == animals.length) {
            alert("Game");
            setScore(0);
            setPreviousCardId([]);
        }
    }, [score]);

    const clickHandler = (id) => {
        if (previousCardsId.includes(id)) {
            setPreviousCardId([]);
            setScore(0);
            setCards(shuffleCards(animals));
        } else {
            setPreviousCardId([...previousCardsId, id]);
            setScore(score + 1);
            setCards(shuffleCards(animals));
        }
    }

    return (
        <>
        <div className="container">
            { cards.map((card, index) => {
                return <Card card={card} key={index} index={index} clickHandler={clickHandler}/>
            })}
        </div>
        </>
    )
}