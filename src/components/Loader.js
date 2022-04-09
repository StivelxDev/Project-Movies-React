import { ImSpinner } from "react-icons/im";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loaderIcon}>
        <ImSpinner size={70} />
      </span>
    </div>
  );
};
