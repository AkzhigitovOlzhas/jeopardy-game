import "./App.css";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { useTypedSelector } from "./hooks";
import { Header } from "./components";

function App() {
  const userName = useTypedSelector((state) => state.statistics.userName);

  return (
    <div className="app">
      {userName ? (
        <>
          <Header />
          <Routes>
            {privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      )}
    </div>
  );
}

export default App;
