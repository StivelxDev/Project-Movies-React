import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const toggleVisibility = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", toggleVisibility);

      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  });

  return (
    <div className={show ? styles.scrollContainer : styles.scrollOpacity}>
      {show && (
        <button className={styles.scrollButton} onClick={handleClick}>
          <span className={styles.scrollIcon}>
            <HiArrowUp />
          </span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
