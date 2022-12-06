import Link from "next/link";
import { ContainerRight, ContainerLeft } from "./style";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import { ColorModeContext } from "../../components/themeSwitcher/ColorModeProvider";
import { useContext } from "react";

export const InternLinkArrowRight = ({ text, ...rest }) => {
  const context = useContext(ColorModeContext);
  return (
    <Link {...rest}>
      <ContainerRight>
        <span>{text}</span>
        <ArrowRightIcon theme={context.mode} />
      </ContainerRight>
    </Link>
  );
};

export const InternLinkArrowLeft = ({ text, ...rest }) => {
  const context = useContext(ColorModeContext);
  return (
    <Link {...rest}>
      <ContainerLeft>
        <ArrowRightIcon theme={context.mode} />
        <span>{text}</span>
      </ContainerLeft>
    </Link>
  );
};
