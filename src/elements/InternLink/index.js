import Link from "next/link";
import { ContainerRight, ContainerLeft } from "./style";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import { ColorModeContext } from "../../components/themeSwitcher/ColorModeProvider";
import { useContext } from "react";

export const InternLinkArrowRight = ({ text, ...rest }) => {
  const contexto = useContext(ColorModeContext);
  return (
    <Link {...rest}>
      <ContainerRight>
        <span>{text}</span>
        <ArrowRightIcon theme={contexto.mode} />
      </ContainerRight>
    </Link>
  );
};

export const InternLinkArrowLeft = ({ text, ...rest }) => {
  const contexto = useContext(ColorModeContext);
  return (
    <Link {...rest}>
      <ContainerLeft>
        <ArrowRightIcon theme={contexto.mode} />
        <span>{text}</span>
      </ContainerLeft>
    </Link>
  );
};
