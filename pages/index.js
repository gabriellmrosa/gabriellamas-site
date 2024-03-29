import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import FirstMessage from "../src/components/FirstMessage";
import Projects from "../src/components/Projects";
import ThemeSwitcherComponent from "../src/components/themeSwitcher";
import ContainerResponsive from "./index.style";

export function HomePage(props) {
  const router = useRouter();
  const floatingMessageRef = useRef();
  const [topDistance, setTopDistance] = useState(null);

  const handleResizeScreen = () => {
    setTopDistance(floatingMessageRef.current.getBoundingClientRect().top);
  };

  useEffect(() => {
    if (router.pathname === "/" && window.innerWidth > 1115) {
      handleResizeScreen();
    }
  }, [router]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ThemeSwitcherComponent />
      <ContainerResponsive>
        <FirstMessage
          staticProps={props}
          floatingMessageRef={floatingMessageRef}
        />
        <Projects topDistance={topDistance} />
      </ContainerResponsive>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "FRONTEND & UX/UI DESIGNER",
      authorName: "Gabriel Rosa",
      description:
        "Here you can see digital products I helped to build, my contacts, and some code projects",
    }, // will be passed to the page component as props
  };
}

export default HomePage;
