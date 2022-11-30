import { useEffect, useRef, useState } from "react";
import FirstMessage from "../src/components/FirstMessage";
import Projects from "../src/components/Projects";
import ThemeSwitcherComponent from "../src/components/themeSwitcher";

export function HomePage(props) {
  const floatingMessageRef = useRef();
  const [topDistance, setTopDistance] = useState(null);

  useEffect(() => {
    setTopDistance(floatingMessageRef.current.getBoundingClientRect().top);
    window.addEventListener("resize", (event) =>
      setTopDistance(floatingMessageRef.current.getBoundingClientRect().top)
    );
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ThemeSwitcherComponent />
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1280px",
          padding: "0px 24px",
          margin: "0px auto",
          flex: "1",
        }}
      >
        <FirstMessage
          staticProps={props}
          floatingMessageRef={floatingMessageRef}
        />
        <Projects topDistance={topDistance} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "FRONTEND & UX/UI DESIGNER",
      authorName: "Gabriel Lamas",
      description:
        "Here you can see digital products I helped to build, my contacts, and some code projects",
    }, // will be passed to the page component as props
  };
}

export default HomePage;
