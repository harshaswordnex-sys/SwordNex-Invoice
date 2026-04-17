import { useEffect, useState } from "react";
import styles from "./TypingText.module.css";

const TypingText = ({
  text = "",
  speed = 40,
  loop = false,
  delay = 1500,

  // ✅ New props
  color = "#166534",
  fontSize = "26px",
  fontWeight = "bold",
}) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } 
    else if (loop && isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index));
        setIndex(index - 1);
      }, speed / 2);
    } 
    else if (loop && index > text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIndex(index - 1);
      }, delay);
    } 
    else if (loop && index < 0) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, loop, delay]);

  return (
    <h2
      className={styles.tagline}
      style={{
        color,
        fontSize,
        fontWeight,
      }}
    >
      {displayed}
      <span className={styles.cursor}>|</span>
    </h2>
  );
};

export default TypingText;