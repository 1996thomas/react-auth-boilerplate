import "./App.css";
import Logout from "./components/Logout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import useDataFetching from "./custom/useDataFetching";
import { useEffect, useState } from "react";

function App() {
  let [errorGet, sendGetRequest] = useDataFetching();
  let [user, setUser] = useState(null);

  useEffect(() => {
    sendGetRequest({
      url: " http://localhost:4000/current_user",
      method: "GET",
      auth: true,
      action: getUser,
    });
  }, []);

  function getUser(response) {
    const responseData = response.json();
    responseData.then((d) => {
      setUser(d);
    });
  }
  return (
    <>
      <h1>{user ? `Bonjour ${user.email}` : "Bonjour invité"}</h1>
      <p>Signup</p>
      <SignUp />
      <p>Login</p>
      <Login />
      <Logout />
    </>
  );
}

export default App;
