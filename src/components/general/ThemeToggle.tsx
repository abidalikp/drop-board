import React from "react";
import SunIcon from "../../assets/Sun";
import { IconButton } from "./Button";

const ThemeToggle = (): React.ReactNode => {
  return (
    <IconButton
      onClick={() => {
        document.getElementById("root")?.classList.toggle("light");
      }}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Toggle Theme"
      data-tooltip-place="left"
    >
      <SunIcon fill={"var(--primary)"} />
    </IconButton>
  );
};

export default ThemeToggle;
