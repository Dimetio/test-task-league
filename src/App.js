import "./App.css";
import { Routes, Route } from "react-router-dom";
import Input from "./components/input/input";
import { Answer, Info } from "./pages/index";

function App() {
  return (
    <div className="App">
      <section className="section">
        <Routes>
          <Route path="/answer" element={<Answer />} />
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Input />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
