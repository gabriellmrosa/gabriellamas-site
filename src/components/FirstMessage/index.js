import { useContext } from "react";
import { ColorModeContext } from "../themeSwitcher/ColorModeProvider";
import { InternLinkArrowRight } from "../../elements/InternLink";
import Container from "./style";
import BehanceIcon from "../../assets/icons/BehanceIcon.js";
import GithubIcon from "../../assets/icons/GithubIcon.js";
import GmailIcon from "../../assets/icons/GmailIcon.js";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.js";
import TooltipElement from "../../elements/Tooltip";

function FirstMessage({ staticProps, floatingMessageRef }) {
  const contexto = useContext(ColorModeContext);

  return (
    <Container>
      <div className="floating-message" ref={floatingMessageRef}>
        <p className="author">{staticProps.authorName}</p>
        <h1 className="title">{staticProps.h1Title}</h1>
        <h5 className="description">{staticProps.description}</h5>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/gabriel-lamas/"
            target="_blank"
            className="icon"
          >
            <LinkedinIcon theme={contexto.mode} />
            <TooltipElement className={"tooltip"} text="Linkedin" />
          </a>
          <a
            href="mailto:gabrielldarts@gmail.com"
            target="_blank"
            className="icon"
          >
            <GmailIcon />
            <TooltipElement className={"tooltip"} text="Email" />
          </a>
          <a
            href="https://github.com/gabriellamas"
            target="_blank"
            className="icon"
          >
            <GithubIcon theme={contexto.mode} />
            <TooltipElement className={"tooltip"} text="Github" />
          </a>
          <a
            href="https://www.behance.net/gabriellamas"
            target="_blank"
            className="icon"
          >
            <BehanceIcon theme={contexto.mode} />
            <TooltipElement className={"tooltip"} text="Behance" />
          </a>
          <InternLinkArrowRight href="/about" text="About me" />
        </div>
      </div>
    </Container>
  );
}

export default FirstMessage;
