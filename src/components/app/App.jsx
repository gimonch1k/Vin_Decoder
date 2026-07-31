import { BrowserRouter as Router, Routes, Route } from "react-router";

import Header from "../header/Header";
import {
  MainPage,
  Page404,
  VariablesPage,
  VariablePage,
} from "../../pages/index";

import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/variables" element={<VariablesPage />} />
          <Route path="/variables/:id" element={<VariablePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
