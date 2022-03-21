import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
//link
import "./App.css";

//pages
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <button
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login ? "log out" : "login"}
          </button>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          {/* matches all paths starting with /about/--- */}
          <Route path="/about/*" element={<About />}></Route>

          {/* Protected Profile page */}
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/about" />}
          ></Route>

          <Route path="/post/:id" element={<Post />}></Route>

          <Route path="*" element={<div>404 page</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
 if we want basename = default page => basename="tutorial"
    then we have localhost:3000/tutorial    localhost:3000/tutorial/home ...


forceRefresh -> refreshes evertime

getUserCofirmation => to give confirmatiob to user by giving a message


*/
