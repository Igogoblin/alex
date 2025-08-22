import ButtonLink from "./button/button-link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start h-[112px] py-4">
      <div className="flex flex-col gap-3">
        <p className="footer__text">
          <span>behance</span>{" "}
          <span className="footer__text_span">skavysh</span>
        </p>
        <p className="footer__text">
          <span>dribbble</span>{" "}
          <span className="footer__text_span">HolyDoll</span>
        </p>
      </div>
      <ButtonLink text={"up"} size={24} link={"#"} isUp={true} />
    </footer>
  );
};

export default Footer;
