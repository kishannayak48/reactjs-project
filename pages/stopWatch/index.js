import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.css";
// import Display from "./display";

function StopWatch() {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [sec, setSec] = useState(0);
  const [timerString, setTimerString] = useState("");
  const [flaggedTimes, setFlaggedTimes] = useState([]);

  useEffect(() => {
    let timer = null;
    if (start && !stop) {
      timer = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
      }, 10);
    } else if (stop) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start, stop]);

  useEffect(() => {
    const minutes = Math.floor((sec % 360000) / 6000);
    const seconds = Math.floor((sec % 6000) / 100);
    const milliseconds = sec % 100;

    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;

    setTimerString(formattedTime);
  }, [sec]);

  const handleStart = () => {
    setStop(false);
    setStart(true);
  };

  const handleStop = () => {
    setStart((prevStart) => !prevStart);
    setStop((prevstop) => !prevstop);
  };

  const handleReset = () => {
    setSec(0);
    setStart(false);
    setStop(false);
    setFlaggedTimes([]);
  };

  const handleFlag = () => {
    setFlaggedTimes((prevTimes) => [...prevTimes, timerString]);
  };

  return (
    <Container style={{ marginTop: "120px" }}>
      <Row>
        <Col>
          <div>
            <h2 className={styles.h2}>Flagged Times:</h2>
            <ul>
              {flaggedTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
          {/* <Display /> */}
        </Col>
        <Col style={{ marginTop: "150px" }}>
          <center>
            <div>
              <span style={{ fontSize: "50px" }} className="digit" id="mil">
                {timerString}
              </span>
            </div>
            <div>
              <Button variant="whait" onClick={handleFlag}>
                🚩
              </Button>{" "}
              <Button variant="whait" type="submit" onClick={handleReset}>
                ☠️
              </Button>{" "}
              <Button variant="whait" type="submit" onClick={handleStop}>
                Stop
              </Button>{" "}
              <Button variant="whait" type="submit" onClick={handleStart}>
                ▶️
              </Button>{" "}
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default StopWatch;
