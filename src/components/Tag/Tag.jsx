import styles from "./Tag.module.scss";

const Tag = ({ text }) => <span className={styles.tag}>{text}</span>;

export default Tag;
