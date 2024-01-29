import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Cards score={score}setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </>
  );
}
