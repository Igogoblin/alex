import style from "../main-contact.module.css";
export default function ContactItem({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={style.contact_item}>{children}</div>;
}
