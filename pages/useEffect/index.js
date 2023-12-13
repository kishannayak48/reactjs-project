import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button, Container } from "react-bootstrap";

function EffectUse() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [number, setNumber] = useState(0);

  console.log("==========state rendring============", count);
  //single effect
  useEffect(() => {
    console.log("======useEffect =====", count);
    setSum(sum + count);
    console.log("=======Sum Values======", sum);
  }, [count]);

  //second effect this is using in dependanse
  useEffect(() => {
    console.log("=========Number Effect==========", number);
  }, [number]);
  //thaid effect using retun

  const handleCountButton = () => {
    let countValues = count + 1;
    setCount(countValues);
  };

  const handleNumButton = () => {
    let num = number + 1;
    setNumber(num);
  };
  return (
    <Container>
      <center>
        <div>
          <h1 className={styles.h1}>hello kishan nayak</h1>
          <h1 className={styles.bigCount}>{count}</h1>
          <h2 className={styles.bigSum}>Sum :{sum}</h2>
          <h3 className={styles.bigNum}>NumberCount:👉{number}</h3>
        </div>
        <button className={styles.bigBtn1} onClick={handleCountButton}>
          🔲
        </button>
        <button onClick={handleNumButton}>🔘</button>
      </center>
    </Container>
  );
}

export default EffectUse;
