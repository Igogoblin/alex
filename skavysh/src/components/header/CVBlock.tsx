import style from "./header.module.css";

interface CVBlockProps {
  isIcon?: boolean;
}

const ArrowIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.0013 30.0371V5.5"
      stroke="#2B2D31"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M36.6673 38.5H7.33398"
      stroke="#2B2D31"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M31.1672 22L21.9987 31.1685L12.832 22"
      stroke="#2B2D31"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

const CVBlock = ({ isIcon = false }: CVBlockProps) => {
  const files = [{ lang: "english" }, { lang: "русский" }];

  return (
    <div className={style.cvBlock}>
      {files.map(({ lang }) => (
        <p key={lang} className={isIcon ? style.cvBlock__item : ""}>
          <span className={isIcon ? style.item_text : ""}>
            {isIcon ? "CV" : "cv"} {lang}
          </span>
          <span className={isIcon ? style.item_file : ""}>.pdf</span>
          {isIcon && <ArrowIcon />}
        </p>
      ))}
    </div>
  );
};

export default CVBlock;
