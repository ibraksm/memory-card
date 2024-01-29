export default function Header({score, bestScore}) {
  return (
    <>
      <header>
        <div className="score-container">
          <p>Score : {score}</p>
        </div>
        <h1 className="title">Animals Memory Card</h1>
        <div className="bestscore-container">
          <p>Best score : {bestScore}</p>
        </div>
      </header>
    </>
  );
}
