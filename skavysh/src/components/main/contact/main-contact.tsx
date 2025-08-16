"use client";
import ButtonLink from "@/components/button/button-link";
import ContactItem from "./contact-item/contact-item";
import style from "./main-contact.module.css";
import CVBlock from "@/components/header/CVBlock";
import Tooltip from "./tooltip/tooltip";
export default function MainContact() {
  function copy() {
    navigator.clipboard.writeText("skavysh1987@gmail.com");
  }
  return (
    <section className={style.mainContact} id="contact">
      <h2 className={style.title}>Contact me</h2>
      <div className={style.contact_items}>
        <div className={`${style.contact_item} ${style.bubbleEmail}`}>
          <p className={style.text}>Say hi!</p>
          {/* <button className={style.copy}>Copy e-mail</button> */}
          <Tooltip content="Copy e-mail">
            {/* <button className={style.copy}>Copy e-mail</button> */}
            <p onClick={copy} className={style.email_copy}>
              skavysh1987@gmail.com
            </p>
          </Tooltip>
        </div>
        <div className={style.contact_item__cv}>
          <ContactItem>
            <p className={style.text}>Connect</p>
            <ButtonLink
              text={"linkedin"}
              size={44}
              link={"#"}
              className={style.forStyle}
            />
          </ContactItem>
          <ContactItem>
            <p className={style.text}>Learn more</p>
            <CVBlock isIcon={true} />
          </ContactItem>
        </div>
      </div>
    </section>
  );
}
