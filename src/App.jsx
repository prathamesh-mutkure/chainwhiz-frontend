import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import BountiesSection from "./pages/BountiesSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BountiesSection />} />
        <Route path="/bounties" element={<BountiesSection />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
