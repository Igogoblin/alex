import Wrapper from "./wrapper";
import style from "./container.module.css";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.container}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
