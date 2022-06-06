import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Quiz from './Quiz';
import Results from './Results';

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
