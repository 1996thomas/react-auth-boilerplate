import Cookies from "js-cookie";
import { useState } from "react";

const useDataFetching = () => {
  let [errorMessage, setErrorMessage] = useState(null);

  function sendHttpRequest({ url, method, body, action, auth, data }) {
    fetch(url, {
      method: method,
      headers: {
        Authorization: `${auth ? "Bearer " + Cookies.get("token") : "none"}`,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Erreur : ${response.status}, ${response.statusText}`
          );
        }
        action(response);
        data ? getData(response) : null;
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }
  function getData(response) {
    const responseData = response.json();
    responseData.then((d) => {
      console.log(d);
    });
  }

  return [errorMessage, sendHttpRequest];
};

export default useDataFetching;
