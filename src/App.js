import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Searchbar />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
