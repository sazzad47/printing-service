import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "../components/layout";

// routes
import { routes } from "./Routes";
import { AuthProtected } from "./AuthProtected";
// import { NonAuth } from "./NonAuth";

const Index = () => {
  return (
    <>
      <Routes>
        {/* <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<NonAuth>{route.component}</NonAuth>}
              key={idx}
              exact={true}
            />
          ))}
        </Route> */}
        <Route>
          {routes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected>
                  <Layout>{route.component}</Layout>
                </AuthProtected>
              }
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default Index;
