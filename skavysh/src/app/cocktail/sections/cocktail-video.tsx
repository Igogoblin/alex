import common from "@/styles/common.module.css";

export const CocktailVideo = () => {
  return (
    <section>
      <div className={common["section-container"]}>
        <div className={common["section-title"]}></div>
        <div
          style={{
            margin: "60px auto",
            backgroundColor: "#ededed",
            borderRadius: "24px",
            maxWidth: "729px",
            width: "100%",
            height: "530px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
          }}
        >
          video
        </div>
      </div>
    </section>
  );
};
