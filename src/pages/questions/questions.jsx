import styles from "./questions.module.css";
import { useStore } from "effector-react";
import { modelSearch } from "../../models/search";
import Table from "../../components/table/table";

export default function Questions() {
  const searchStore = useStore(modelSearch.$search);
  return (
    searchStore && (
      <Table title="Данные по запросу в поиске" items={searchStore} />
    )
  );
}
