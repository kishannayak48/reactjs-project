import React, { useEffect, useState } from "react";
import { Button, Col, Table } from "react-bootstrap";
import { times, map } from "lodash";
 
import OnlineStatus from "./onlineStatus";

function Pagination() {
  const [loadData, setLoadData] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const axios = require("axios");
  console.log("data", loadData);

  // Make a request for a user with a given ID
  

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=${page}")
      .then((res) => setIsLoading(res.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  // const handles
  return (
    <center>
      <OnlineStatus />
      <Col className="col-md-6 mt-2">
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Image</th>
            </tr>
          </thead>
          <tbody>
            {loadData.map((user, uIndex) => {
              return (
                <tr key={`userId-${user.id}`}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Image src={user.avatar} roundedCircle alt="user" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button onClick={loadData} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load Data"}
        </Button>{" "}
        <div>
          <Button>page</Button>
        </div>
      </Col>
    </center>
  );
}
export default Pagination;
