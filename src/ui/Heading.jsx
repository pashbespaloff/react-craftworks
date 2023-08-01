import style from "../components/Body/Body.module.css";

export default function H1({ children }) {
  return (
    <h1 className={style.heading}>{children}</h1>
  )
};