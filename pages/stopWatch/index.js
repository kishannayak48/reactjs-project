import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import Display from "./display";

function StopWatch() {
  const [start, setStart] = useState(false);
  const [stopwatch, setStopWatch] = useState(false);
  const [sec, setSec] = useState(0);
  const [timerString, setTimerString] = useState("");

  useEffect(() => {
    let timer = null;
    if (start && !stopwatch) {
      timer = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
      }, 10);
    } else if (stopwatch) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [start, stopwatch]);

  useEffect(() => {
    const date = new Date(0);
    date.setSeconds(sec);
    setTimerString(date.toISOString().slice(11, 19));
  }, [sec]);

  const handleStart = () => {
    setStopWatch(false);
    setStart(true);
  };

  const handleStopWatch = () => {
    setStart((prevStart) => !prevStart);
    setStopWatch((prevStopwatch) => !prevStopwatch);
  };

  const handleReset = () => {
    setSec(0);
    setStart(false);
    setStopWatch(false);
  };

  return (
    <Container style={{ marginTop: "120px" }}>
      <Row>
        <Col>
          <h1>Display time.....</h1>
          <Display />
        </Col>
        <Col style={{ marginTop: "150px" }}>
          <center>
            <div>
              <span style={{ fontSize: "50px" }} className="digit" id="mil">
                {timerString}
              </span>
            </div>
            <div>
              <Button variant="warning" type="submit" onClick={handleStopWatch}>
                Stopwatch
              </Button>{" "}
              <Button variant="danger" type="submit" onClick={handleReset}>
                Reset
              </Button>{" "}
              <Button variant="success" type="submit" onClick={handleStart}>
                Start
              </Button>{" "}
            </div>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default StopWatch;
