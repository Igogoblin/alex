import Line from "../line/Line";
import Wrapper from "./wrapper";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max-w-[1440px] px-[50px] mx-auto w-full"
      style={{ position: "relative" }}
    >
      <Line />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
