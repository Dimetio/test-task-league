import styles from "./answer.module.css";
import { useStore } from "effector-react";
import { $search } from "../../components/input/input";
import { getTopQuestions, getTopTagQuestions } from "../../utils/api";
import { useState } from "react";
import Table from "../../components/table/table";

export default function Answer() {
  const [panelData, setPanelData] = useState(null);
  const [isShowPanel, setIsShowPanel] = useState(false);

  const handleTopQuestions = (id) => {
    getTopQuestions(id).then((data) => {
      setPanelData(data.items);
      setIsShowPanel(true);
    });
  };

  const handleTopTagQuestions = (tag) => {
    getTopTagQuestions(tag).then((data) => {
      setPanelData(data.items);
      setIsShowPanel(true);
    });
  };

  const searchStore = useStore($search);
  return (
    <div className={styles.wrapper}>
      {searchStore && (
        <>
          <div className={styles.block}>
            <Table
              items={searchStore}
              handleTopQuestions={handleTopQuestions}
              handleTopTagQuestions={handleTopTagQuestions}
            />
          </div>

          {isShowPanel &&
            (panelData && Object.keys(panelData).length > 0 ? (
              <div className={styles.block}>
                <div
                  className={`${styles.panel} ${
                    isShowPanel && styles.panel__show
                  }`}
                >
                  <Table
                    title="Наиболее популярные вопросы автора"
                    items={panelData}
                    handleTopQuestions={handleTopQuestions}
                    handleTopTagQuestions={handleTopTagQuestions}
                  />
                </div>
              </div>
            ) : (
              <div>не найдено</div>
            ))}
        </>
      )}
    </div>
  );
}
