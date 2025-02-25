import type { Category } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
    category: Category;
};
export default function Category({ category }: Props) {
  if (!category) {
    return null; // categoryがない場合は何も表示しない
  }
  return <span className={styles.tag}>{category.name}</span>;
}
