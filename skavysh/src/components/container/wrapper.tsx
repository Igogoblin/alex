export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max-w-[1440px] mx-auto w-full"
      style={{ paddingLeft: "150px" }}
    >
      {children}
    </div>
  );
}
