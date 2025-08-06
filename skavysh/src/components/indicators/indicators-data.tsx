import style from "./indicators-data.module.css";
import Image from "next/image";
import greenTriangle from "../../../public/triangleGreenChildren.svg";

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
                <Image
                  src={greenTriangle}
                  alt="green triangle"
                  width={20}
                  height={20}
                />
              )}
            </div>
            <p className={style.result__description}>{item.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}
