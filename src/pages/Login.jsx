import { useEffect } from "react";
import useDataFetching from "../custom/useDataFetching";
import useSessionCookie from "../custom/useSessionCookie";
function Login() {
  let [errorPOST, sendPOSTRequest] = useDataFetching();
  let addCookie = useSessionCookie;

  function handleSubmit(e) {
    e.preventDefault();
    const input = { user: {} };
    input.user.email = e.target[0].value;
    input.user.password = e.target[1].value;
    sendPOSTRequest({
      url: "http://localhost:4000/login",
      method: "POST",
      body: input,
      action: addCookie,
      data: true,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <input type="password" />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
