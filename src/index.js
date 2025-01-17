import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         exact
//         style={linkStyles}
//         activeStyle={{ background: "darkblue" }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{ background: "darkblue" }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{ background: "darkblue" }}
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/signup"
//         exact
//         style={linkStyles}
//         activeStyle={{ background: "darkblue" }}
//       >
//         Signup
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{ background: "darkblue" }}
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/messages"
//         exact
//         style={linkStyles}
//         activeStyle={{ background: "darkblue" }}
//       >
//         Messages
//       </NavLink>
//     </div>
//   );
// }

// function Home() {
//   return <h1>Home!</h1>;
// }

// function About() {
//   return <h1>This is my about component!</h1>;
// }

// function Login() {
//   return (
//     <div>
//       <h1>login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function Messages() {
//   return (
//     <div>
//       <h1>Messages</h1>
//       <form>
//         <div>
//           <input type="text" name="message" placeholder="Leave us a message" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div>
//       <h1>Sign Up!</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Enter a Username" />
//         </div>
//         <div>
//           <input type="text" name="email" placeholder="Enter your email" />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Create a Password"
//           />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function App() {
//   return (
// <div>
//   <NavBar />
//   <Switch>
//     <Route path="/about">
//       <About />
//     </Route>
//     <Route path="/login">
//       <Login />
//     </Route>
//     <Route path="/signup">
//       <SignUp />
//     </Route>
//     <Route path="/messages">
//       <Messages />
//     </Route>
//     <Route path="/">
//       <Home />
//     </Route>
//   </Switch>
// </div>
//   );
// }
