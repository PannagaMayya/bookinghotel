import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";

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
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/hotels"
          element={
            <>
              <Header heading={false} />
              <HotelPage />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
