import style from "../components/Body/Body.module.css";

export default function H2({ children }) {
  return (
    <h2 className={style.subheading}>{children}</h2>
  )
};