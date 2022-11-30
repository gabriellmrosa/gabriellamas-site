import Container from "./style";
import Link from "next/link";
import InternLink from "../../../elements/InternLink";

function Project({ logo, bgLogoColor, title, description, href }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Container bgLogoColor={bgLogoColor}>
        <div className="square">
          <img src={`./logos/${logo}`} alt={"Company Logo"} />
        </div>
        <div className="description">
          <h5>{title}</h5>
          <p>{description}</p>
          <InternLink href={href} text="See more" />
        </div>
      </Container>
    </Link>
  );
}

export default Project;
