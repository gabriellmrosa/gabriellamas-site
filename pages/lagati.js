import Image from "next/image";
import styled from "styled-components";
import LoadingSvg from "../src/elements/LoadingSvg";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
`;

export function AboutPage(props) {
  return (
    <Container>
      <div className="body-case">
        <Image
          loader={LoadingSvg}
          src="/batata.jpg"
          alt="Gabriel Rosa Frontend & UX/UI Designer"
          unoptimized={true}
          height={500}
          width={500}
        />
      </div>
    </Container>
  );
}

export default AboutPage;
