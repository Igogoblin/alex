import { AVODARK } from "../avodarkData";
import style from "../avoDark.module.css";
export default function AvodarkWorking() {
  return (
    <section className={style.working}>
      <h4 className={style.working__title}>working process</h4>
      <div className={style.working__list}>
        {AVODARK.working.map((item, index) => (
          <div className={style.working__item__container} key={index}>
            <div className={style.working__item}>{item.task}</div>
            {item.subtasks.map((el, ind) => (
              <div key={ind} className={style.working__subtask}>
                {el}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
