import FirstMessageComponent from "../src/components/FirstMessageComponent";
import ProjectsComponent from "../src/components/ProjectsComponent";
import ThemeSwitcherComponent from "../src/components/themeSwitcher";

export function HomePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ThemeSwitcherComponent />
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1328px",
          padding: "0px 24px",
          margin: "0px auto",
          flex: "1",
        }}
      >
        <FirstMessageComponent staticProps={props} />
        <ProjectsComponent />
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
