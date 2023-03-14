import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Signup = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [err, setError] = useState("");
      const navigate = useNavigate();
      const { signUp } = UserAuth();
      const [updateProfile] = useUpdateProfile(auth);

      const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");
            try {
                  await signUp(email, password);
                  await updateProfile({ displayName: name });
                  navigate("/Chat");
            } catch (e) {
                  setError(e.message);
                  console.log(err);
            }
      };

      return (
            <div className="h-screen flex justify-center items-center bg-amber-300">
                  <div className="shadow-2xl flex justify-center items-center flex-col bg-purple-300 sm:bg-red-200 rounded-full p-9 w-full sm:w-[400px] sm:h-[400px]">
                        <h1 className="text-center text-lg font-extrabold text-blue-400">
                              Chat App
                        </h1>
                        <form
                              onSubmit={handleSubmit}
                              className="flex flex-col gap-9 justify-center mt-9 items-center"
                        >
                              <input
                                    className="max-w-full text-center rounded-md"
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                              />
                              <input
                                    className="max-w-full text-center rounded-md"
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                              />
                              <input
                                    className="max-w-full text-center rounded-md"
                                    autoComplete="true"
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    onChange={(e) =>
                                          setPassword(e.target.value)
                                    }
                              />
                              <button className="bg-blue-400 justify-center rounded-md flex w-1/2 text-center p-1 hover:bg-green-400">
                                    {" "}
                                    Sign up
                              </button>
                        </form>
                        <div>
                              <p className="text-sm mt-3 text-cyan-500">
                                    Alredy have an account?
                                    <b className="hover:text-blue-900 cursor-pointer">
                                          <Link to={"/"}> Log In</Link>
                                    </b>
                              </p>
                        </div>
                  </div>
            </div>
      );
};
export default Signup;
