import { BrowserRouter as Router, Routes, Route } from "react-router";

import Header from "../header/Header";
import { MainPage, Page404 } from "../../pages/index";

import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
