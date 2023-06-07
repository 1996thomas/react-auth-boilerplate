import React from "react";
import useDataFetching from "../custom/useDataFetching";
import Cookies from "js-cookie";

export default function Logout() {
  let [errorDELETE, sendDELETERequest] = useDataFetching();

  function logOutRequest() {
    sendDELETERequest({
      url: "http://localhost:4000/logout",
      method: "DELETE",
      auth: true,
    });
  }

  return <button onClick={logOutRequest}>Log out</button>;
}
