import Link from "next/link";
import Container from "./style";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import { ColorModeContext } from "../../components/themeSwitcher/ColorModeProvider";
import { useContext } from "react";

const InternLink = ({ text, ...rest }) => {
  const contexto = useContext(ColorModeContext);
  return (
    <Link {...rest}>
      <Container>
        <span>{text}</span>
        <ArrowRightIcon theme={contexto.mode} />
      </Container>
    </Link>
  );
};

export default InternLink;
