import { Routes, Route } from "react-router-dom";
import { Home, Quiz, Results } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="results" element={<Results />} />
    </Routes>
  );
}

export default App;
