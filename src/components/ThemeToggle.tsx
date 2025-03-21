import React from "react";
import SunIcon from "../assets/Sun";

const ThemeToggle = (): React.ReactNode => {
  return (
    <div
      className="!w-10 !h-10 flex gap-2 items-center justify-center bg-secondary text-primary hover:bg-tertiary cursor-pointer border rounded-lg "
      onClick={() => {
        document.getElementById("root")?.classList.toggle("light");
      }}
    >
      <SunIcon fill={"var(--primary)"} />
    </div>
  );
};

export default ThemeToggle;
