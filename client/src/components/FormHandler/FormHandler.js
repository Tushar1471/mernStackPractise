import "./formhandler.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const FormHandler = () => {
  // ** HOOKS ALWAYS DECLARED AT TOP **
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [response, setResponse] = useState("");
  const inputName = useRef(null);
  const inputPassword = useRef(null);

  async function submitForm(e) {
    e.preventDefault();
    try {
      let apiUrl = process.env.REACT_APP_API_URL_3000;
      const apiUrlData = await checkPortAvailability(apiUrl);
      const responseData = await axios({
        method: "post",
        url: `${apiUrlData}/api/submit`,
        headers: {
          "Content-Type": "application/json",
        },
        data: { inputUser, inputPass },
      });
      const { data } = responseData.data;
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function checkPortAvailability(apiUrl) {
    try {
      await axios.get(`${apiUrl}/api/checkAvailability`);
      return apiUrl;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div id="createForm">
        <h1>{response}</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="username">Name:</label>
          <input
            ref={inputName}
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Name"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            ref={inputPassword}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
