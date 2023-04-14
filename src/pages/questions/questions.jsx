import styles from "./questions.module.css";
import { useStore } from "effector-react";
import { $search } from "../../components/input/input";
import Table from "../../components/table/table";

export default function Questions() {
  const searchStore = useStore($search);
  return (
    searchStore && (
      <Table title="Данные по запросу в поиске" items={searchStore} />
    )
  );
}
