import useDataFetching from "../custom/useDataFetching";
import useSessionCookie from "../custom/useSessionCookie";
function SignUp() {
  let [errorPOST, sendPOSTRequest] = useDataFetching();
  let addCookie = useSessionCookie;

  function handleSubmit(e) {
    e.preventDefault();
    const input = { user: {} };
    input.user.email = e.target[0].value;
    input.user.password = e.target[1].value;
    sendPOSTRequest({
      url: "http://localhost:4000/signup",
      method: "POST",
      body: input,
      action: addCookie,
      data : true
    });
  }

  // async function test(e) {
  // e.preventDefault();
  // const data = { user: {} };
  // data.user.email = e.target[0].value;
  // data.user.password = e.target[1].value;

  //   const response = await fetch("http://localhost:4000/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "SignUplication/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   const bearer = response.headers.get("Authorization");
  //   console.log(response);
  //   const jwt = bearer.split(" ");
  //   Cookies.set("token", jwt[1]);
  //   console.log(bearer);
  //   const responseData = await response.json();
  //   console.log(responseData);
  // }

  // async function disconnect() {
  //   Cookies.get("token");
  //   const response = await fetch("http://localhost:4000/logout", {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${Cookies.get("token")}`,
  //     },
  //   });
  //   const responseData = await response.json();
  //   console.log(responseData);
  // }

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

export default SignUp;
