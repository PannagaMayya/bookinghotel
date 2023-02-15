import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header heading={true} />
              <Searchbar />
              <HomePage />
            </>
          }
        ></Route>
        <Route
          path="/hotels"
          element={
            <>
              <Header heading={false} />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
