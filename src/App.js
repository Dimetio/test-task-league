import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Form from "./components/form/form";
import { Questions, Answers, NotFound404 } from "./pages/index";
import Modal from "./components/modal/modal";
import TableDetails from "./components/table-details/table-details";
import "./models/init";

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
          <Route path="/questions/:id" element={<TableDetails />} />
          <Route path={"/answer/:id"} element={<Answers />} />
          <Route path="/" element={<Form />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </section>

      {background && (
        <Routes>
          <Route
            path="/questions/:id"
            element={
              <Modal
                title={"Наиболее популярные вопросы автора"}
                closeModal={onDismiss}
                isOpened={true}
              >
                <TableDetails />
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
                <TableDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
