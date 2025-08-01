import MenuBlock from "./MenuBlock";
import CVBlock from "./CVBlock";
import SocialBlock from "./SocialBlock";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="flex">
        <MenuBlock />
        <CVBlock />
      </div>

      <SocialBlock />
    </header>
  );
};

export default Header;
