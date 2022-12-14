import Image from "next/image";
import styled from "styled-components";
import Diesel1 from "../src/assets/images/diesel-page/diesel-1.png";
import Diesel2 from "../src/assets/images/diesel-page/diesel-2.png";
import Diesel3 from "../src/assets/images/diesel-page/diesel-3.png";
import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;

  .images-diesel {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    figure {
      flex: 1;
      min-width: 280px;
      max-width: 347px;
    }
  }
`;

export function DieselPage(props) {
  return (
    <Container>
      <div className="body-case">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>Diesel</h2>
        <h5>First, what is DIESEL?</h5>
        <p>
          “Diesel S.p.A. or more popularly known as Diesel is a multinational
          fashion company from Italy. Its main focus is clothing for young
          adults, mainly Jeans. It was founded in 1978 by Renzo Rosso and
          Adriano Goldschmied in the city of Moldava in northern Italy.”
        </p>
        <a
          className="link-case-description"
          href="https://br.diesel.com/"
          target="_Blank"
        >
          Diesel website
        </a>

        <h5>My job here was...</h5>
        <p>
          The people at DIESEL wanted a page to promote Father's Day, basically
          you answered a few questions and found the best gift for your father.
          In addition, the page taught you how to make a drink for your father.
        </p>
        <div class="images-diesel">
          <figure>
            <Image src={Diesel1} alt="Step one Diesel Web App" />
            <figcaption>Step one Diesel Web App</figcaption>
          </figure>
          <figure>
            <Image src={Diesel2} alt="Step two Diesel Web App" />
            <figcaption>Step two Diesel Web App</figcaption>
          </figure>
          <figure>
            <Image src={Diesel3} alt="Step three Diesel Web App" />
            <figcaption>Step three Diesel Web App</figcaption>
          </figure>
        </div>
      </div>
    </Container>
  );
}

export default DieselPage;
