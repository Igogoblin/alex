import style from "./container.module.css";
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className={style.wrapper}>{children}</div>;
}
