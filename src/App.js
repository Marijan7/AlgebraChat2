import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/Auth";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
      return (
            <>
                  <AuthContextProvider>
                        <Router>
                              <Routes>
                                    <Route exact path="/" element={<Login />} />

                                    <Route
                                          exact
                                          path="Chat"
                                          element={<Chat />}
                                    />
                                    <Route
                                          exact
                                          path="Signup"
                                          element={<Signup />}
                                    />
                              </Routes>
                        </Router>
                  </AuthContextProvider>
            </>
      );
}

export default App;
