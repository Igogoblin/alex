import React, { useState } from "react";
// import styles from "../main-contact.module.css";
interface ITooltip {
  content: string;
  children: React.ReactNode;
}
function Tooltip({ content, children }: ITooltip) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      {visible && (
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            // left: "50%",
            transform: "translateY(-100%)",
            backgroundColor: "black",
            color: "white",
            padding: "10px 24px",
            borderRadius: "99px",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
          // className={styles.copy}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
