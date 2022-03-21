import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
