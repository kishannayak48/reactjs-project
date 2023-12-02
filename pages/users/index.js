import React, { useState } from "react";
import MobileNo from "../helloworld/mymobile";
function User(){
    const[user,setUser]=useState({name:"",mobileNo:""});


return(
    <center>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setUser(true);
        }}>
        <h1>Login</h1>

        <div>
        name:
        <br></br>
        mobileno:
        <text
        placeholder="user"
        value={user}
        onChange={e => setUser(e.target.value)}
      />

      </div>
      Name:
        <input type="text" name="name" placeholder="enter your name"></input>
        <br></br>
    MobileNo:
        <input type="text" name="mobileno" placeholder="enter your mobilno"></input>
    <button>Submit</button>
    </form>
    </center>
)
}
export default User;