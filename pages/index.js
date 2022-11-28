import FirstMessageComponent from "../src/components/FirstMessageComponent";
import ProjectsComponent from "../src/components/ProjectsComponent";
import ThemeSwitcherComponent from "../src/components/themeSwitcher";

export function HomePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ThemeSwitcherComponent />
      <div style={{ display: "flex", width: "100%", flex: "1" }}>
        <FirstMessageComponent staticProps={props} />
        <ProjectsComponent />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "UX/UI DESIGNER & FRONTEND",
      authorName: "Gabriel Lamas",
      description:
        "Here you can see digital products I helped to build, my contacts, and some code projects",
    }, // will be passed to the page component as props
  };
}

export default HomePage;
