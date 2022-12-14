import Image from "next/image";
import styled from "styled-components";
import BannerDasa from "../src/assets/images/dasa-page/banner-dasa.png";
import DasaDash from "../src/assets/images/dasa-page/dasa-dash.png";
import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
`;

export function DasaPage(props) {
  return (
    <Container>
      <div className="body-case">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>Dasa</h2>
        <h5>First, what is DASA?</h5>
        <p>
          “We are a Dasa. A new model that expands and integrates health care
          throughout your life. We bring together the largest network of
          diagnostic medicine, a robust hospital group and the best care
          management company, so you don't miss anything and take care of
          everything. We connect spaces, technologies, knowledge, multiply
          specialties and become a complete company, alive and on the move,
          always evolving. We develop the best in technology and health with new
          digital solutions that we seek in the market, via open innovation and
          in Dasa startups. Today we are more than 40 thousand professionals
          ready to serve‌ ‌every‌ ‌your‌ in health. We are for you. A
          comprehensive health network with a great ‌purpose, which is to make
          you experience your best health every day.”
        </p>
        <a
          className="link-case-description"
          href="https://dasa.com.br/"
          target="_Blank"
        >
          Dasa website
        </a>
        <figure>
          <Image
            src={BannerDasa}
            alt="Image used on the Dasa website, in the part of who we are, in the year 2022"
          />
          <figcaption>
            Image used on the Dasa website, in the part of who we are, in the
            year 2022
          </figcaption>
        </figure>

        <h5>My job here was...</h5>
        <p>
          I was responsible for creating a dashboard for DASA's customers to see
          their health expenditures for their employees and if all these exams,
          consultations, and surgeries are real and not frauds.
        </p>

        <p className="bold">The problem</p>
        <p>
          My dashboard needs to show all the algorithms that DASA offers to its
          customers, if the customer has bought all the algorithms, he sees all
          the algorithms, otherwise he only sees what he bought, but he can buy
          new analyses. In addition, we need filters for health plans, some DASA
          customers use more than one health plan within their company, so each
          algorithm can have two sources, from two different health plans. Big
          numbers are welcome too.
        </p>

        <p className="bold">Solution</p>
        <p>
          I designed a dashboard capable of showing some interesting big
          numbers, showing the contracted algorithms, showing a possibility to
          buy more algorithms and the possibility of filtering by health plan
          and dates.
        </p>
        <figure>
          <Image
            src={DasaDash}
            alt="Example dashboard first prototype for IA analyses"
          />
          <figcaption>
            Example dashboard first prototype for IA analyses
          </figcaption>
        </figure>
      </div>
    </Container>
  );
}

export default DasaPage;
