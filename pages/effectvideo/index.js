import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { createConnection } from "./chat.js/index.js";

import VideoPlayer from "./onlineOfline";

function RoseVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return (
    <>
      <center>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </center>
      <div className={styles.RoseVideo}>
        {" "}
        <button
          className={styles.Rosebtn}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "⏹️" : "▶️"}
        </button>
        <h1>Welcome to the chat!</h1>;
      </div>
    </>
  );
}
export default RoseVideo;
