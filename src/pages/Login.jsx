import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/Auth";

const Login = () => {
      const navigate = useNavigate();
      const { logIn } = UserAuth();

      const [login, setLogin] = useState({
            email: "",
            password: "",
      });
      const handleChange = (e) => {
            setLogin((old) => {
                  const name = e.target.name;
                  const value = e.target.value;
                  return { ...old, [name]: value };
            });
      };

      const handleLogIn = async (e) => {
            e.preventDefault();
            try {
                  await logIn(login.email, login.password);
                  navigate("Chat");
            } catch (e) {
                  console.log(e.message);
            }
      };

      return (
            <div className="h-screen flex justify-center items-center bg-amber-300">
                  <div className="shadow-2xl flex justify-center items-center flex-col bg-purple-300 sm:bg-red-200 rounded-full p-9 w-96 sm:w-[400px] sm:h-[400px]">
                        <h1 className="text-center text-lg font-extrabold text-blue-400">
                              Chat App
                        </h1>
                        <form
                              onSubmit={handleLogIn}
                              className="flex flex-col gap-7 justify-center mt-9 items-center"
                        >
                              <input
                                    className="max-w-full text-center rounded-md"
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={login.email}
                                    onChange={handleChange}
                              />
                              <input
                                    className="max-w-full text-center rounded-md"
                                    autoComplete="true"
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleChange}
                              />

                              <button className="bg-blue-400 justify-center rounded-md flex w-1/2 text-center p-1 hover:bg-green-400">
                                    Sign in
                              </button>
                        </form>
                        <p className="text-sm mt-3 text-cyan-500">
                              {" "}
                              You do not have an account?
                              <b className="hover:text-blue-900 cursor-pointer">
                                    <Link to={"/Signup"}> Sign Up</Link>
                              </b>
                        </p>
                  </div>
            </div>
      );
};

export default Login;
