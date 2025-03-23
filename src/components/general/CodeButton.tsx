import CodeIcon from "../../assets/Code";
import { IconButton } from "./Button";

const CodeButton = () => {
  return (
    <IconButton
      onClick={() => {
        window.open("https://github.com/abidalikp/drop-board", "_blank");
      }}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="View Source"
      data-tooltip-place="left"
    >
      <CodeIcon fill={"var(--primary)"} />
    </IconButton>
  );
};

export default CodeButton;
