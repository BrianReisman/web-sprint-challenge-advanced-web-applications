import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initState = {
  username: "Lambda School",
  password: "i<3Lambd4",
};

const Login = () => {
  const [form, setForm] = useState(initState);
  const { push } = useHistory();

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/api/colors/1`, {
        headers: {
          authorization:
            "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98",
        },
      })
      .then((res) => {
        axios
          .get(`http://localhost:5000/api/colors`, {
            headers: {
              authorization: "",
            },
          })
          .then((res) => {
            console.log(res);
          });
        console.log(res);
      });
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        push("/bubbles");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          {" "}
          Username: {" "}
          <input
            type="text"
            id="username"
            placeholder="username"
            value={form.username}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="password">
          {" "}
          Password{" "}
          <input
            type="password"
            id="password"
            placeholder="password"
            value={form.password}
            onChange={changeHandler}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
