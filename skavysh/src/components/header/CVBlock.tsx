import style from "./header.module.css";
const CVBlock = () => {
  return (
    <div className={style.cvBlock}>
      <p>
        <span>cv english</span>
        <span>.pdf</span>
      </p>
      <p>
        <span>cv русский</span>
        <span>.pdf</span>
      </p>
    </div>
  );
};

export default CVBlock;
