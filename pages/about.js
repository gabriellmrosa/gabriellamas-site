import Image from "next/image";
import styled from "styled-components";
import LoadingSvg from "../src/elements/LoadingSvg";
import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
  .body-case h2 {
    max-width: 100%;
  }
  figure {
    max-width: 500px;
  }
`;

export function AboutPage(props) {
  return (
    <Container>
      <div className="body-case">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>Hello,</h2>
        <p>
          My name is Gabriel Rosa, I'm from Brazil, and my career started in
          2011 when I was just a Design student and got my first internship.
          From then on, I went through several startups, more solid companies in
          the market, consultancies, and others. In my path, I ended up learning
          to be a frontend developer too, which has already helped me in several
          challenges. If you want to chat get in touch, thanks for visiting!
        </p>

        <figure>
          <Image
            loader={LoadingSvg}
            src="/gabriel-lamas.png"
            alt="Gabriel Rosa Frontend & UX/UI Designer"
            unoptimized={true}
            height={500}
            width={500}
          />
          <figcaption>Gabriel Rosa Fronted & UX/UI Designer</figcaption>
        </figure>
      </div>
    </Container>
  );
}

export default AboutPage;
