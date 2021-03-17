import * as React from "react";

export default function DiceRoller() {
  const [numDice, setNumDice] = React.useState(1);
  const [diceSides, setDiceSides] = React.useState(20);
  const [modifier, setModifier] = React.useState(0);

  return (
    <>
      <input
        type="text"
        value={numDice}
        onChange={(e) => setNumDice(e.target.value)}
      />
      <button onClick={(e) => console.log(numDice)}>Roll!</button>
    </>
  );
}
