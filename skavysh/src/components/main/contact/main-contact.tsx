import ButtonLink from "@/components/button/button-link";
import ContactItem from "./contact-item/contact-item";
import style from "./main-contact.module.css";
import CVBlock from "@/components/header/CVBlock";
export default function MainContact() {
  return (
    <section className={style.mainContact}>
      <h2 className={style.title}>Contact me</h2>
      <div className={style.contact_items}>
        <ContactItem>
          <p className={style.text}>Say hi!</p>
          <p>skavysh1987@gmail.com</p>
        </ContactItem>
        <div className={style.contact_item__cv}>
          <ContactItem>
            <p className={style.text}>Connect</p>
            <ButtonLink text={"linkedin"} size={44} link={"#"} />
          </ContactItem>
          <ContactItem>
            <p className={style.text}>Learn more</p>
            <CVBlock />
          </ContactItem>
        </div>
      </div>
    </section>
  );
}
