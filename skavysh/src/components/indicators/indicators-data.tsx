import style from "./indicators-data.module.css";

type IndicatorsDataProps = {
  results: {
    title: string;
    subtitle: string;
    isUp: boolean;
  }[];
};

export default function IndicatorsData(props: IndicatorsDataProps) {
  return (
    <div className={style.results}>
      {props.results.map((item, index) => {
        return (
          <div key={index} className={style.result}>
            <div className={style.result__title}>
              {item.title}
              {item.isUp && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66667 5.69458L18 14L1.33333 14L9.66667 5.69458Z"
                    fill="#08723D"
                  />
                </svg>
              )}
            </div>
            <p className={style.result__description}>{item.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}
