import style from "./enumBlock.module.css";
interface EnumBlockProps {
  title: string;
  items: string[];
}

export default function EnumBlock({ title, items }: EnumBlockProps) {
  return (
    <div className={style.enum__block}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {items.map((item, index) => (
          <li key={index} className={style.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
