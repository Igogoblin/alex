import ButtonLink from "./button/button-link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start h-[112px] py-4">
      <div className="flex-direction">
        <p className="footer__text">
          behance <span className="footer__text_span">skavysh</span>
        </p>
        <p className="footer__text">
          dribbble <span className="footer__text_span">HolyDoll</span>
        </p>
      </div>
      <ButtonLink text={"up"} size={24} link={"#"} isUp={true} />
    </footer>
  );
};

export default Footer;
