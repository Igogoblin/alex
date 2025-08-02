import ButtonLink from "./button/button-link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start h-[112px] py-4">
      <div className="flex-direction">
        <p>behance skavysh</p>
        <p>dribbble HolyDoll</p>
      </div>
      <ButtonLink text={"up"} size={24} link={"#"} isUp={true} />
    </footer>
  );
};

export default Footer;
