import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

function AppRouter({ refreshUser, isLoggedIn, userObj }) {
  return (
    <>
      <Router>
        {isLoggedIn && <Navigation userObj={userObj} />}
        <>
          <Routes>
            {isLoggedIn ? (
              <>
                <>
                  <Route path="/" element={<Home userObj={userObj} />} />
                </>
                <>
                  <Route
                    path="/profile"
                    element={
                      <Profile userObj={userObj} refreshUser={refreshUser} />
                    }
                  />
                </>
              </>
            ) : (
              <>
                <Route exact path="/" element={<Auth />} />
              </>
            )}
          </Routes>
        </>
      </Router>
    </>
  );
}

export default AppRouter;
