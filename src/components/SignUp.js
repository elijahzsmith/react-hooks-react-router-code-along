import React from "react";

function Signup() {
  return (
    <div>
      <h1>Sign Up!</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Enter a Username" />
        </div>
        <div>
          <input type="text" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Create a Password"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signup;
