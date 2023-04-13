import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import Input from "./components/input/input";
import { Answer, Info } from "./pages/index";

function App() {

  return (
    <div className="App">
      <section className="section">
        <Link to="/">main</Link>
        <Link to="/answer">answer</Link>
        <Link to="/info">info</Link>
        <Routes>
          <Route path="answer" element={<Answer />} />
          <Route path="info" element={<Info />} />
          <Route path="/" element={<Input />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
