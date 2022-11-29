import Tooltip from "./style";

const TooltipElement = ({ text, ...rest }) => {
  return <Tooltip {...rest}>{text}</Tooltip>;
};

export default TooltipElement;
