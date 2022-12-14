import Image from "next/image";
import styled from "styled-components";
import carroFacil from "../src/assets/images/carro-facil-page/porto-seguro-carro-facil.png";

import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
  .body-case h2 {
    max-width: 100%;
  }
`;

export function CarroFacilPage(props) {
  return (
    <Container>
      <div className="body-case">
        <InternLinkArrowLeft text="HOME" href="/" />
        <h2>Porto Seguro Carro Fácil</h2>
        <h5>First, what is Porto Seguro Carro Fácil?</h5>
        <p>
          Porto Seguro Carro Fácil is a Porto Seguro company that offers the
          possibility of having your car by subscription, like netflix.
        </p>
        <a
          className="link-case-description"
          href="https://www.portosegurocarrofacil.com.br/?utm_campaign=CE_divulg_carrofacil&utm_source=interps_inst_link&utm_medium=own&utm_content=acessar_o_site_cta"
          target="_Blank"
        >
          Porto Seguro Carro Fácil current website
        </a>

        <h5>My job here was...</h5>
        <p>
          I worked as a product and frontend designer, I was responsible for
          finding a design solution that would increase the site's conversion
          performance.
        </p>

        <p className="bold">The problem</p>
        <p>
          The website at the time I took this job was very messy, the prices of
          the cars were hidden and to find out you had to do a purchase versus
          financing simulation, it was a slow and non-intuitive experience and
          in the end the price difference wasn't even that big, the advantages
          of signing a car were not clear, and the product, which is something
          with premium value, did not have that face, there was also no online
          checkout, you had to send an email.
        </p>

        <p className="bold">The solution</p>
        <p>
          I created a page with a more 'premium' look and with the prices open
          right away, but along with the great advantages and ease of signing a
          car with Porto Seguro Carro Fácil, I used the images of the cars
          together with a more black look. The direct online checkout was not
          possible due to bureaucratic reasons, but just with the changes I made
          and 10% of the current website traffic I increased 350%-400% the click
          on the buy button, purchase intention.
        </p>

        <figure>
          <Image src={carroFacil} alt="Porto Seguro Carro Faácil" />
          <figcaption>Porto Seguro Carro Fácil</figcaption>
        </figure>
      </div>
    </Container>
  );
}

export default CarroFacilPage;
