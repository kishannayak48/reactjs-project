import React, { useEffect, useState } from "react";
import { Button, Col, Table, Image } from "react-bootstrap";
import { times, map } from "lodash";

import OnlineStatus from "./onlineStatus";

function ApiEffectCall() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const axios = require("axios");

  // Make a request for a user with a given ID
  const loadData = () => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    //     .finally(function () {
    //       // always executed
    //     });
  };
  useEffect(() => {
    loadData();
  }, [page]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // const handles
  return (
    <center>
      <OnlineStatus />
      <Col className="col-md-6 mt-2">
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr >
              <th className="text-center ">#</th>
              <th className="text-center">First Name</th>
              <th className="text-center">Last Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, uIndex) => {
              return (
                <tr key={`userId-${user.id}`}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Image
                      class="w-24 h-24 rounded-full mx-auto"
                      src={user.avatar}
                      roundedCircle
                      alt="user"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* <Button onClick={loadData} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load Data"}
        </Button>{" "} */}
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={isLoading || page === 1}
        >
          Previous
        </Button>{" "}
        <Button onClick={() => handlePageChange(page + 1)} disabled={isLoading}>
          Next
        </Button>{" "}
        {/* Display current page number */}
        <div>Current Page: {page}</div>
      </Col>
    </center>
  );
}
export default ApiEffectCall;
