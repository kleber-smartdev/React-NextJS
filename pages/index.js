import { useState } from "react";

function Home() {
  return (
    <div>
      Home Counter
      <CountNumber />
    </div>
  );
}

function CountNumber() {
  const [countNumber, setCountNumber] = useState(1);

  function addCountNumber() {
    setCountNumber(countNumber + 1);
  }
  return (
    <div>
      <div>{countNumber}</div>
      <button onClick={addCountNumber}>Add Count Number</button>
    </div>
  );
}

export default Home;
