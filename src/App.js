import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Input from "./components/input/input";
import { Questions, Answers } from "./pages/index";
import Modal from "./components/modal/modal";
import UserQuestions from "./components/user-questions/user-questions";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  function onDismiss() {
    navigate(-1);
  }

  return (
    <div className="App">
      <section className="section">
        <Routes location={background || location}>
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:id" element={<UserQuestions />} />
          <Route path={"/answer/:id"} element={<Answers />} />
          <Route path="/" element={<Input />} />
        </Routes>
      </section>

      {/* {background && (
        <Routes>
          <Route
            path="/questions/:id"
            element={
              <Modal
                title={"Наиболее популярные вопросы автора"}
                closeModal={onDismiss}
                isOpened={true}
              >
                <UserQuestions />
              </Modal>
            }
          />
          <Route
            path="/tag/:id"
            element={
              <Modal
                title={"Вопросы по тегу"}
                closeModal={onDismiss}
                isOpened={true}
              >
                <UserQuestions />
              </Modal>
            }
          />
        </Routes>
      )} */}
    </div>
  );
}

export default App;
