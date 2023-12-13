import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function Pagination() {
  const [loadData, setLoadData] = useState([]);
  const axios = require("axios");
  console.log("data", loadData);

  // Make a request for a user with a given ID

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setLoadData(res.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
      <div >
        {loadData.map((post) => {
          const { id, title, body } = post;
          return (
            <card className={styles.card}>
              <div style={{ gridColumn: "1fr" }} key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </card>
          );
        })}
      </div>
  );
}
export default Pagination;
