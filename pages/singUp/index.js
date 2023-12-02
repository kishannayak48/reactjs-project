import React from "react";
import {useState} from "react";

function SingUp() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmitForm = () => {
    SingUp(true);
  };

  return (
    <center>
      <div>
        
        <h1>Login page</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submitting!");
          }}
        >
          <label>
            Name:
            <input type="text" name="name" placeholder="enter your name" />
          </label>

          <br />

          <label>
            Email:
            <input type="text" email="email" placeholder="enter your Email" />
          </label>

          <br />
          <label>
            Password:
            <input
              type="text"
              password="password"
              placeholder="enter your Password"
            />
          </label>
          <br />
          <label>
            Age:
            <input type="number" age="age" placeholder="enter your age">
            </input>
            </label>
            <br />
            
            Gender:
            <select class="form-select" aria-label="Default select example">
  <option selected>select Gender</option>
  <option value="1">Male</option>
  <option value="2">Fimale</option>
  <option value="3">other</option>
</select>
           
            
            <br />
          <button
            onClick={() => {
              alert("You clicked me!");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </center>
  );
}

export default SingUp;
