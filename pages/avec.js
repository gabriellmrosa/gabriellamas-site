import Image from "next/image";
import styled from "styled-components";
import avec1 from "../src/assets/images/avec-page/avec-1.png";
import avec1h from "../src/assets/images/avec-page/avec-1h.png";
import avec2 from "../src/assets/images/avec-page/avec-2.png";
import avec3 from "../src/assets/images/avec-page/avec-3.png";
import avec4 from "../src/assets/images/avec-page/avec-4.png";
import avec5 from "../src/assets/images/avec-page/avec-5.png";
import avec6 from "../src/assets/images/avec-page/avec-6.png";
import avec7 from "../src/assets/images/avec-page/avec-7.png";
import avec8 from "../src/assets/images/avec-page/avec-8.png";
import avec9 from "../src/assets/images/avec-page/avec-9.png";
import avec10 from "../src/assets/images/avec-page/avec-10.png";
import avec11 from "../src/assets/images/avec-page/avec-11.png";
import avec12 from "../src/assets/images/avec-page/avec-12.png";
import avec13 from "../src/assets/images/avec-page/avec-13.png";

import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;

  .images-avec {
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

export function TrainingPlayPage(props) {
  return (
    <Container>
      <div className="body-case">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>AVEC</h2>
        <h5>First, what is AVEC?</h5>
        <p>
          Avec is a company that has digital solutions for barbershops, beauty
          salons, aesthetics and others, in this company
        </p>
        <a
          className="link-case-description"
          href="https://avec.app/negocios/"
          target="_Blank"
        >
          Avec website
        </a>
        <a
          className="link-case-description"
          href="https://play.google.com/store/apps/details?id=com.avec&hl=pt_BR&gl=US&pli=1"
          target="_Blank"
        >
          Avec App
        </a>

        <a
          className="link-case-description"
          href="https://www.behance.net/gallery/126044301/Avec-mobile-app-design?"
          target="_Blank"
        >
          Behance contents
        </a>

        <h5>My job here was...</h5>
        <p>
          I was responsible for redesigning the flow of several products, a
          digital account for employees of barbershops, salons and others,
          redesigns the company's website, think about a possible Design System
          among other responsibilities.
        </p>

        <p className="bold">The problem</p>
        <p>
          They needed to give their webapp a facelift, my job here was to
          suggest new thoughts and new looks for the product.
        </p>

        <p className="bold">The solution</p>
        <p>
          Among a thousand other things, I redid some screens of their app, both
          web app and native app. Some examples here:
        </p>

        <div class="images-avec">
          <figure>
            <Image src={avec1h} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec2} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>

          <figure>
            <Image src={avec3} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec4} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>

          <figure>
            <Image src={avec5} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec6} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>

          <figure>
            <Image src={avec7} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec8} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>

          <figure>
            <Image src={avec9} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec10} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>

          <figure>
            <Image src={avec11} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec12} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
          <figure>
            <Image src={avec13} alt="App screen" />
            <figcaption>App screen</figcaption>
          </figure>
        </div>
      </div>
    </Container>
  );
}

export default TrainingPlayPage;
