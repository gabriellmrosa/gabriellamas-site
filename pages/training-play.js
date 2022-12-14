import Image from "next/image";
import styled from "styled-components";
import training1h from "../src/assets/images/training-page/training-1h.png";
import training2 from "../src/assets/images/training-page/training-2.png";
import training3 from "../src/assets/images/training-page/training-3.png";
import training4 from "../src/assets/images/training-page/training-4.png";

import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;

  .images-trainnig-play {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
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
        <h2>Training Play</h2>
        <h5>First, what is Training Play?</h5>
        <p>
          TrainingPlay is the idea of ​​an App that would gather instructional
          videos related to healthy living, physical exercises, training, food,
          breathing, yoga, health in general. In addition, the possibility for
          you to assemble and follow the training sheet of your favorite sport.
        </p>
        <a
          className="link-case-description"
          href="https://trainingplay.com.br/"
          target="_Blank"
        >
          Trainingplay website
        </a>
        <a
          className="link-case-description"
          href="https://app.trainingplay.com.br/"
          target="_Blank"
        >
          Trainingplay WebApp
        </a>

        <figure>
          <Image src={training1h} alt="Training Play website screen" />
          <figcaption>Training Play website screen</figcaption>
        </figure>

        <div class="images-trainnig-play">
          <figure>
            <Image src={training2} alt="Trainingplay screen app" />
            <figcaption>Trainingplay screen app</figcaption>
          </figure>
          <figure>
            <Image src={training3} alt="Trainingplay screen app" />
            <figcaption>Trainingplay screen app</figcaption>
          </figure>
          <figure>
            <Image src={training4} alt="Trainingplay screen app" />
            <figcaption>Trainingplay screen app</figcaption>
          </figure>
        </div>
      </div>
    </Container>
  );
}

export default TrainingPlayPage;
